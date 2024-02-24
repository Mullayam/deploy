
import { cn } from '@deploy/shared/lib'
import Link from 'next/link'

const HeaderLogo = ({ className }: { className?: string }) => {
    return (
        <Link className={cn('flex items-center', className)} href="/">
            <img className="logo mr-3 h-6 sm:h-8 dark:invert" src="/favicon.ico" alt="send-logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white hidden md:block lg:block">
                Deploy
            </span> 
        </Link>
    )
}

export default HeaderLogo