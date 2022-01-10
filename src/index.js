import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MoralisProvider } from 'react-moralis';

ReactDOM.render(
  <MoralisProvider
    appId='nrLI1yyQmHC5VfrK3bgYpLCHsuNd7X6eclCfDJPP'
    serverUrl='https://w3xusiqi6fqk.usemoralis.com:2053/server'
  >
    <App />
  </MoralisProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
