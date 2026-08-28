'use client';

import { Moon, Sun } from 'lucide-react';
import { useMotionValueEvent, useScroll } from 'motion/react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useState } from 'react';

import { cn } from '@/lib/utils';

const LINKS = [
	{ href: '#stack', label: 'Stack' },
	{ href: '#approach', label: 'Approach' },
	{ href: '#contact', label: 'Contact' },
];

function ThemeToggle() {
	const { resolvedTheme, setTheme } = useTheme();

	return (
		<button
			type='button'
			onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
			className='group relative grid size-9 place-items-center rounded-full text-ink-soft transition-colors hover:text-ink'
			aria-label='Switch colour theme'
		>
			<Sun className='absolute size-[18px] rotate-0 scale-100 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] dark:-rotate-90 dark:scale-0' />
			<Moon className='absolute size-[18px] rotate-90 scale-0 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] dark:rotate-0 dark:scale-100' />
		</button>
	);
}

export function Nav() {
	const [lifted, setLifted] = useState(false);
	const { scrollY } = useScroll();

	useMotionValueEvent(scrollY, 'change', (v) => setLifted(v > 24));

	return (
		<header className='fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 md:pt-5'>
			<nav
				className={cn(
					'flex w-full max-w-3xl items-center justify-between gap-2 rounded-full py-2 pl-4 pr-2 transition-all duration-500 sm:gap-4 sm:pl-5',
					lifted
						? 'border border-line bg-bg/85 shadow-[0_8px_32px_-12px_rgb(0_0_0/0.4)] backdrop-blur-2xl backdrop-saturate-150'
						: 'border border-transparent bg-transparent'
				)}
			>
				<Link href='/' className='group flex items-center gap-2 text-[15px] font-semibold tracking-tight'>
					<span className='grid grid-cols-2 gap-[2px]' aria-hidden>
						<span className='size-1.5 bg-ink-faint transition-colors group-hover:bg-accent' />
						<span className='size-1.5 bg-ink transition-colors group-hover:bg-accent' />
						<span className='size-1.5 bg-ink transition-colors group-hover:bg-accent' />
						<span className='size-1.5 bg-ink-faint transition-colors group-hover:bg-accent' />
					</span>
					onivue
				</Link>

				<div className='flex items-center gap-1'>
					<ul className='flex items-center gap-0.5 sm:gap-1'>
						{LINKS.map((link) => (
							<li key={link.href}>
								<Link
									href={link.href}
									className='rounded-full px-2 py-1.5 text-[13px] text-ink-soft transition-colors hover:bg-surface hover:text-ink sm:px-3 sm:text-sm'
								>
									{link.label}
								</Link>
							</li>
						))}
					</ul>
					<ThemeToggle />
				</div>
			</nav>
		</header>
	);
}
