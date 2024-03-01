"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { useRouter as useRouterServer } from "next/router";
import { toast } from "@next/app/hooks/use-toast";
import axios from "axios";
 


// updated

import { cn } from "@deploy/shared/lib";
import { Icons } from "@deploy/shared/components/icons";
import { Button } from "@deploy/shared/components/ui/button";
import { Input } from "@deploy/shared/components/ui/input";
import { Label } from "@deploy/shared/components/ui/label";
import { Separator } from "@deploy/shared/components/ui/separator";
 

type UserAuthFormProps = React.HTMLAttributes<HTMLFormElement>

export type InputData = {
  firstName: string
  lastName: string
  phone: number
  email: string
  password: string
}
export function UserAuthForm({
  className,
  type,
  ...props
}: {
  type: string
  className?: string
  props?: UserAuthFormProps
}) {
 
  const router = useRouter()
//   const change = useRouterServer()

  const FormType = type
  const [isLoading, setIsLoading] = React.useState(false)
  const [disabled, setDisabled] = React.useState(false)
  const [inputs, setInputs] = React.useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
  })

  const callbackURL = "/"
//   if (change.query) {
//     callbackURL = `${change.query.callbackURL}`
//   }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)
    toast({
      title: "Are Ruko Zara, Sabar Kro...",
    })
    // dispatch(setLoader(true))
    await new Promise((resolve) => setTimeout(resolve, 1000))
    FormType === "signin" ? await LoginHandle() : await SignUpHandle()
    await new Promise((resolve) => setTimeout(resolve, 1000))
    // dispatch(setLoader(false))
  }
  async function LoginHandle() {
    const { data } = await axios.post("/api/auth/login", {
      email: inputs.email,
      password: inputs.password,
    })
    if (data.success) {
    //   dispatch(setAuth(true))
      router.push(callbackURL)
      return toast({
        title: "Redirecting...",
        description: data.message,
      })
    } else {
      setIsLoading(false)
      return toast({
        title: "Something went wrong",
        description: data.message,
        variant: "destructive",
      })
    }
  }
  async function SignUpHandle() {
    const { data } = await axios.post("/api/auth/new", inputs)
    if (data.success) {
      router.push(callbackURL)
      return toast({
        title: "Redirecting...",
        description: data.message,
      })
    } else {
      return toast({
        title: "Something went wrong",
        description: data.message,
        variant: "destructive",
      })
    }
  }
  function handleChangeInputValue(e: React.ChangeEvent<HTMLInputElement>) {
    setInputs({ ...inputs, [e.target.id]: e.target.value })
  }
  function keyPress(e:KeyboardEvent) {
    if (e.key === "Escape") {
    //   setLoader(false)
    }
  } 

  React.useEffect(() => {
    if (FormType === "signin") {
      if (inputs.email && inputs.password) {
        return setDisabled(false)
      }
      setDisabled(true)
    } else {
      if (inputs.firstName && inputs.phone && inputs.password && inputs.email) {
        return setDisabled(false)
      }
      setDisabled(true)
    }
  }, [FormType, inputs])
  React.useEffect(() => {
    let retry = true
    if (retry) {
      setInterval(() => {
        const redirect = window.localStorage.getItem("redirect") || null
        if (redirect) {
        //   setLoader(false)
          retry = false
          router.push(callbackURL)
          window.localStorage.removeItem("redirect")
        }
      }, 5000)
    }
    const down = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        // setLoader(false)
      }
    }
   
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <>
      <form
        onKeyUpCapture={() => keyPress}
        onSubmit={(event) => onSubmit(event)}
        className={cn("grid gap-6 p-4", className)}
        {...props}
      >
        <div className="flex flex-col space-y-4">
          {FormType === "signup" ? (
            <>
              <div className="grid gap-2">
                <Input
                  id="firstName"
                  type="text"
                  autoCapitalize="none"
                  placeholder="First Name"
                  value={inputs.firstName}
                  onChange={handleChangeInputValue}
                />
              </div>
              <div className="grid gap-2">
                <Input
                  id="phone"
                  type="number"
                  placeholder="Enter your Phone"
                  value={inputs.phone}
                  onChange={handleChangeInputValue}
                />
              </div>
            </>
          ) : null}

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
              value={inputs.email}
              onChange={handleChangeInputValue}
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
              value={inputs.password}
              onChange={handleChangeInputValue}
            />
          </div>
          <Button type="submit" disabled={disabled}>
            {FormType === "signup" ? "Sign Up" : "Login"}{" "}
          </Button>
        </div>
      </form>
      {FormType === "signin" ? (
        <>
          <Separator />
          <div className="grid gap-6 p-4">
            <Button
            //   onClick={handleGoogleLogin}
              disabled={isLoading}
              variant="outline"
            >
              <Icons.google  />
              Continue with Google
            </Button>
          </div>
        </>
      ) : null}
    </>
  )
}