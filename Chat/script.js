function validateUsername() {    
    if(isValidUsername()) {
    	document.getElementById('login').disabled = false;
    } else {
    	document.getElementById('login').disabled = true;
    }
}

function isValidUsername() {
	var username = document.getElementById('name').value;
	var length = username.length;
	if(length < 3) {
		return false;
	} else {
		return true;
	}
}

function send() {
	var message = document.getElementById('message').value;
	var trNode = document.createElement("tr");
	var tdNode = document.createElement("td");	
	var tdTextNode = document.createTextNode(message);	
	tdNode.appendChild(tdTextNode);
	trNode.appendChild(tdNode);
	document.getElementById("messages").appendChild(trNode);
}

function sendEmoticon() {
	var message = document.getElementById('message').value;
	var emoticons = ['face', 'code', 'home'];

	for (i = 0; i < emoticons.length; i++) { 
    	message = message.replace(emoticons[i], '<span class="icon">'+emoticons[i]+'</span>'); // 
	}
	
	var trNode = document.createElement("tr");
	var tdNode = document.createElement("td");	
	tdNode.innerHTML = message;
	trNode.appendChild(tdNode);
	document.getElementById("messages").appendChild(trNode);
}

function login() {
	if(isValidUsername()) {
		window.location.href = 'list.html';
	}
}

function chat() {
	window.location.href = 'chat.html';
}