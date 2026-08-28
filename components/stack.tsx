import { Container } from '@/components/container';
import { Reveal } from '@/components/reveal';
import { SectionLabel } from '@/components/section-label';

/**
 * Grouped by discipline rather than dumped in a flat grid — the grouping
 * is the information: it shows the shape of the toolkit, not just its size.
 */
const STACK: Array<{ group: string; items: string[] }> = [
	{ group: 'Core', items: ['TypeScript', 'React', 'Next.js', 'Astro'] },
	{ group: 'AI', items: ['Claude', 'Codex', 'GitHub Copilot'] },
	{ group: 'Styling', items: ['Tailwind CSS', 'Figma'] },
	{ group: 'Runtime', items: ['Node.js', 'Bun'] },
	{ group: 'Data', items: ['PostgreSQL', 'Neon', 'Supabase', 'Firebase'] },
	{ group: 'Testing', items: ['Playwright'] },
	{ group: 'Tooling', items: ['Vite', 'Git', 'VS Code'] },
	{ group: 'Platform', items: ['Vercel', 'Cloudflare'] },
];

export function Stack() {
	return (
		<section id='stack' className='scroll-mt-24 py-20 md:py-28'>
			<Container>
				<Reveal>
					<SectionLabel>Stack</SectionLabel>
					<h2 className='text-display mt-5 max-w-xl text-[clamp(2rem,5vw,3.1rem)]'>The tools I reach for</h2>
				</Reveal>

				<div className='mt-14 border-t border-line'>
					{STACK.map((row, i) => (
						<Reveal key={row.group} delay={i * 0.05}>
							<div className='group grid grid-cols-1 gap-3 border-b border-line py-6 transition-colors hover:bg-surface/60 sm:grid-cols-[140px_1fr] sm:items-baseline sm:gap-6 sm:px-3'>
								<span className='eyebrow transition-colors group-hover:text-accent'>{row.group}</span>
								<ul className='flex flex-wrap gap-x-6 gap-y-2.5'>
									{row.items.map((item) => (
										<li
											key={item}
											className='text-lg text-ink-soft transition-colors duration-300 hover:text-ink md:text-xl'
										>
											{item}
										</li>
									))}
								</ul>
							</div>
						</Reveal>
					))}
				</div>
			</Container>
		</section>
	);
}
