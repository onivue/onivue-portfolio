import { Approach } from '@/components/approach';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';
import { Hero } from '@/components/hero';
import { Nav } from '@/components/nav';
import { Stack } from '@/components/stack';

export default function Home() {
	return (
		<>
			<Nav />
			<main className='relative overflow-hidden'>
				{/* Ambient warmth, low on the page — it lifts the closing
				    sections without washing over the work above them. */}
				<div
					className='glow-field pointer-events-none absolute bottom-[6%] left-1/2 h-[380px] w-[min(1000px,110%)] -translate-x-1/2 opacity-[0.14] dark:opacity-25'
					aria-hidden
				/>
				<div className='relative'>
					<Hero />
					<Stack />
					<Approach />
					<Contact />
				</div>
			</main>
			<Footer />
		</>
	);
}
