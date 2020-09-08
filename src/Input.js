import React, { Component } from 'react'
import * as api from './API/api_functions.js'

class Input extends Component {
	state = {
		messages: api.getAllMessages(),
		sent: false,
		text: "",
		selectedStatus: "public",
		member: {
	      id: 1,
	      username: "User",
	      color: "orange"
	    }
	}

	generateId() { 
	  // Math.random should be unique because of its seeding algorithm.
	  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
	  // after the decimal.
	  return '_' + Math.random().toString(36).substr(2, 9);
	};

	onChange(e) {
		this.setState({text: e.target.value})
	}

	onChangeSelect(e) {
		this.setState({selectedStatus:e.target.value})
	}

	onSubmit(e) {
		e.preventDefault()
		this.setState({text: ""})

		const messages = this.state.messages
		const newId = this.generateId()
	    messages.push({
	      text: this.state.text,
	      status: this.state.selectedStatus,
	      messageId: newId,
	      member: this.state.member
	    })
	    this.setState({messages: messages, sent: true})
	}

	newMessageBtn(e) {
		this.setState({sent: false})
	}



	render() {
		return (
			<div className="Input">
				{this.state.sent ? (
					<div className="messageSent">
						<p>Your message has been sent !</p>
						<button onClick={e => this.newMessageBtn(e)}>New message</button>
					</div>
				):(
					<form onSubmit={e => this.onSubmit(e)}>
						<textarea
							onChange={e => this.onChange(e)}
							value={this.state.text}
							placeholder="Enter your message"
							autoFocus
						></textarea>
						<select
							value={this.state.selectedStatus}
							onChange={e => this.onChangeSelect(e)}>
								<option value="public">Public</option>
								<option value="private">Private</option>
						</select>

						<button className="send">Send</button>
					</form>

				)}
				
			</div>
			);
	}


}

export default Input;