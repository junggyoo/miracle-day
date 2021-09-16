/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

interface Props {
  label?: string;
  type?: string;
  value?: string;
  name?: string;
  placeHolder?: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
}

export default function Input({
  label,
  type,
  value,
  name,
  placeHolder,
  required,
  onChange,
  onBlur,
  ...props
}: Props) {
  return (
    <label css={inputStyle}>
      {label}
      <input
        type={type}
        value={value}
        name={name}
        placeholder={placeHolder}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
        {...props}
      />
    </label>
  );
}

const inputStyle = css`
  display: flex;
  flex-direction: column;
  font-size: 1.25rem;

  input {
    width: 20rem;
    height: 2.3rem;
    margin-top: 0.125rem;
    margin-bottom: 0.625rem;
    padding: 0.3125rem;
    font-size: 1.125rem;
    border: 0.0625rem solid;
    border-radius: 0.1875rem;
  }
`;
