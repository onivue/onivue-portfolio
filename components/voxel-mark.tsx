'use client';

import type { Group, Mesh, MeshStandardMaterial } from 'three';

import { RoundedBox } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTheme } from 'next-themes';
import { useMemo, useRef, useState } from 'react';
import { MathUtils } from 'three';

import { usePrefersReducedMotion } from '@/lib/use-media-query';

/**
 * The onivue mark is a 6x6 pixel grid: a staircase climbing to the
 * upper-right in three tones. These are those exact cells, lifted from
 * the SVG and re-expressed as [x, y, tier] — tier drives depth, colour
 * and glow, so the flat logo becomes the voxel sculpture it implied.
 */
const CELLS: Array<[number, number, number]> = [
	[-1.5, -0.5, 0],
	[-0.5, -1.5, 0],
	[-0.5, 0.5, 1],
	[-0.5, -0.5, 1],
	[0.5, -0.5, 1],
	[0.5, 0.5, 2],
	[1.5, 0.5, 2],
	[1.5, 1.5, 2],
	[0.5, 1.5, 2],
];

const GAP = 1.06;
const TIER_Z = [-0.42, 0, 0.42];
const ASSEMBLE = 1.15;
const BREATHE_IN = 0.9;

/**
 * Resting orientation. Turned to the right so the key light at +x catches
 * the top faces of the bright tier straight away, rather than only once
 * the sway happens to swing that way. The idle sway damps back to these,
 * so they have to change here — not just on the initial rotation prop.
 */
const REST_Y = 0.2;
const REST_X = -0.17;

/**
 * easeOutExpo, normalised so it lands on exactly 1. The textbook form
 * stops at 1 - 2^-10, and that leftover gap snaps shut on the final
 * frame — which is what read as a twitch.
 */
const easeOutExpo = (x: number) => (x >= 1 ? 1 : (1 - 2 ** (-10 * x)) / (1 - 2 ** -10));

const clamp01 = (x: number) => (x < 0 ? 0 : x > 1 ? 1 : x);

type Palette = { base: string[]; emissive: string; intensity: number[] };

const PALETTE: Record<'light' | 'dark', Palette> = {
	dark: {
		base: ['#4d535e', '#9aa2ad', '#f7f8fa'],
		emissive: '#ffb020',
		intensity: [0.04, 0.1, 0.4],
	},
	light: {
		base: ['#d5d9df', '#8b929c', '#1f2228'],
		emissive: '#ff6b35',
		intensity: [0, 0, 0.012],
	},
};

function Voxel({
	cell,
	index,
	palette,
	still,
	hovered,
	anyHovered,
	onEnter,
	onLeave,
}: {
	cell: [number, number, number];
	index: number;
	palette: Palette;
	still: boolean;
	hovered: boolean;
	anyHovered: boolean;
	onEnter: (i: number) => void;
	onLeave: () => void;
}) {
	const ref = useRef<Mesh>(null);
	const material = useRef<MeshStandardMaterial>(null);
	const [x, y, tier] = cell;

	// Scatter each voxel to a deterministic off-grid start so the mark
	// assembles itself on load rather than simply fading in.
	const from = useMemo(() => {
		const angle = index * 2.399;
		return {
			x: x + Math.cos(angle) * 7,
			y: y + Math.sin(angle) * 7,
			z: TIER_Z[tier] - 6,
		};
	}, [index, x, y, tier]);

	const delay = index * 0.07;
	const elapsed = useRef(0);
	const spread = useRef(0);
	const pop = useRef(0);

	useFrame((_, rawDt) => {
		const mesh = ref.current;
		if (!mesh) return;

		// A stalled frame (shader compile, texture upload) hands us a huge
		// delta; clamping keeps that from throwing the sculpture forward.
		const dt = Math.min(rawDt, 1 / 30);

		if (still) {
			mesh.position.set(x * GAP, y * GAP, TIER_Z[tier]);
			mesh.rotation.set(0, 0, 0);
			mesh.scale.setScalar(1);
			return;
		}

		elapsed.current += dt;
		const local = elapsed.current - delay;
		const t = easeOutExpo(clamp01(local / ASSEMBLE));

		// Hover response, damped rather than switched, so entering and
		// leaving are both smooth.
		spread.current = MathUtils.damp(spread.current, anyHovered ? 1 : 0, 5, dt);
		pop.current = MathUtils.damp(pop.current, hovered ? 1 : 0, 9, dt);

		// Breathing eases in *after* the voxel lands. Amplitude starts at
		// zero, so there is no step where assembly hands over to idle.
		const since = local - ASSEMBLE;
		const breatheAmt = clamp01(since / BREATHE_IN);
		const breathe = Math.sin(since * 1.15 + tier * 0.7) * 0.07 * breatheAmt;

		// Hovering pulls the tiers apart into an exploded view — the mark
		// is built in layers, and this is what shows that.
		const explode = (tier - 1) * 0.55 * spread.current;

		const targetX = x * GAP * (1 + 0.06 * spread.current);
		const targetY = y * GAP * (1 + 0.06 * spread.current);
		const targetZ = TIER_Z[tier] + breathe + explode + pop.current * 0.42;

		mesh.position.x = MathUtils.lerp(from.x, targetX, t);
		mesh.position.y = MathUtils.lerp(from.y, targetY, t);
		mesh.position.z = MathUtils.lerp(from.z, targetZ, t);

		mesh.rotation.x = (1 - t) * Math.PI * 1.1;
		mesh.rotation.y = (1 - t) * Math.PI * 0.8;
		mesh.rotation.z = pop.current * 0.3 + spread.current * 0.08;
		mesh.scale.setScalar((0.35 + t * 0.65) * (1 + pop.current * 0.12));

		if (material.current) {
			const lit = palette.intensity[tier] + pop.current * 0.55 + spread.current * 0.18;
			material.current.emissiveIntensity = MathUtils.damp(material.current.emissiveIntensity, lit, 10, dt);
		}
	});

	return (
		<RoundedBox
			ref={ref}
			args={[1, 1, 1]}
			radius={0.11}
			smoothness={3}
			position={[from.x, from.y, from.z]}
			onPointerOver={(e) => {
				e.stopPropagation();
				onEnter(index);
			}}
			onPointerOut={onLeave}
		>
			<meshStandardMaterial
				ref={material}
				color={palette.base[tier]}
				emissive={palette.emissive}
				emissiveIntensity={palette.intensity[tier]}
				roughness={tier === 2 ? 0.22 : 0.55}
				metalness={tier === 2 ? 0.55 : 0.25}
			/>
		</RoundedBox>
	);
}

