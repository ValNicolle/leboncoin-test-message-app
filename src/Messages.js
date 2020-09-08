import React, { Component } from 'react'
import *  as api from './API/api_functions.js'

class Messages extends Component {

	state = {
	    messages: api.getAllMessages(), 
	    member: {
	      id: 1
	    }
	}

	// Redirect to the single message page
	openFullMessage(id) {
		this.props.history.push("/message/?id="+id)
	}

	renderMessage(message, index, filter) {
	  const {member, text, status, messageId} = message;

	  // Filter messages by status
	  if(status !== filter){
	  	return
	  }

	  // Add a class if users message
	  const messageFromMe = member.id === this.state.member.id;
	  const className1 = messageFromMe ?
	    "Messages-message currentMember" : "Messages-message";

	  // Truncate text
	  const displayedText = (text.length > 200) ? text.substring(0,200) + "..." : text

	  return (
	    <li key={index} className={className1} onClick={() => this.openFullMessage(messageId)}>
	      <div className="Message-content">
	      <span
	        className="avatar"
	        style={{backgroundColor: member.color}}
	      />
	        <div className="username">
	          {member.username}
	        </div>
	        <div className="text">{displayedText}</div>
	        <div className="readMore">Read more</div>
	      </div>
	    </li>
	  );
	}


  	render() {
	    const {messages} = this.state;
	    const pathname = this.props.location.pathname
	    const filter = (pathname === "/private_messages") ? "private" : "public"

	    return (
	      <ul className="Messages-list">
	        {messages.map((message,index) => this.renderMessage(message, index, filter))}
	      </ul>
	    );
	}
}

export default Messages;