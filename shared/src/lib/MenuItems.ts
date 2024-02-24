import { GanttChartSquare, MessageSquareDashed, MessagesSquare, SendHorizontalIcon } from "lucide-react";
import { Icons } from '@deploy/shared/components/icons'

export const SidebarMenuItems = [
    {
        name: "Dashboard",
        path: "/home",
        icon: Icons.PieChart
    },
    {
        name: "Products",
        path: "/e-commerce/products",
        icon: Icons.HiShoppingBag,
    },
    {
        name: "Users list",
        path: "/users/list",
        icon: Icons.HiUsers,
    },
    {
        name: "SMS Panel",
        icon: MessageSquareDashed,
        path: "/sms/panel",
        child: [
            {
                name: "SMS Statistics",
                path: "/sms/statistics",
                icon: MessagesSquare,
            },
            {
                name: "SMS Report",
                path: "/sms/report",
                icon: GanttChartSquare,
            },
            {
                name: "Send Message",
                path: "/sms/send",
                icon: SendHorizontalIcon,
            },
        ]
    },

    {
        name: "More",
        icon: Icons.Pages,
        path: "#",
        child: [
            {
                name: "Sign In",
                path: "/authentication/sign-in",
                icon: null,
            },
            {
                name: "Sign Up",
                path: "/authentication/sign-up",
                icon: null,
            },
            {
                name: "Forget-Password",
                path: "/authentication/forget-password",
                icon: null,
            },
            {
                name: "Error 400",
                path: "/error/not-found",
                icon: null,
            },
            {
                name: "Error 500",
                path: "/error/server-error",
                icon: null,
            },

        ]
    },

]
export const MenuItemsGroup = [
    {
        name: "Docs",
        path: "/",
        icon: Icons.HiClipboard,
    },
    {
        name: "Components",
        path: "/e-commerce/products",
        icon: Icons.HiCollection,
    },
    {
        name: "Help",
        path: "/users/list",
        icon: Icons.HiInformationCircle,
    },

]