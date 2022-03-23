import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { FORM_FIELDS } from "../constants";
import saveFormDataInLocalStorage from "../util/saveFormDataInLocalStorage";
import Button from "./Button";

type StepOneProps = {
  onNextStepClick: () => void;
  onPreviousStepClick: () => void;
};

const StepOne = ({ onNextStepClick, onPreviousStepClick }: StepOneProps) => {
  const { register, handleSubmit, setValue } = useForm();

  const onSubmit = (formData: { [fieldName: string]: string }): void => {
    saveFormDataInLocalStorage(formData, onNextStepClick);
  };

  useEffect(() => {
    const data = localStorage.getItem("formData");
    if (data) {
      const formData = JSON.parse(data);
      setValue(FORM_FIELDS.NAME, formData.name);
      setValue(FORM_FIELDS.LAST_NAME, formData.lastName);
    }
  }, []);

  return (
    <>
      Step 1
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register(FORM_FIELDS.NAME, { required: true })} />
        <input {...register(FORM_FIELDS.LAST_NAME, { required: true })} />
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
