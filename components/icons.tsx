interface IconProps {
	className?: string;
}

/**
 * Pixel-drawn social glyphs, carried over from the original mark set —
 * they share the voxel grammar of the logo, which no generic icon set does.
 */

export const GithubPixel = ({ className }: IconProps) => (
	<svg viewBox='0 0 24 24' className={className} fill='currentColor' role='presentation'>
		<path d='M5 2h4v2H7v2H5V2Zm0 10H3V6h2v6Zm2 2H5v-2h2v2Zm2 2v-2H7v2H3v-2H1v2h2v2h4v4h2v-4h2v-2H9Zm0 0v2H7v-2h2Zm6-12v2H9V4h6Zm4 2h-2V4h-2V2h4v4Zm0 6V6h2v6h-2Zm-2 2v-2h2v2h-2Zm-2 2v-2h2v2h-2Zm0 2h-2v-2h2v2Zm0 0h2v4h-2v-4Z' />
	</svg>
);

export const LinkedinPixel = ({ className }: IconProps) => (
	<svg viewBox='0 0 24 24' className={className} fill='currentColor' role='presentation'>
		<path d='M7 23H5v-2h2zm-2-2H3V11h2zm4 0H7V11h2zm4 0h-2v-8h2zm4-8h-2v-2h2zM7 7H5V5h2zM21 15v2h-2v-2zM19 11v2h-2v-2zM21 13v2h-2v-2zM17 17v2h-2v-2zM17 15v2h-2v-2zM17 19v2h-2v-2zM21 17v2h-2v-2zM21 19v2h-2v-2zM19 21v2h-2v-2zM9 3v2H7V3zM15 11v2h-2v-2zM13 11v2h-2v-2zM15 21v2h-2v-2zM5 3v2H3V3zM7 1v2H5V1zM7 9v2H5V9z' />
	</svg>
);
