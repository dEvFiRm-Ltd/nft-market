import React from 'react';
import ReactDOM from 'react-dom';
import { MoralisProvider } from 'react-moralis';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <MoralisProvider
    appId={process.env.MORALIS_API_KEY}
    serverUrl={process.env.MORALIS_SERVER_URL}
  >
    <App />
  </MoralisProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
