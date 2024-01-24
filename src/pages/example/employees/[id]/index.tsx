import { Loading } from "@/components/common/loading";
import { EmployeeForm } from "@/components/page-component/example/employee/employee-form";
import { api } from "@/utils/api";
import { useRouter } from "next/router";
import React from "react";

const Employee = () => {
  const router = useRouter();
  const { id } = router.query;

  if (typeof id !== "string") {
    return <Loading />;
  }

  const { data: employee, isLoading } = api.employee.getById.useQuery(id);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 p-4 md:p-8">
        <EmployeeForm initialData={employee} />
      </div>
    </div>
  );
};

export default Employee;
