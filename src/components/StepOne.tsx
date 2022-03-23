import { useEffect } from "react";
import { useForm } from "react-hook-form";
import saveFormDataInLocalStorage from "../util/saveFormDataInLocalStorage";
import Button from "./Button";

type StepOneProps = {
  onNextStepClick: () => void;
  onPreviousStepClick: () => void;
};

type FormData = {
  [fieldName: string]: string;
};

const StepOne = ({ onNextStepClick, onPreviousStepClick }: StepOneProps) => {
  const { register, handleSubmit, setValue } = useForm();

  const onSubmit = (formData: FormData): void => {
    saveFormDataInLocalStorage(formData, onNextStepClick);
  };

  useEffect(() => {
    const data = localStorage.getItem("formData");
    if (data) {
      const formData = JSON.parse(data);
      setValue("name", formData.name);
      setValue("lastName", formData.lastName);
    }
  }, []);

  return (
    <>
      Step 1
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name", { required: true })} />
        <input {...register("lastName", { required: true })} />
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

export default StepOne;
