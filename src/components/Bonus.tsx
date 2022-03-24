import Button from "./Button";
import Header from "./Header";

type BonusProps = {
  onNextStepClick: () => void;
};

const Bonus = ({ onNextStepClick }: BonusProps) => {
  return (
    <>
      <Header title="Bonus Page" text="You are on the bonus page" />
      <Button onClick={onNextStepClick} text="Next Step" />
    </>
  );
};

export default Bonus;
