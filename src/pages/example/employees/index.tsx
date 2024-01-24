import React from "react";
import { api } from "@/utils/api";
import { Loading } from "@/components/common/loading";
import { EmployeeClient } from "@/components/page-component/example/employee/client";

const Employees = () => {
  const { data, isLoading, isError, error } = api.employee.getAll.useQuery();

  if (isLoading) return <Loading />;

  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 md:p-8">
        <EmployeeClient data={data} />
      </div>
    </div>
  );
};

export default Employees;
