import React from 'react';
// import { ApolloProvider } from '@apollo/react-hooks';
// import ApolloClient from 'apollo-boost';
// import './App.css';
import Axios from 'axios';

//backend conntection to server - graphql
// const client = new ApolloClient({
//   uri: '/graphql'
// });

function App() {
  Axios({
    method: "GET",
    url: "http://localhost:3001/",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => {
    console.log(res.data.message);
  });

  return (
    // <ApolloProvider client={client}>
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    // </ApolloProvider>
  );
}

export default App;
