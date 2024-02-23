 
import { Toggle } from "@deploy/shared/components/ui/toggle"
 
export function ToggleAny({children,text}: {children: React.ReactNode,text:string}) {
  return (
    <Toggle aria-label={text}>
      {children}
    </Toggle>
  )
}