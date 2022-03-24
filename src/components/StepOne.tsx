import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { FORM_FIELDS } from "../constants";
import saveFormDataInLocalStorage from "../util/saveFormDataInLocalStorage";
import Button from "./Button";
import Form from "./Form";
import Header from "./Header";
import Box from "./layout/Box";
import SubmitButton from "./SubmitButton";

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
    <Box>
      <Header title="Step 1" text="Fill your information" />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Box>
          <label>Name</label>
          <input {...register(FORM_FIELDS.NAME, { required: true })} />
        </Box>
        <Box>
          <label>Last Name</label>
          <input {...register(FORM_FIELDS.LAST_NAME, { required: true })} />
        </Box>
        <Button
          type="button"
          onClick={onPreviousStepClick}
          text="Previous Step"
        />
        <SubmitButton>Next Step</SubmitButton>
      </Form>
    </Box>
  );
};

export default StepOne;
