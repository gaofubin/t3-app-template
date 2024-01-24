import {
  type Dispatch,
  type SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface TFormData {
  username: string;
  email: string;
  password: string;
}

interface FormContextProps {
  onHandleNext: () => void;
  onHandleBack: () => void;
  step: number;
  formData: TFormData;
  setFormData: Dispatch<SetStateAction<TFormData>>;
}

const FormContext = createContext<FormContextProps>({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onHandleNext: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onHandleBack: () => {},
  step: 1,
  formData: {
    username: "",
    email: "",
    password: "",
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setFormData: () => {},
});

interface FormProviderProps {
  children: React.ReactNode;
}

export function FormProvider({ children }: FormProviderProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<TFormData>({
    username: "",
    email: "",
    password: "",
  });

  console.log(formData);
  function onHandleNext() {
    console.log(step);
    setStep((prevValue) => prevValue + 1);
  }

  function onHandleBack() {
    setStep((prevValue) => prevValue - 1);
  }

  return (
    <FormContext.Provider
      value={{ onHandleNext, onHandleBack, step, formData, setFormData }}
    >
      {children}
    </FormContext.Provider>
  );
}

export function useFormState() {
  return useContext(FormContext);
}
