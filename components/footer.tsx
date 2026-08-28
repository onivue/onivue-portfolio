import { Container } from '@/components/container';
import Logo from '@/components/logo';

export function Footer() {
	return (
		<footer className='border-t border-line py-10'>
			<Container>
				<div className='flex flex-col items-center justify-between gap-5 sm:flex-row'>
					<div className='flex items-center gap-3'>
						<Logo className='size-7 rounded-md' />
						<span className='text-sm text-ink-soft'>Designed &amp; built by Albin Hoti</span>
					</div>
					<span className='eyebrow'>&copy; {new Date().getFullYear()} onivue</span>
				</div>
			</Container>
		</footer>
	);
}
