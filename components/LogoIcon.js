function LogoIcon({ className, ...props }) {
    return (
        <svg
            className={`${className || 'h-5 w-5'}`}
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                fill="url(#paint0_linear_1938_7)"
                d="M5.183 34.376c-2.61.46-5.141-1.29-5.18-3.94a30 30 0 1130.608 29.558c-2.65.054-4.487-2.414-4.118-5.04.369-2.624 2.817-4.394 5.456-4.647A20.4 20.4 0 109.638 28.76c-.161 2.646-1.844 5.155-4.455 5.615z"
            ></path>
            <path fill="#47F4C8" d="M22 45.5a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"></path>
            <defs>
                <linearGradient
                    id="paint0_linear_1938_7"
                    x1="3.5"
                    x2="30"
                    y1="33"
                    y2="65.5"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#39FECB"></stop>
                    <stop offset="0.536" stopColor="#43F6A3"></stop>
                    <stop offset="1" stopColor="#4DF082"></stop>
                </linearGradient>
            </defs>
        </svg>
    )
}

export default LogoIcon
