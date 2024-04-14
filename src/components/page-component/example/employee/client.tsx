"use client";
import React from "react";
import { Heading } from "@/components/common/heading";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table/data-table";
import { type EmployeeColumn } from "@/lib/validators";
import { columns } from "./columns";

interface EmployeeClientProps {
  data: EmployeeColumn[];
}
export const EmployeeClient = ({ data }: EmployeeClientProps) => {
  const router = useRouter();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title="Employee (CRUD)"
          description="Manage employee for you business"
        />
        <Button
          onClick={() => {
            router.push("/example/employees/new");
          }}
        >
          <Plus className="mr-2 h-4 w-4" /> Add New
        </Button>
      </div>
      <Separator />
      <div>
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
};
