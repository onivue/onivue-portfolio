import clsx from 'clsx'

export const MediaIcon = ({ icon, href = null, className, onClick }) => {
    return (
        <a
            href={href}
            target="_blank"
            className={clsx('', className, onClick && 'cursor-pointer')}
            onClick={onClick}
        >
            <div className="text-black-900 transition duration-200 hover:rotate-12 hover:scale-125 dark:text-white">
                {icon}
            </div>
        </a>
    )
}
