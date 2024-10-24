import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ children, onClick, disabled }: IButtonProps) => {
  return <ButtonContainer onClick={onClick} disabled={disabled}>{children}</ButtonContainer>;
};

export default Button;
