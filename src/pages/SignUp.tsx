/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Button from 'components/Button/Button';
import Input from 'components/Input/Input';

export default function SignUp() {
  return (
    <form css={formStyle}>
      <h1>Sign up</h1>
      <Input label='Email' />
      <Input label='Password' />
      <Input label='Password Check' />
      <Button type='submit'>Sumbit</Button>
      <Button type='button'>Cancel</Button>
    </form>
  );
}

const formStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 43.75rem;
  height: 31.25rem;
  margin: 0 auto;
  margin-top: 10rem;
  margin-bottom: 2rem;

  h1 {
    margin-bottom: 3.125rem;
  }
`;
