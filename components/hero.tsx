'use client';

import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';

import { Container } from '@/components/container';
import { GithubPixel, LinkedinPixel } from '@/components/icons';
import { usePrefersReducedMotion } from '@/lib/use-media-query';

// The sculpture is the heaviest thing on the page — keep it out of the
// critical path and off the server.
const VoxelMark = dynamic(() => import('@/components/voxel-mark'), {
	ssr: false,
	loading: () => null,
});

const LINE_1 = 'Full-stack';
const LINE_2 = 'developer';

export function Hero() {
	const still = usePrefersReducedMotion();
	const step = still ? 0 : 1;

	const rise = (delay: number) => ({
		initial: { opacity: 0, y: 20 },
		animate: { opacity: 1, y: 0 },
		transition: { duration: 0.85 * step, delay: delay * step, ease: [0.16, 1, 0.3, 1] as const },
	});

	return (
		<section className='relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24'>
			{/* Voxel lattice, fading out toward the edges */}
			<div
				className='lattice pointer-events-none absolute inset-0 opacity-[0.4] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_35%,black,transparent)]'
				aria-hidden
			/>

			<Container className='relative'>
				<div className='grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-8'>
					<div>
						<motion.div {...rise(0)} className='mb-8 flex items-center gap-3'>
							<Image
								src='/images/me-px.png'
								alt='Albin Hoti'
								width={80}
								height={80}
								className='size-10 rounded-full border border-line object-cover'
								priority
							/>
							<span className='flex items-center gap-2.5 rounded-full border border-line py-1.5 pl-3 pr-4'>
								<span className='relative flex size-2'>
									<span className='absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60' />
									<span className='relative inline-flex size-2 rounded-full bg-accent' />
								</span>
								<span className='eyebrow pt-px'>Open to conversations</span>
							</span>
						</motion.div>

						<h1 className='text-display text-[clamp(2.9rem,9vw,5.6rem)]'>
							<motion.span {...rise(0.08)} className='block'>
								{LINE_1}
							</motion.span>
							<motion.span {...rise(0.16)} className='block text-ink-faint'>
								{LINE_2}
							</motion.span>
						</h1>

						<motion.p {...rise(0.26)} className='mt-7 max-w-md text-lg leading-relaxed text-ink-soft'>
							I&rsquo;m Albin — I build fast, considered interfaces for the web. Mostly React, Next.js and
							TypeScript, from first sketch to production.
						</motion.p>

						<motion.div {...rise(0.34)} className='mt-9 flex flex-wrap items-center gap-3'>
							<Link
								href='#contact'
								className='group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-bg transition-transform duration-300 hover:-translate-y-0.5'
							>
								Get in touch
								<ArrowUpRight className='size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />
							</Link>
							<Link
								href='https://github.com/onivue'
								target='_blank'
								rel='noopener noreferrer'
								className='grid size-11 place-items-center rounded-full border border-line text-ink-soft transition-colors hover:border-ink hover:text-ink'
								aria-label='GitHub'
							>
								<GithubPixel className='size-[18px]' />
							</Link>
							<Link
								href='https://www.linkedin.com/in/albin-hoti-a1991b237'
								target='_blank'
								rel='noopener noreferrer'
								className='grid size-11 place-items-center rounded-full border border-line text-ink-soft transition-colors hover:border-ink hover:text-ink'
								aria-label='LinkedIn'
							>
								<LinkedinPixel className='size-[18px]' />
							</Link>
						</motion.div>
					</div>

					{/* Signature: the mark, extruded */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1.1 * step, delay: 0.15 * step }}
						className='relative mx-auto aspect-square w-full max-w-[440px]'
					>
						<div className='bloom absolute inset-[18%] opacity-20 dark:opacity-30' aria-hidden />
						<div className='absolute inset-0'>
							<VoxelMark />
						</div>
					</motion.div>
				</div>
			</Container>
		</section>
	);
}
