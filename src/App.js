import React, { Component } from 'react';
import './App.css';
// Add the Route named import
import { Route, Switch, Redirect } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthPage from './pages/AuthPage/AuthPage'
import TickerPage from './pages/TickerPage/TickerPage';

class App extends Component {
  state = {
    user: null,
  }

  
  setUserInState = (incomingUserData) => {
    this.setState({ user: incomingUserData})
  }

  
  componentDidMount() {
    let token = window.localStorage.getItem('token')
    if (token) {
      
      let userDoc = JSON.parse(atob(token.split('.')[1])).user 
      this.setState({user: userDoc})      
    }
  }

  render() {
    return (
      <main className="App">
        { this.state.user ? 
        
          <TickerPage />
          
          :
          <AuthPage setUserInState={this.setUserInState}/>
        }
        
      </main>
    );
  }
}

export default App;