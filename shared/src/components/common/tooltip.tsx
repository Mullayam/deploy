import { Button } from "@deploy/shared/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@deploy/shared/components/ui/tooltip"

export function XTooltip({ children, text }: { children: React.ReactNode, text: string }) {
  return (
    <TooltipProvider >
      <Tooltip>
        <TooltipTrigger asChild>
          <span >{children}</span>
        </TooltipTrigger>
        <TooltipContent align="end" >
          <p>{text}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
