import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@deploy/shared/components/ui/alert-dialog"
  import { Button } from "@deploy/shared/components/ui/button"
  
  export function ConfirmationBox({open,close,onSubmit}:{open:boolean,close:()=>void,onSubmit:()=>void}) {
    return (
      <AlertDialog open={open}>
        {/* <AlertDialogTrigger asChild>
          <Button variant="outline">Show Dialog</Button>
        </AlertDialogTrigger> */}
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Agree to use default Settings</AlertDialogTitle>
            <AlertDialogDescription className="font-semibold">
             You are using default server settings. Please note  if your server confitg are different please enter them to connect with your server.<br/>
             You wont able to change after Confirmation.

            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={close}>Edit</AlertDialogCancel>
            <AlertDialogAction onClick={onSubmit}>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }
  