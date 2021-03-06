const colors = require('tailwindcss/colors')
const animations = require('./tailwind/animations')
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            ...animations,
            fontFamily: {
                sans: ['Poppins', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                darkTheme: '#171a23',
                lightTheme: '#ffffff',

                gray: {
                    700: '#8E8E8E',
                    900: '#363B49',
                },

                black: {
                    900: '#000000',
                    700: '#404040',
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/forms'),
        // ...
    ],
}
