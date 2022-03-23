type ButtonProps = {
  type?: string,
  onClick: () => void,
  text: string,
};

const Button = ({ type = "submit", onClick, text }: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {text}
    </button>
  );
};

export default Button;
