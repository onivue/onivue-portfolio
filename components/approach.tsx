import { Container } from '@/components/container';
import { Reveal } from '@/components/reveal';
import { SectionLabel } from '@/components/section-label';

const PRINCIPLES = [
	{
		title: 'Fast by default',
		body: 'Performance is a feature. I ship small bundles, lean rendering and pages that are usable before they finish loading.',
	},
	{
		title: 'Built to be changed',
		body: 'Typed end to end, with clear seams. Code that the next person — often future me — can pick up without a map.',
	},
	{
		title: 'Detail decides it',
		body: 'Focus states, empty states, reduced motion, the keyboard path. The parts nobody praises are the parts people feel.',
	},
];

export function Approach() {
	return (
		<section id='approach' className='scroll-mt-24 py-20 md:py-28'>
			<Container>
				<Reveal>
					<SectionLabel>Approach</SectionLabel>
					<h2 className='text-display mt-5 max-w-2xl text-[clamp(2rem,5vw,3.1rem)]'>How I build things</h2>
				</Reveal>

				<div className='mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3'>
					{PRINCIPLES.map((p, i) => (
						<Reveal key={p.title} delay={i * 0.08} className='bg-bg'>
							<article className='group h-full bg-bg p-7 transition-colors duration-500 hover:bg-surface md:p-9'>
								{/* One voxel per card — these are parallel principles,
								    not a sequence, so nothing here counts. */}
								<span
									className='mb-6 block size-2.5 bg-accent transition-transform duration-500 group-hover:rotate-45'
									aria-hidden
								/>
								<h3 className='text-xl font-semibold tracking-tight'>{p.title}</h3>
								<p className='mt-3 leading-relaxed text-ink-soft'>{p.body}</p>
							</article>
						</Reveal>
					))}
				</div>
			</Container>
		</section>
	);
}
