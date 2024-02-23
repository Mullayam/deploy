import { toast } from "@next/app/hooks/use-toast"
import {
  LogOut,
  Mail,
  MessageSquare,
  Settings,
  UserPlus,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@deploy/shared/components/ui/avatar"
import { Button } from "@deploy/shared/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@deploy/shared/components/ui/dropdown-menu"
import Link from "next/link"
 

export default function UserDropdownMenu() {


  async function handleLogout() {

    toast({
      title: "Logout Successfully",
    })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-full">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="" />
            <AvatarFallback>MJ</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem >
            icon
            <Link href=""> label</Link>
            <DropdownMenuShortcut> kle</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            <Link href={"/user/account-settings"}>Settings</Link>
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <UserPlus className="mr-2 h-4 w-4" />
              <Link href={""}>Invite users</Link>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent forceMount>
                <DropdownMenuItem>
                  <Mail className="mr-2 h-4 w-4" />
                  <Link href={""}>Email</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <MessageSquare className="mr-2 h-4 w-4" />
                  <Link href={""}>Message</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}