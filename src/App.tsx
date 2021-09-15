/** @jsxImportSource @emotion/react */
import { Global, css } from '@emotion/react';
import SignUp from 'pages/SignUp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/signup'>
            <SignUp />
          </Route>
        </Switch>
      </Router>
      <Global styles={globalStyle} />
    </>
  );
}

const globalStyle = css`
  html,
  body,
  #root {
    height: 100%;
    margin: 0;
  }
  * {
    box-sizing: border-box;
  }
`;
