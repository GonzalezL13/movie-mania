import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchMovies from './pages/SearchMovies';
// import './App.css';

// import SavedBooks from "./pages/SavedBooks";
// import Navbar from "./components/Navbar";

// //backend conntection to server - graphql
// const client = new ApolloClient({
//   uri: '/graphql'
// });

function App() {
  return (
      <Router>
        <>
          {/* <Navbar /> */}
          <Switch>
            <Route exact path="/" component={SearchMovies} />
            {/* <Route exact path="/saved" component={SavedBooks} />  */}
            <Route render={() => <h1 className="display-2">Wrong page!</h1>} />
          </Switch>
        </>
      </Router>
  );
}

export default App;
