import React from 'react'
import TrialNotice from './components/TrialNotice'
import RightSidebar from './components/RightSidebar'
// import BackgroundLayer from '../shared/bg-layer';
import DefaultLayoutHeader from './components/DefaultLayoutHeader';
import DefaultLeftSidbar from './components/DefaultLeftSidbar';

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
    const [open, setOpen] = React.useState(true);
    return (
        <div className="min-h-screen flex flex-col h-screen relative">
            {/* <BackgroundLayer /> */}
            <div>
                {/* <DefaultLayoutHeader open={open} setOpen={setOpen} /> */}
            </div>
            {/* main container */}
            <div className="flex-1 flex flex-row overflow-y-hidden pt-16 ">
                <main className={`flex-1 ${open ? "lg:ml-64 xl:ml-70 md:ml-64 " : "lg:ml-16 xl:ml-16 md:ml-16"} p-4 relative w-full duration-75 h-full transition-width bg-transparent overflow-y-auto`}>
                    {/* <OfferBbanner/> */}
                    {children}
                </main>
                {/* Left Sidebar */}
                <nav className="order-first">
                    <DefaultLeftSidbar open={open} />
                </nav>
                <aside className="hidden lg:block overflow-y-auto border-l dark:border-slate-700 border-gray-100">
                    <RightSidebar />
                </aside>
            </div>
            {/* Screen Notice */}
            <TrialNotice />
        </div>
    )
}

export default DefaultLayout