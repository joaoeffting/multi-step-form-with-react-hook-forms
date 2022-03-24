import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { FORM_FIELDS } from "../constants";
import saveFormDataInLocalStorage from "../util/saveFormDataInLocalStorage";
import Button from "./Button";
import Form from "./Form";
import Header from "./Header";
import Box from "./layout/Box";
import SubmitButton from "./SubmitButton";

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
      setValue(FORM_FIELDS.EMAIL, formData.email);
      setValue(FORM_FIELDS.PHONE, formData.phone);
    }
  }, []);
  return (
    <Box>
      <Header title="Step 2" text="We are almost there" />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Box>
          <label>E-mail</label>
          <input
            type="email"
            {...register(FORM_FIELDS.EMAIL, { required: true })}
          />
        </Box>
        <Box>
          <label>Phone</label>
          <input
            type="number"
            {...register(FORM_FIELDS.PHONE, { required: true })}
          />
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

export default StepTwo;
