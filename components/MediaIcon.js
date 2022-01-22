import clsx from 'clsx'
import { motion } from 'framer-motion'

export const MediaIcon = ({ icon, href, className }) => {
    return (
        <a href={href} target="_blank" className={clsx('', className)}>
            <div className="transition duration-200 text-black-900 dark:text-white-900 hover:rotate-12 hover:scale-125">
                {icon}
            </div>
        </a>
    )
}
