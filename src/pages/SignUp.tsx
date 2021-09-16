/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import Link from 'components/Link/Link';

export default function SignUp() {
  return (
    <form css={formStyle}>
      <h1>Sign up</h1>
      <Input label='Email' />
      <Input label='Username' />
      <Input label='Password' />
      <Input label='Confirm Password' />
      <div className='btnWrapper'>
        <Button type='submit'>Create</Button>
      </div>
      <Link to='/login'>Already have account? Login</Link>
    </form>
  );
}

const formStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100%;
  margin: 0 auto;

  h1 {
    margin-bottom: 3.125rem;
  }

  .btnWrapper {
    margin-top: 1.25rem;
  }
`;
