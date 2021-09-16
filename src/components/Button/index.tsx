/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

interface Props {
  children: React.ReactChild;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

export default function Button({ children, type, onClick }: Props) {
  return (
    <button type={type} onClick={onClick} css={buttonStyle}>
      {children}
    </button>
  );
}

const buttonStyle = css`
  width: 20rem;
  height: 3.125rem;
  margin-bottom: 0.625rem;
  font-size: 1.125rem;
  border: 0.0625rem solid lightgray;
  border-radius: 0.625rem;
  background-color: #122c91;
  color: #eee;
  cursor: pointer;
`;
