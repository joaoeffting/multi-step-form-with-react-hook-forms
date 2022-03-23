import { useEffect } from "react";
import { useForm } from "react-hook-form";
import saveFormDataInLocalStorage from "../util/saveFormDataInLocalStorage";
import Button from "./Button";

type StepTwoProps = {
  onNextStepClick: () => void;
  onPreviousStepClick: () => void;
};

type FormData = {
  [fieldName: string]: string;
};

const StepTwo = ({ onNextStepClick, onPreviousStepClick }: StepTwoProps) => {
  const { register, handleSubmit, setValue } = useForm();

  const onSubmit = (formData: FormData): void => {
    saveFormDataInLocalStorage(formData, onNextStepClick);
  };

  useEffect(() => {
    const data = localStorage.getItem("formData");
    if (data) {
      const formData = JSON.parse(data);
      setValue("email", formData.email);
      setValue("phone", formData.phone);
    }
  }, []);
  return (
    <>
      Step 2
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="email" {...register("email", { required: true })} />
        <input type="number" {...register("phone", { required: true })} />
        <Button
          type="button"
          onClick={onPreviousStepClick}
          text="Previous Step"
        />
        <button type="submit">Next Step</button>
      </form>
    </>
  );
};

export default StepTwo;
