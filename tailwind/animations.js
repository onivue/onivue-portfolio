module.exports = {
    keyframes: {
        'fade-in': {
            '0%': {
                opacity: '0',
            },
            '20%': {
                opacity: '0',
            },
            '100%': {
                opacity: '1',
            },
        },
        'fade-in-down': {
            '0%': {
                opacity: '0',
                transform: 'translateY(-50px)',
            },
            '100%': {
                opacity: '1',
                transform: 'translateY(0)',
            },
        },
        'fade-out-down': {
            from: {
                opacity: '1',
                transform: 'translateY(0px)',
            },
            to: {
                opacity: '0',
                transform: 'translateY(10px)',
            },
        },
        'fade-in-up': {
            '0%': {
                opacity: '0',
                transform: 'translateY(500px)',
            },
            '100%': {
                opacity: '1',
                transform: 'translateY(0)',
            },
        },

        'fade-out-up': {
            from: {
                opacity: '1',
                transform: 'translateY(0px)',
            },
            to: {
                opacity: '0',
                transform: 'translateY(10px)',
            },
        },
        tilt: {
            '0%, 50%, 100%': {
                transform: 'rotate(30deg)',
            },
            '25%': {
                transform: 'rotate(80deg)',
            },
            '75%': {
                transform: 'rotate(-20deg)',
            },
        },
    },
    animation: {
        'fade-in': 'fade-in 0.3s ease-in',
        'fade-in-down': 'fade-in-down 0.5s ease-out',
        'fade-out-down': 'fade-out-down 0.5s ease-out',
        'fade-in-up': 'fade-in-up 0.5s ease-out',
        'fade-out-up': 'fade-out-up 0.5s ease-out',
        tilt: 'tilt 20s infinite linear',
    },
}
