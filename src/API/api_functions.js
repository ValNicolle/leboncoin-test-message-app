const data = require('./messages-data.json')

function getAllMessages() {
	return data
}

function getMessageById(id) {
	console.log(data);
	
	const result = data.filter(mess => mess.messageId === id)
	return result
}

function addMessage(text,status,messageId,member) {
	data.push({
		text: text,
		status: status,
		messageId: messageId,
		member: member
	  })
}

export {getAllMessages, getMessageById, addMessage};