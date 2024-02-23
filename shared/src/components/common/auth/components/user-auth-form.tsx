import * as React from "react";
import { useRouter } from "next/navigation";
import { toast } from "@/hooks/use-toast";

// updated
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Spinner } from "@/components/common/spinner";
import Cookies from 'js-cookie';
import SideAlert from "@/components/alerts/sidealert";
interface UserAuthFormProps extends React.HTMLAttributes<HTMLFormElement> { }


export function UserAuthForm({
  className,
  ...props
}: {

  className?: string;
  props?: UserAuthFormProps;
}) {
  const router = useRouter();

  const [isLoading, setIsLoading] = React.useState(false);
  const [showSetupButton, setShowSetupButton] = React.useState(false);
  const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;

   
  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      setIsLoading(true);
      const AuthCredentials = {
        email: (document.getElementById("email")! as HTMLInputElement).value,
        password: (document.getElementById("password")! as HTMLInputElement).value,
      }

      if (AuthCredentials.email === "") {
        (document.getElementById("email")! as HTMLInputElement).focus()
        toast({
          title: "Email Field is Empty",
          description: "Please Enter Email",
          variant: "destructive",
        })
        return;
      }
      if (emailRegex.test(AuthCredentials.email) === false) {
        (document.getElementById("email")! as HTMLInputElement).focus()
        toast({
          title: "Invalid Email",
          description: "Please Enter Valid Email",
          variant: "destructive",
        })
        return;

      }
      if (AuthCredentials.password === "") {
        (document.getElementById("password")! as HTMLInputElement).focus()
        toast({
          title: "Password Field is Empty",
          description: "Please Enter Password",
          variant: "destructive",
        })
        return;
      }
      const response = await fetch('/api/signin', { method: 'POST', body: JSON.stringify(AuthCredentials) });
      const data = await response.json();
      if (!data.success) {
        setShowSetupButton(true)
        toast({
          title: "Authentication Failed",
          description:data.message,
          variant: "default",
        })
        return;
      }
      const Data = JSON.stringify({ email: AuthCredentials.email, name: "Mullayam" })
      router.push("/mail/u")
      window.localStorage.setItem("iauth", Data);
      Cookies.set('iauth', Data)
    } catch (error: any) {
      setShowSetupButton(true)
      toast({
        title: "Something went wrong",
        description: error.message,
        variant: "destructive",
      })
    } finally {
      setIsLoading(false);
    }
  }


  function keyPress(e: React.KeyboardEvent) {
    if (e.key === "Escape") {
      setIsLoading(false)
    }
  }

  React.useEffect(() => {

    const down = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsLoading(false)
      }
    };

    return () => document.removeEventListener("keydown", down);
  }, [router]);

  return (
    <>
      {isLoading && <Spinner />}
      <form
        onKeyUpCapture={() => keyPress}
        onSubmit={(event) => onSubmit(event)}
        className={cn("grid gap-6 p-4", className)}
        {...props}
      >
        {/* <CardWithForm/> */}
        <div className="flex flex-col space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="email" className="sr-only">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              placeholder="Enter your email address..."

            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email" className="sr-only">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="Password"

            />
          </div>
          <Button type="submit">
            Sign In
          </Button>
        </div>
      </form>
     { showSetupButton &&  <SideAlert text="Setup New Account" handleClickChange={() => router.push("/handler/setup")} />}      
     
       
    </>
  );
}
