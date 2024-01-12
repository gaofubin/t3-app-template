"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Checkbox } from "@/components/ui/checkbox"
import { type ColumnDef } from "@tanstack/react-table"

import { z } from "zod";


const userSchema = z.object({
    id: z.number(),
    first_name: z.string(),
    last_name: z.string(),
    gender: z.string(),
});

type User = z.infer<typeof userSchema>;

export const columns: ColumnDef<User>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
                className="translate-y-[2px]"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
                className="translate-y-[2px]"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "first_name",
        header: "First Name"
    },
    {
        accessorKey: "last_name",
        header: "Last Name"
    },
    {
        accessorKey: "gender",
        header: "Gender"
    },
]