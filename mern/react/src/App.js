// App.js

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authentication'
import './App.css'
import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';

import 'bootstrap/dist/css/bootstrap.min.css';
import CreateProfile from './components/CreateProfile';
<<<<<<< HEAD
import RequestHelp from './components/requestHelp';
=======
import PetsList from './components/PetsList';

>>>>>>> 6717fd4fdda9b21de3f58e8a29c70650363b3b37

  if(localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);
    const decoded = jwt_decode(localStorage.jwtToken);
    store.dispatch(setCurrentUser(decoded));
  
    const currentTime = Date.now() / 1000;
    if(decoded.exp < currentTime) {
      store.dispatch(logoutUser());
      window.location.href = '/login'
    }
  }

class App extends Component {

  render() {
    return (
      <Provider store = { store } >
        <Router>
          <div>
            <Navbar />
            <Route exact path="/dashboard" component={ Home } />
            <Route exact path="/CreateProfile" component={ CreateProfile } />
<<<<<<< HEAD
            <Route exact path="/requesthelp" component={ RequestHelp } />
=======
            <Route exact path="/pets" component={ PetsList } />
>>>>>>> 6717fd4fdda9b21de3f58e8a29c70650363b3b37
              <div className="container">
                <Route exact path="/register" component={ Register } />
                <Route exact path="/login" component={ Login } />
              </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;