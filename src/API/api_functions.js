function getAllMessages() {
	const data = require('./messages-data.json')
	return data
}

function getMessageById(id) {
	const data = require('./messages-data.json')
	const result = data.filter(mess => mess.messageId === id)
	return result
}

function addMessage(text,status,messageId,member) {
	
}

export {getAllMessages, getMessageById};