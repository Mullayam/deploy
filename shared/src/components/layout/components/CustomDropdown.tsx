import Link from 'next/link'
import React from 'react'

const CustomDropdown = () => {
    return (
        <React.Fragment>
            <div className="">
                <div className="flex items-center justify-center">
                    <div className=" relative inline-block text-left dropdown">
                        <span className="rounded-md shadow-sm">
                            <button
                                className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
                                type="button"
                                aria-haspopup="true"
                                aria-expanded="true"
                                aria-controls="headlessui-menu-items-117"
                            >
                                <span>Options</span>
                                <svg
                                    className="w-5 h-5 ml-2 -mr-1"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                        </span>
                        <div className="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
                            <div
                                className="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
                                aria-labelledby="headlessui-menu-button-1"
                                id="headlessui-menu-items-117"
                                role="menu"
                            >
                                <div className="px-4 py-3">
                                    <p className="text-sm leading-5">Signed in as</p>
                                    <p className="text-sm font-medium leading-5 text-gray-900 truncate">
                                        tom@example.com
                                    </p>
                                </div>
                                <div className="py-1">
                                    <Link
                                        href="#"
                                        tabIndex={0}
                                        className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                                        role="menuitem"
                                    >
                                        Account settings
                                    </Link>
                                    <Link
                                        href="#"
                                        tabIndex={1}
                                        className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                                        role="menuitem"
                                    >
                                        Support
                                    </Link>
                                    <span
                                        role="menuitem"
                                        tabIndex={-1}
                                        className="flex justify-between w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 cursor-not-allowed opacity-50"
                                        aria-disabled="true"
                                    >
                                        New feature (soon)
                                    </span>
                                    <Link
                                        href="#"
                                        tabIndex={2}
                                        className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                                        role="menuitem"
                                    >
                                        License
                                    </Link>
                                </div>
                                <div className="py-1">
                                    <Link
                                        href="#"
                                        tabIndex={3}
                                        className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                                        role="menuitem"
                                    >
                                        Sign out
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style
                dangerouslySetInnerHTML={{
                    __html:
                        "\n.dropdown:focus-within .dropdown-menu {\n  opacity:1;\n  transform: translate(0) scale(1);\n  visibility: visible;\n}\n    "
                }}
            />
        </React.Fragment>

    )
}

export default CustomDropdown