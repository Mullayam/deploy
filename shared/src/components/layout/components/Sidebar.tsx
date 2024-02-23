import SidebarBottomPanel from './SidebarBottomPanel'
import SidebarListItems from './SidebarListItems'

const LayoutSidebar = () => {
  return (
    <aside
      className="fixed top-0 left-0 z-40 w-64 h-screen pt-14 transition-transform -translate-x-full bg-white border-r border-gray-200 md:translate-x-0 dark:bg-gray-900 dark:border-gray-700"
      aria-label="Sidenav"
      id="drawer-navigation"
    >
      <div className="overflow-y-auto py-5 px-3 h-full ">
        <SidebarListItems />
      </div>
      <div className="absolute bottom-0 left-0 justify-center p-4 space-x-4 w-full lg:flex bg-transparent z-20">
        <SidebarBottomPanel />
      </div>
    </aside>
  )
}

export default LayoutSidebar