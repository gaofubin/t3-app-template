import React from "react";
import { Heading } from "@/components/common/heading";
import { Separator } from "@/components/ui/separator";
import { FancyMultiSelect } from "@/components/page-component/example/example-02/multi-select-input";

const Example02 = () => {
  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 p-4 md:p-8">
        <div className="flex items-center justify-between">
          <Heading title="Example02" description="This is a example" />
        </div>
        <Separator />

        <FancyMultiSelect />
      </div>
    </div>
  );
};

export default Example02;
