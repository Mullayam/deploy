import { Icons } from "@/components/icons"
import RightDrawer from "@/components/shared/rightDrawer"
import { Link } from "react-router-dom"

const RightSidebar = () => {
    return (
        <div className="flex flex-col items-center w-16 h-full overflow-hidden text-gray-400  rounded">
            <a className="flex items-center justify-center mt-3" href="#">
                <Icons.box />
            </a>
            <div className="flex flex-col items-center mt-3 border-t border-gray-700">
                <Link className="flex items-center justify-center w-12 h-12 mt-2 rounded dark:hover:bg-gray-700 dark:hover:text-gray-300 text-gray-200 bg-gray-700" to="/mail/u/inbox">
                    <Icons.home />
                </Link>

                <Link className="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" to="#">
                    <RightDrawer>
                        <Icons.analytics />
                    </RightDrawer>
                </Link>

            </div>
            <div className="flex flex-col items-center mt-2 border-t border-gray-700">
                <Link className="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" to="#">
                    <Icons.cart />
                </Link>
                <Link className="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" to="#">
                    <Icons.settingsVertical />
                </Link>
                <span className="relative flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-700 hover:text-gray-300">
                    <Icons.message />
                    <span className="absolute top-0 left-0 w-2 h-2 mt-2 ml-2 bg-indigo-500 rounded-full"></span>
                </span>
            </div>
            <span className="flex items-center justify-center w-[64px] h-[62px]  mt-auto  hover:text-gray-300" >
                <Icons.userIcon />
            </span>

        </div>
    )
}

export default RightSidebar