import { InputContainer, ErrorMessage } from "./styles";
import { IInputProps } from "././types";
import { Controller } from "react-hook-form";

const Input = ({ control, name, errorMessage, ...rest }: IInputProps) => {
  return (
    <>
      {errorMessage ? <ErrorMessage>{errorMessage}</ErrorMessage> : null}
      <InputContainer>
        <Controller
          control={control}
          name={name}
          render={({ field }) => (
            <input
              {...rest}
              {...field}
            />
          )}
        />
      </InputContainer>
    </>
  );
};

export default Input;
