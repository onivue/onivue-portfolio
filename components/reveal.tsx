'use client';

import type { ReactNode } from 'react';

import { motion } from 'motion/react';

import { usePrefersReducedMotion } from '@/lib/use-media-query';

interface RevealProps {
	children: ReactNode;
	delay?: number;
	y?: number;
	className?: string;
}

/** Scroll-triggered rise. Fires once, and not at all under reduced motion. */
export function Reveal({ children, delay = 0, y = 18, className }: RevealProps) {
	const still = usePrefersReducedMotion();

	if (still) return <div className={className}>{children}</div>;

	return (
		<motion.div
			className={className}
			initial={{ opacity: 0, y }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-12% 0px' }}
			transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
		>
			{children}
		</motion.div>
	);
}
