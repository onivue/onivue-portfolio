import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

import { Container } from '@/components/container';
import { Reveal } from '@/components/reveal';
import { SectionLabel } from '@/components/section-label';

const EMAIL = 'onviue@gmail.com';

const ELSEWHERE = [
	{ label: 'GitHub', href: 'https://github.com/onivue' },
	{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/albin-hoti-a1991b237' },
];

export function Contact() {
	return (
		<section id='contact' className='relative scroll-mt-24 py-20 md:py-28'>
			<Container className='relative'>
				<Reveal>
					<SectionLabel>Contact</SectionLabel>
					<h2 className='text-display mt-5 max-w-3xl text-[clamp(2.2rem,6.5vw,4.2rem)]'>
						Got something worth building?
					</h2>
					<p className='mt-6 max-w-lg text-lg leading-relaxed text-ink-soft'>
						Tell me what you&rsquo;re working on. I read everything that lands here and come back within a
						day or two.
					</p>
				</Reveal>

				<Reveal delay={0.1}>
					<Link
						href={`mailto:${EMAIL}`}
						className='group mt-10 inline-flex items-center gap-4 border-b-2 border-line pb-2 text-[clamp(1.15rem,3.5vw,2rem)] font-medium tracking-tight transition-colors duration-300 hover:border-accent'
					>
						<span>{EMAIL}</span>
						<ArrowUpRight className='size-[1em] shrink-0 text-accent transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1' />
					</Link>
				</Reveal>

				<Reveal delay={0.18}>
					<ul className='mt-12 flex flex-wrap gap-x-8 gap-y-3'>
						{ELSEWHERE.map((item) => (
							<li key={item.label}>
								<Link
									href={item.href}
									target='_blank'
									rel='noopener noreferrer'
									className='group inline-flex items-center gap-1.5 text-ink-soft transition-colors hover:text-ink'
								>
									{item.label}
									<ArrowUpRight className='size-4 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100' />
								</Link>
							</li>
						))}
					</ul>
				</Reveal>
			</Container>
		</section>
	);
}
