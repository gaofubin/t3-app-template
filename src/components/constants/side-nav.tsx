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
                title: "Todo1",
                icon: ListTodo,
                color: "text-red-500",
                href: "/todolist/todo1",
            },
            {
                title: "Todo2",
                icon: ListTodo,
                color: "text-green-500",
                href: "/todolist/todo2",
            },
            {
                title: "Todo3",
                icon: ListTodo,
                color: "text-blue-500",
                href: "/todolist/todo3",
            },
        ],
    },
];