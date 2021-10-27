const colors = require('tailwindcss/colors')

module.exports = {
    mode: 'jit',
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                darkTheme: '#171a23',
                white: {
                    900: '#ffffff',
                    700: '#C9C9CB',
                    500: '#A5A6A9',
                    300: '#363B49',
                },
                gray: {
                    700: '#8E8E8E',
                    900: '#363B49',
                },
                lightTheme: '#ffffff',
                blue: {
                    700: '#7899FB',
                    900: '#3C6CFF',
                },
                black: {
                    900: '#000000',
                    700: '#404040',
                },
                pink: '#EEE8F6',
                cyan: colors.cyan,
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
