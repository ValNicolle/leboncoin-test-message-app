import React, { Component } from 'react'
import * as api from './API/api_functions.js'

class Message extends Component {

	state = {
	    message: [],
	    isLoaded: false 
	}

	getIdFromUrl() {
		const urlParams = new URLSearchParams(this.props.location.search)
		const id = urlParams.get('id');
		return id
	}

	// Fetch data message
	componentDidMount() {
		const id = this.getIdFromUrl()
		const data = api.getMessageById(id)
		this.setState({message: data, isLoaded: true})
	}


  	render() {
  		const message = this.state.message[0]

  		// If data is not charged yet
  		if(!this.state.isLoaded){
  			return <div>Loading...</div>
  		}
  		// When data is charged
	    return (
	      <div className="Messages-message Message-single">
		    <div className="Message-content">
		      <span
		        className="avatar"
		        style={{backgroundColor: message.member.color}}
		      />
		      <div className="username">
		          {message.member.username}
		      </div>
		      <div className="text">{message.text}</div>
		    </div>
	      </div>
	    );
	}
}

export default Message;
