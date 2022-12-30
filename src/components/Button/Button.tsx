import { ButtonContainer } from "./styles";

interface ButtonProps extends React.DOMAttributes<HTMLDivElement> {
  secondary?: boolean;
}
export const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return <ButtonContainer {...rest}>{children}</ButtonContainer>;
};
