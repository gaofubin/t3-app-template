"use client";

import { useForm } from "react-hook-form";
import { useFormState } from "./form-context";

type TFormValues = {
  username: string;
};
const UsernameForm = () => {
  const { onHandleNext, setFormData, formData } = useFormState();

  const { register, handleSubmit } = useForm<TFormValues>({
    defaultValues: formData,
  });

  function onHandleFormSubmit(data: TFormValues) {
    setFormData((prevFormData) => ({ ...prevFormData, ...data }));
    void onHandleNext();
  }

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form className="space-y-6" onSubmit={handleSubmit(onHandleFormSubmit)}>
      <div className="flex flex-col gap-1">
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          placeholder="username"
          className="h-11 rounded-md border px-4"
          {...register("username")}
        />
      </div>
      <div className="flex justify-end">
        <button className="h-11 rounded-md bg-foreground px-6 text-background">
          Next
        </button>
      </div>
    </form>
  );
};

export default UsernameForm;
