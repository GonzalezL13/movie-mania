import React from 'react';
// import { ApolloProvider } from '@apollo/react-hooks';
// import ApolloClient from 'apollo-boost';
// import './App.css';
import Axios from 'axios';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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
    
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route exact path='/' component={SearchMovies} />
          <Route exact path='/saved' component={SavedMovies} />
          <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
        </Switch>
      </>
    </Router>
    
  );
}

export default App;
