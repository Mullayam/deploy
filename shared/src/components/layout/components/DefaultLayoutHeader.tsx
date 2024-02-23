import AccountSwitcher from '@/components/shared/account-switcher'
import { Search } from '@/components/shared/search'
import { ThemeToggle } from '@/components/theme/theme-toggle'
import { Link } from 'react-router-dom'
import LayoutUserDropDown from './UserDropDown'
import Notifications from './Notifications'
import Apps from './Apps'
import HeaderLogo from './HeaderLogo'

const DefaultLayoutHeader = ({ open, setOpen }: { open: boolean, setOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
    return (
        <header className="fixed z-30 w-full bg-transparent border-b border-gray-200 transition-colors duration-300 dark:border-gray-700 lg:border-b backdrop-blur dark:bg-transparent">
            <div className="mx-auto flex flex-wrap items-center justify-between ">
                <div className="w-full p-3 lg:px-5 lg:pl-3">

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <button onClick={() => setOpen(!open)} className="mr-3 cursor-pointer rounded p-2 text-gray-600 hover:bg-gray-600 hover:text-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:inline">
                                <svg
                                    aria-hidden="true"
                                    className="w-6 h-6"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                          <HeaderLogo />
                            <div className="ml-16 hidden md:block">
                                <div className="flex items-center px-4">
                                    <AccountSwitcher />
                                    <Search />
                                    <Link
                                        to="/settings"
                                        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary hidden lg:block md:block px-4"
                                    >
                                        Settings
                                    </Link>

                                </div>
                            </div>
                            <span className=" dark:text-white text-slate-800 ">
                                {/* <PopoverMe content={<h1>Hello Ji</h1>}>
                                    <Icons.apps />
                                </PopoverMe> */}
                            </span>
                        </div>
                        <div className="flex items-center lg:gap-3 ">
                            <Notifications />
                            <Apps />
                            <ThemeToggle className="hidden lg:block md:block" />
                            <LayoutUserDropDown />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default DefaultLayoutHeader