/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Button, Input, Link } from 'components';
import { useState, FormEvent, ChangeEvent } from 'react';

export default function SignUp() {
  const [email, setEmail] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [errorPassword, setErrorPassword] = useState<boolean>(false);

  const handleChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    switch (e.target.name) {
      case 'email':
        setEmail(value);
        break;
      case 'userName':
        setUserName(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'confirmPassword':
        setConfirmPassword(value);
        break;
    }
  };

  const handleConfirmPassword = () => {
    if (password !== confirmPassword) {
      setErrorPassword(true);
    } else {
      setErrorPassword(false);
    }
  };

  const handleSignup = (e: FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('비밀번호가 일치하지 않습니다. 비밀번호를 확인해주세요');
      return;
    }
    console.log(e.target);
  };
  return (
    <form css={formStyle} onSubmit={handleSignup} autoComplete='off'>
      <h1>Sign up</h1>
      <Input
        label='Email'
        type='email'
        value={email}
        name='email'
        required
        onChange={handleChangeInputValue}
      />
      <Input
        label='Username'
        type='text'
        value={userName}
        name='userName'
        required
        onChange={handleChangeInputValue}
      />
      <Input
        label='Password'
        type='password'
        value={password}
        name='password'
        required
        onChange={handleChangeInputValue}
      />
      <Input
        label='Confirm Password'
        type='password'
        value={confirmPassword}
        name='confirmPassword'
        required
        onChange={handleChangeInputValue}
        onBlur={handleConfirmPassword}
      />
      {errorPassword && '비밀번호가 일치하지 않습니다. 비밀번호를 확인해주세요'}
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
