import { LayoutDashboard, ListTodo, Users } from "lucide-react";
import { type NavItem } from "@/types";

export const NavItems: NavItem[] = [
    {
        title: "Dashboard",
        icon: LayoutDashboard,
        href: "/",
        color: "text-sky-500",
    },
    {
        title: "Users",
        icon: Users,
        href: "/users",
        color: "text-green-500",
    },
    {
        title: "TodoList",
        icon: ListTodo,
        href: "/todolist",
        color: "text-orange-500",
        isChidren: true,
        children: [
            {
                title: "children1",
                icon: ListTodo,
                color: "text-pink-500",
                href: "/todolist/children1",
            },
            {
                title: "children2",
                icon: ListTodo,
                color: "text-pink-500",
                href: "/todolist/children2",
            },
            {
                title: "children3",
                icon: ListTodo,
                color: "text-pink-500",
                href: "/todolist/children3",
            },
        ],
    },
    {
        title: "Settings",
        icon: ListTodo,
        href: "/settings",
        color: "text-orange-500",
        isChidren: true,
        children: [
            {
                title: "children1",
                icon: ListTodo,
                color: "text-pink-500",
                href: "/settings/children1",
            },
            {
                title: "children2",
                icon: ListTodo,
                color: "text-pink-500",
                href: "/settings/children2",
            },
            {
                title: "children3",
                icon: ListTodo,
                color: "text-pink-500",
                href: "/settings/children3",
            },
        ],
    },
];