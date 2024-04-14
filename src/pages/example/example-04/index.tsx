import { Heading } from "@/components/common/heading";
import { AutoFormDemo } from "@/components/page-component/example/example-04/auto-form-demo";
import { Separator } from "@/components/ui/separator";
import React from "react";

const Example04 = () => {
  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 p-4 md:p-8">
        <div className="flex items-center justify-between">
          <Heading
            title="Auto Form"
            description="This is an auto form example"
          />
        </div>
        <Separator />
        <AutoFormDemo />
      </div>
    </div>
  );
};

export default Example04;
