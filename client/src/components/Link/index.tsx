/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link as RouterLink } from 'react-router-dom';

interface Props {
  to: string;
  children: string;
}

export default function Link({ to, children }: Props) {
  return (
    <RouterLink to={to} css={linkStyle}>
      {children}
    </RouterLink>
  );
}

const linkStyle = css`
  color: #2a6fdb;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`;
