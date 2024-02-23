
const CookiesCard = ({ type="modal" }: { type: "card" | "notice" | "modal" }) => {
    return (
        <>
            {type === "modal" && <CookiesCardComponent1 />}
            {type === "card" && <CookiesCardComponentBottom />}
            {type === "notice" && <CookiesCardComponentBottomNotice />}
        </>
    )
}

export default CookiesCard

const CookiesCardComponent1 = () => {
    return (
        <>
            {/* component */}
            <section className="fixed max-w-md p-4 z-50 mx-auto bg-white border border-gray-200 dark:bg-gray-800 right-10 bottom-10 dark:border-gray-700 rounded-2xl">
                <h2 className="font-semibold text-gray-800 dark:text-white">
                    🍪 We use cookies!
                </h2>
                <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
                    Hi, this website uses essential cookies to ensure its proper operation and
                    tracking cookies to understand how you interact with it. The latter will
                    be set only after consent.{" "}
                    <a
                        href="#"
                        className="font-medium text-gray-700 underline transition-colors duration-300 dark:hover:text-blue-400 dark:text-white hover:text-blue-500"
                    >
                        Let me choose
                    </a>
                    .{" "}
                </p>
                <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
                    Closing this modal default settings will be saved.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-4 shrink-0">
                    <button className=" text-xs bg-gray-900 font-medium rounded-lg hover:bg-gray-700 text-white px-4 py-2.5 duration-300 transition-colors focus:outline-none">
                        Accept all
                    </button>
                    <button className=" text-xs border text-gray-800 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 font-medium rounded-lg px-4 py-2.5 duration-300 transition-colors focus:outline-none">
                        Reject all
                    </button>
                    <button className=" text-xs border text-gray-800 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 font-medium rounded-lg px-4 py-2.5 duration-300 transition-colors focus:outline-none">
                        Preferences
                    </button>
                    <button className=" text-xs border text-gray-800 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 font-medium rounded-lg px-4 py-2.5 duration-300 transition-colors focus:outline-none">
                        Close
                    </button>
                </div>
            </section>
        </>

    )
}
const CookiesCardComponentBottom = () => {
    return (
        <>
            {/* component */}
            <section className="fixed bottom-0 w-full bg-gray-50 dark:bg-gray-800">
                <div className="container px-4 py-8 mx-auto lg:flex lg:items-center lg:gap-x-16">
                    <p className="text-gray-600 dark:text-gray-300">
                        By clicking “Accept All Cookies”, you agree to the storing of cookies on
                        your device to enhance site navigation, analyze site usage, and assist in
                        our marketing efforts.
                    </p>
                    <div className="flex items-center mt-6 gap-x-4 lg:gap-x-8 shrink-0 lg:mt-0">
                        <button className="w-1/2 text-sm text-gray-800 underline transition-colors duration-300 md:w-auto dark:text-white dark:hover:text-gray-400 hover:text-gray-600 focus:outline-none">
                            Cookie Setting
                        </button>
                        <button className=" text-sm w-1/2 md:w-auto font-medium bg-gray-900 rounded-lg hover:bg-gray-900/80 text-white px-4 py-2.5 duration-300 transition-colors focus:outline-none">
                            Accept All Cookies
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}
const CookiesCardComponentBottomNotice = () => {
    return (
        <>
            <section className="fixed bottom-0 w-full bg-gray-50 dark:bg-gray-800">
                <div className="container px-4 py-8 mx-auto lg:flex lg:items-center lg:gap-x-16">
                    <p className="text-gray-600 dark:text-gray-300">
                        By clicking “Accept All Cookies”, you agree to the storing of cookies on
                        your device to enhance site navigation, analyze site usage, and assist in
                        our marketing efforts.
                    </p>
                    <div className="flex items-center mt-6 gap-x-4 lg:gap-x-8 shrink-0 lg:mt-0">
                        <button className="w-1/2 text-sm text-gray-800 underline transition-colors duration-300 md:w-auto dark:text-white dark:hover:text-gray-400 hover:text-gray-600 focus:outline-none">
                            Cookie Setting
                        </button>
                        <button className=" text-sm w-1/2 md:w-auto font-medium bg-gray-900 rounded-lg hover:bg-gray-900/80 text-white px-4 py-2.5 duration-300 transition-colors focus:outline-none">
                            Accept All Cookies
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}