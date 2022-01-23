import clsx from 'clsx'

export const MediaIcon = ({ icon, href = null, className }) => {
    return (
        <a href={href} target="_blank" className={clsx('', className)}>
            <div className="transition duration-200 text-black-900 dark:text-white hover:rotate-12 hover:scale-125">
                {icon}
            </div>
        </a>
    )
}
