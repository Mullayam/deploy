 
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
 
export default function Alerts({
  title = "Heads up!",
  info = "Pass information ",
  className = "bg-red-400",
}: {
  title?: string
  info?: string
  className?: string
}) {
  return (
    <Alert className={className}>      
      <AlertTitle className="text-white">{title}</AlertTitle>
      <AlertDescription className="font-semibold text-black">
        {info}
      </AlertDescription>
    </Alert>
  )
}