import { XTooltip } from '@/components/shared/xtooltip'
import { ThemeToggle } from '@/components/theme/theme-toggle'
import { useLayout } from '@/hooks/useLayout'
import { PanelLeftOpen, PanelRightOpen } from 'lucide-react'
import React from 'react'

const SidebarBottomPanel = () => {
  const { currentLayout, setActiveLayout } = useLayout()

  return (
    <React.Fragment>
      <XTooltip text={currentLayout === "root" ? "Switch to Default Layout" : "Switch to Root Layout"}>
        <span
          className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-600"
        >
          {currentLayout === "root" ? <PanelLeftOpen onClick={() => setActiveLayout("default")} /> : <PanelRightOpen onClick={() => setActiveLayout("root")} />}

        </span>
      </XTooltip>
      <ThemeToggle />

    </React.Fragment>
  )
}

export default SidebarBottomPanel