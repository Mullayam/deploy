import React from 'react'

import LayoutSidebar from './components/Sidebar'
import CookiesCard from '@deploy/shared/components/common/cookiesCard'
import DefaultLayoutHeader from './components/DefaultLayoutHeader'
import BackgroundLayer from '../common/backgroundlayer'
import BackgroundLayer2 from '../common/backgroundLayer2'
import FooterBanner from '../common/FooterBanner'


const DefaultLayout = ({ children }: { children: React.ReactNode }) => {

    return (
        <div className="antialiased bg-transparent">

            <BackgroundLayer />
            {/* <BackgroundLayer2 /> */}
            <DefaultLayoutHeader />
            <LayoutSidebar />
            <main className="p-4 md:ml-64 h-auto pt-20">
                <div className='rounded-sm border-t-4 border-teal-500'>
                    {children}
                </div>

                <FooterBanner />
            </main>
            {/* <CookiesCard type='modal' /> */}
            <footer className='sticky'>

            </footer>
        </div>

    )
}

export default DefaultLayout