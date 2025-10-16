interface LogoProps {
    className?: string
}

const Logo = ({ className }: LogoProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="384"
        height="384"
        fill="none"
        viewBox="0 0 384 384"
        role="presentation"
        className={className}
    >
        <path fill="#121212" d="M0 0h384v384H0z"></path>
        <path fill="#858585" d="M64 192h64v64H64zM128 256h64v64h-64z"></path>
        <path fill="#B9B9B9" d="M128 128h64v64h-64zM128 192h64v64h-64zM192 192h64v64h-64z"></path>
        <path
            fill="#fff"
            d="M192 128h64v64h-64zM256 128h64v64h-64zM256 64h64v64h-64zM192 64h64v64h-64z"
        ></path>
    </svg>
)

export default Logo
