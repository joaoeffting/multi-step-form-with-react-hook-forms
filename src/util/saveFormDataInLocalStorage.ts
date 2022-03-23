const saveFormDataInLocalStorage = (
  formData: { [field: string]: string },
  onNextStepClick: () => void
) => {
  const data = localStorage.getItem("formData") || "{}";
  const savedFormData = JSON.parse(data);
  localStorage.setItem(
    "formData",
    JSON.stringify({ ...savedFormData, ...formData })
  );
  onNextStepClick();
};

export default saveFormDataInLocalStorage;
