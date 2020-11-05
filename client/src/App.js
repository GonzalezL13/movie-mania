  
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//import pages & components here
import SearchMovies from './pages/SearchMovies';
import Navbar from './components/Navbar';

function App() {
  // Axios({
  //   method: "GET",
  //   url: "http:localhost:3001",
  //   headers: {
  //     "Content-Type": "application/json"
  //   }
  // }).then(res => {
  //   console.log(res.data.message);
  // })

  return (
      <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={SearchMovies} />
            {/* <Route exact path="/saved" component={SavedBooks} />  */}
            <Route render={() => <h1 className="display-2">Wrong page!</h1>} />
          </Switch>
      </Router>
  );
}

export default App;