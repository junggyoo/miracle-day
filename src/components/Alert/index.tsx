/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

interface Props {
  type: 'error';
  children: React.ReactChild;
}

export default function Alert({ type, children }: Props) {
  return <div css={[alertStyle, fontColor[type]]}>{children}</div>;
}

const alertStyle = css`
  font-size: 0.875rem;
  text-align: start;
`;

const fontColor = {
  error: css`
    color: #611a15;
  `,
};
