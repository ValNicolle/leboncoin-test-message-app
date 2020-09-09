import React, { useState, useEffect } from 'react'
import *  as api from './API/api_functions.js'
import { Link } from 'react-router-dom'

function Messages(){

	const [currentMember, setCurrentMember] = useState({id:1}) // For demo purposes
	const [messages, setMessages] = useState([])
	
	const filter = (window.location.pathname === "/private_messages") ? "private" : "public"


	useEffect(()=>{
		setMessages(api.getAllMessages())
	}, [])

	// Rendering of a single message
	function renderMessage(message, index, filter) {
	  const {member, text, status, messageId} = message;

	  // Filter messages by status Public or Private
	  if(status !== filter){
	  	return
	  }

	  // Add a class if users message
	  const messageFromMe = member.id === currentMember.id;
	  const className1 = messageFromMe ?
	    "Messages-message currentMember" : "Messages-message";

	  // Truncate text
	  const displayedText = (text.length > 200) ? text.substring(0,200) + "..." : text

	  return (
		<Link key={index}  to={"/message/?id="+messageId}>
	    	<li className={className1} >
				<div className="Message-content">
					<span className="avatar" style={{backgroundColor: member.color}}/>
					<div className="username">{member.username}</div>
					<div className="text">{displayedText}</div>
					{text.length>200 && <div className="readMore">Read more</div>}
				</div>
	    	</li>
		</Link>
	  );
	}


	return (
		<ul className="Messages-list">
		{messages.map((mess, index) => renderMessage(mess, index, filter))}
		</ul>
	);
	
}

export default Messages;