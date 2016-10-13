var config = {
	apiKey: "AIzaSyAhoDz3jPSrhWcY-Jm-rVNSYjpfDgYW734",
	authDomain: "chat-firebase-8a58b.firebaseapp.com",
	databaseURL: "https://chat-firebase-8a58b.firebaseio.com",
	messagingSenderId: "390301333766"
};

var routes = {
	users: 'users/',
	messages: 'messages/'
};

var mainApp = firebase.initializeApp(config);
var referenceFirebase = mainApp.database().ref();