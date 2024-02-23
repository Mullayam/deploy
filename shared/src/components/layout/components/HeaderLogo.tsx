
import { cn } from '@/lib/utils'
import { Link } from 'react-router-dom'

const HeaderLogo = ({ className }: { className?: string }) => {
    return (
        <Link className={cn('flex items-center', className)} to="/">
            <img className="logo mr-3 h-6 sm:h-8 dark:invert" src="/logo-dark.svg" alt="send-logo" />
            {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                saveit.
            </span> */}
        </Link>
    )
}

export default HeaderLogo