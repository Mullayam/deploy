"use client"
import * as React from "react"

import { Button } from "@deploy/shared/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@deploy/shared/components/ui/card"
import { Input } from "@deploy/shared/components/ui/input"
import { Label } from "@deploy/shared/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@deploy/shared/components/ui/select"
import { ScrollArea } from "../ui/scroll-area"
import { ConfirmationBox } from "./confirmationBox"
import { useRouter } from "next/navigation"
import { toast } from "@next/app/hooks/use-toast"
import { InfoIcon } from "lucide-react"
const Domains = [
  "Outlook.com",
  "Gmail.com",
  "Other"
]
interface Auth {
  user: string,
  password: string
}
const ConfigFields = [
  {
    name: "imap_host",
    label: "IMAP Host",
    placeholder: "mail.domain.com",

  },
  {
    name: "imap_port",
    label: "IMAP Port",
    type: "number",
    placeholder: "993",
  },
  {
    name: "smtp_host",
    label: "SMTP Host",
    placeholder: "smtp/mail.domain.com",
  },
  {
    name: "smtp_port",
    label: "SMTP Port",
    type: "number",
    placeholder: "465/587",
  },
]
export function CardWithForm() {
 
  const router = useRouter()
  const [name, setName] = React.useState("")
  const [domainName, setDomainName] = React.useState("")
  const [authDetails, setAuthDetails] = React.useState<null | Partial<Auth>>(null)
  const [selectedDomain, setSelectedDomain] = React.useState<string | null>(null)
  const [openConfirmBox, setOpenConfirmBox] = React.useState<boolean>(false)
  const [config, setConfig] = React.useState<Record<string, any> | null>(null)
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    setConfig({ ...config, [e.target.name]: e.target.value })
    console.log(config)
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const handleCreateButtonSubmit = async () =>{}
  return (
    <Card className="w-full">
    <CardHeader>
      <CardTitle className="text-center">Setup New Mail Account</CardTitle>
      <CardDescription className="text-center">Deploy your new Mailbox Account in one-click.</CardDescription>
    </CardHeader>
    <CardContent>
      <form>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">Your Name</Label>
            <Input placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
            <div className="flex gap-4 items-center ">
              <small className="text-rose-300 ">Your Name going to be use as Tenant Name so keep it unique. </small>
              <InfoIcon className="text-emerald-500 h-4 w-4 hover:text-emerald-600 cursor-pointer" />
            </div>

          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="domain">Domain</Label>
            <Select onValueChange={(value) => setSelectedDomain(value)}>
              <SelectTrigger id="domain">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="0">Outlook</SelectItem>
                <SelectItem value="1">Gmail</SelectItem>
                <SelectItem value="2">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <ScrollArea className={selectedDomain !== null && Domains[+selectedDomain] === "Other" ? "h-60" : ""}>
            {selectedDomain && Domains[+selectedDomain] === "Other" && <div className="flex flex-col space-y-1.5">
              <div className="flex flex-col space-y-2">
                <Label htmlFor="domainname">
                  Domain Name
                </Label>
                <Input placeholder="Domain Name" value={domainName} onChange={(e) => setDomainName(e.target.value)} />
              </div>
            </div>}
            {selectedDomain && Domains[+selectedDomain] === "Other" &&
              <div className="text-center">Mail Server Configuration</div> &&
              ConfigFields.map((item: any, index) =>
              (
                <React.Fragment key={index}>
                  <div className="flex flex-col space-y-1.5">
                    <Label className="mt-2" htmlFor={item.name}>{item.label}</Label>
                    <Input placeholder={item.placeholder} name={item.name} value={config?.[item.name]} onChange={handleInputChange} {...item} />
                  </div>
                </React.Fragment>

              )
              )
            }
            <div className="flex flex-col space-y-2">
              <Label htmlFor="user">
                User
              </Label>
              <Input placeholder="User" type="email" value={authDetails?.user} onChange={(e) => setAuthDetails({ ...authDetails, user: e.target.value })} />
            </div>
            <div className="flex flex-col my-2 space-y-2">
              <Label htmlFor="password">
                Password
              </Label>
              <Input placeholder="Password" value={authDetails?.password} onChange={(e) => setAuthDetails({ ...authDetails, password: e.target.value })} />
            </div>

          </ScrollArea>

        </div>
      </form>

      <ConfirmationBox open={openConfirmBox} close={() => setOpenConfirmBox(false)} onSubmit={handleCreateButtonSubmit} />
    </CardContent>
    <CardFooter className="flex justify-between">
      <Button variant="outline" onClick={() => router.back()}>Cancel</Button>
      {selectedDomain !== null && <Button onClick={Domains[+selectedDomain] === "Other" ? () => setOpenConfirmBox(true) : handleCreateButtonSubmit}>Create</Button>}
    </CardFooter>
  </Card>
  )
}
