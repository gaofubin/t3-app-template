"use client";

import { useForm } from "react-hook-form";
import { useFormState } from "./form-context";

type TFormValues = {
  email: string;
};
const EmailForm = () => {
  const { onHandleNext, onHandleBack, setFormData, formData } = useFormState();
  const { register, handleSubmit } = useForm<TFormValues>({
    defaultValues: formData,
  });

  function onHandleFormSubmit(data: TFormValues) {
    setFormData((prevFormData) => ({ ...prevFormData, ...data }));
    onHandleNext();
  }

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form className="space-y-6" onSubmit={handleSubmit(onHandleFormSubmit)}>
      <div className="flex flex-col gap-1">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="email"
          className="h-11 rounded-md border px-4"
          {...register("email")}
        />
      </div>
      <div className="flex justify-end gap-4">
        <button
          type="button"
          className="h-11 rounded-md bg-foreground px-6 text-background"
          onClick={onHandleBack}
        >
          Back
        </button>
        <button className="h-11 rounded-md bg-foreground px-6 text-background">
          Next
        </button>
      </div>
    </form>
  );
};

export default EmailForm;
