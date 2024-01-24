"use client";

import { useForm } from "react-hook-form";
import { useFormState } from "./form-context";
import { useState } from "react";

type TFormValues = {
  password: string;
};
const PasswordForm = () => {
  const { onHandleBack, setFormData, formData } = useFormState();
  const { register, handleSubmit } = useForm<TFormValues>();

  const [isCreated, setCreated] = useState(false);

  function onHandleFormSubmit(data: TFormValues) {
    setFormData((prevFormData) => ({ ...prevFormData, ...data }));
    setCreated(true);
  }

  return isCreated ? (
    <div>
      <h1>Account created successfully</h1>
      <pre>{JSON.stringify(formData)}</pre>
    </div>
  ) : (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form className="space-y-6" onSubmit={handleSubmit(onHandleFormSubmit)}>
      <div className="flex flex-col gap-1">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="password"
          className="h-11 rounded-md border px-4"
          {...register("password")}
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
          Create
        </button>
      </div>
    </form>
  );
};

export default PasswordForm;
