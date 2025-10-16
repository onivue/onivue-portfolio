import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                black: '#000000',
                white: '#ffffff',
            },
            fontFamily: {
                sans: ['system-ui', '-apple-system', 'sans-serif'],
                mono: ['"Courier New"', 'monospace'],
            },
        },
    },
    plugins: [],
}
export default config
