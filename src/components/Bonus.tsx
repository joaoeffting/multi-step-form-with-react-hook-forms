import Button from "./Button";

type BonusProps = {
  onNextStepClick: () => void;
};

const Bonus = ({ onNextStepClick }: BonusProps) => {
  return (
    <>
      Bonus Page
      <Button onClick={onNextStepClick} text="Next Step" />
    </>
  );
};

export default Bonus;
