import { cn } from '@/lib/utils';

/** Eyebrow marker: a filled voxel, then the label in the brand's pixel face. */
export function SectionLabel({ children, className }: { children: React.ReactNode; className?: string }) {
	return (
		<div className={cn('flex items-center gap-2.5', className)}>
			<span className='size-2 bg-accent' aria-hidden />
			<span className='eyebrow pt-px'>{children}</span>
		</div>
	);
}
