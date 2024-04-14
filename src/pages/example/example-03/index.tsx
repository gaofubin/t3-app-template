import React from "react";
import { Heading } from "@/components/common/heading";
import { Separator } from "@/components/ui/separator";
import { FormProvider } from "@/components/page-component/example/example-03/form-context";
import FormStep from "@/components/page-component/example/example-03/form-step";

const Example03 = () => {
  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 p-4 md:p-8">
        <div className="flex items-center justify-between">
          <Heading
            title="Form Context"
            description="This is a form context example"
          />
        </div>
        <Separator />
        <div className="mx-auto w-full max-w-2xl rounded-md border bg-background p-8">
          <h1 className="text-center text-xl font-semibold">Sign Up Form</h1>
          <FormProvider>
            <FormStep />
          </FormProvider>
        </div>
      </div>
    </div>
  );
};

export default Example03;