function Sculpture({
	palette,
	still,
	onActive,
}: {
	palette: Palette;
	still: boolean;
	onActive: (active: boolean) => void;
}) {
	const group = useRef<Group>(null);
	const [hovered, setHovered] = useState<number | null>(null);

	const enter = (i: number) => {
		setHovered(i);
		onActive(true);
	};
	const leave = () => {
		setHovered(null);
		onActive(false);
	};

	useFrame((state, rawDt) => {
		const g = group.current;
		if (!g) return;
		if (still) {
			g.rotation.set(REST_X, REST_Y, 0);
			return;
		}
		const dt = Math.min(rawDt, 1 / 30);
		const time = state.clock.elapsedTime;

		// A constant slow sway left and right, with the pointer nudging it
		// rather than driving it, so the mark is never completely static.
		const sway = Math.sin(time * 0.42) * 0.3;
		const bob = Math.sin(time * 0.31) * 0.05;

		g.rotation.y = MathUtils.damp(g.rotation.y, REST_Y + sway + state.pointer.x * 0.35, 2.5, dt);
		g.rotation.x = MathUtils.damp(g.rotation.x, REST_X + bob + state.pointer.y * -0.25, 2.5, dt);
		g.rotation.z = MathUtils.damp(g.rotation.z, state.pointer.x * 0.04, 2.5, dt);
	});

	return (
		<group ref={group} rotation={[REST_X, REST_Y, 0]}>
			{CELLS.map((cell, i) => (
				<Voxel
					key={`${cell[0]}:${cell[1]}`}
					cell={cell}
					index={i}
					palette={palette}
					still={still}
					hovered={hovered === i}
					anyHovered={hovered !== null}
					onEnter={enter}
					onLeave={leave}
				/>
			))}
		</group>
	);
}

export default function VoxelMark() {
	const { resolvedTheme } = useTheme();
	const still = usePrefersReducedMotion();

	const [active, setActive] = useState(false);

	const palette = PALETTE[resolvedTheme === 'light' ? 'light' : 'dark'];
	const key = resolvedTheme === 'light' ? 'light' : 'dark';

	return (
		<Canvas
			camera={{ position: [0, 0, 9.5], fov: 42 }}
			dpr={[1, 2]}
			gl={{ antialias: true, alpha: true }}
			className={active && !still ? 'cursor-pointer' : ''}
		>
			<ambientLight intensity={key === 'light' ? 1.5 : 0.7} />
			<directionalLight position={[4, 6, 6]} intensity={key === 'light' ? 2.4 : 2.9} />
			<pointLight
				position={[-5, -3, 3]}
				intensity={key === 'light' ? 6 : 28}
				color={key === 'light' ? '#ffffff' : palette.emissive}
				distance={18}
			/>
			<Sculpture palette={palette} still={still} onActive={setActive} />
		</Canvas>
	);
}
