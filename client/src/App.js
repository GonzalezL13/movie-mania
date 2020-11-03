import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import './App.css';

//import pages & components here
import SearchMovies from './pages/SearchMovies';
import Navbar from './components/Navbar';

function App() {
<<<<<<< HEAD
  // Axios({
  //   method: "GET",
  //   url: "http:localhost:3001",
  //   headers: {
  //     "Content-Type": "application/json"
  //   }
  // }).then(res => {
  //   console.log(res.data.message);
  // })

=======
>>>>>>> a886775eae92d57708a5a053be009fa476e40ee8
  return (
      <Router>
        <>
          <Navbar />
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
