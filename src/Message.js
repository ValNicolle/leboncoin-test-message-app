import React, { useState, useEffect } from 'react'
import * as api from './API/api_functions.js'

function Message () {

	const [message, setMessage] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const id = new URLSearchParams(window.location.search).get('id')// Get message ID from url
		setMessage(api.getMessageById(id)) // Get data from API
		setIsLoading(false) // isLoading to false
	}, [])



	if(isLoading){
		// When data is not yet loaded
		return <div style={{textAlign: "center"}}>Loading...</div>
	}
	else{
		// When data is charged
	return (
		<div className="Messages-message Message-single">
			<div className="Message-content">
			<span
				className="avatar"
				style={{backgroundColor: message[0].member.color}}
			/>
			<div className="username">
				{message[0].member.username}
			</div>
			<div className="text">{message[0].text}</div>
			</div>
		</div>
		);
	}
			
		  
  		
	
}

export default Message;
