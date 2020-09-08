import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Messages from "./Messages.js"
import Input from "./Input.js"
import Message from "./Message.js"
import './App.css'


class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <h1>Messagerie for LeBonCoin</h1>
          </div>
          <nav className="App-nav">
            <Link to='/' >Messages</Link>
            <Link to='/private_messages'>Private messages</Link>
            <Link to='/input'>New message</Link>
          </nav>
          <div className="content">
            <Route exact path="/" component={Messages}/>
            <Route path="/private_messages" component={Messages}/>
            <Route path="/input" component={Input}/>
            <Route path="/message" component={Message}/>

          </div>

        </div>
        
      </Router>
      );
  }
}

export default App;
