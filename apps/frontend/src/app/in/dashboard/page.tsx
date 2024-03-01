
import { Metadata } from "next"
import Image from "next/image"

import { Button } from "@deploy/shared/components/ui/button"
import { CalendarDateRangePicker } from "@deploy/shared/components/common/datepicker/date-range-picker"
import { MainNav } from "./components/main-nav"
import TabsData from "./components/tabsData"
 

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Example dashboard app built using the components.",
}

export default function DashboardPage() {
  return (
    <>
      {/* <div className="">
        <Image
          src="/examples/dashboard-light.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="block dark:hidden"
        />
        <Image
          src="/examples/dashboard-dark.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="hidden dark:block"
        />
      </div> */}
      <div className=" flex-col md:flex">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
           
            <MainNav className="mx-6" />
            <div className="ml-auto flex items-center space-x-4">
            
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
            <div className="flex items-center space-x-2">
              <CalendarDateRangePicker />
              <Button>Download</Button>
            </div>
          </div>
          <TabsData/>
        
        </div>
      </div>
    </>
  )
}