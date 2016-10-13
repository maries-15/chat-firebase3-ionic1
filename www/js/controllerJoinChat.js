angular.module('starter.controllers', [])
.controller('joinChatCtrl',['$scope', '$state', '$timeout', 'sessionData',function($scope, $state, $timeout, sessionData) {

	$scope.data = sessionData.user == undefined ? {
		avatar:"http://ionic.festa.co/assets/img/profilePicture.png",
		nickname:'guest'
	}: sessionData.user;

	function generateRandomString() {
		charSet = 'abcdefghijklmnopqrstuvwxyz0123456789';
		var randomString = '';
		for (var i = 0; i < 5; i++) {
			var randomPoz = Math.floor(Math.random() * charSet.length);
			randomString += charSet.substring(randomPoz, randomPoz + 1);
		}
		return randomString;
	}

	$scope.uploadPhoto = function(){
		var options = {
            quality : 75,
            destinationType : Camera.DestinationType.DATA_URL,
            sourceType : Camera.PictureSourceType.PHOTOLIBRARY,
            allowEdit : true,
            encodingType: Camera.EncodingType.JPEG,
            popoverOptions: CameraPopoverOptions,
            targetWidth: 500,
            targetHeight: 500,
            saveToPhotoAlbum: false
        };
        navigator.camera.getPicture(function(imageData){
        	$timeout(function(){
        		$scope.data.avatar = "data:image/jpeg;base64," + imageData;
        	})
        }, function(error) {
            console.error(error);
        }, options);
	}

	$scope.joinChat = function(){
		if($scope.data.nickname === 'guest'){
			$scope.data.nickname = 'guest-' + generateRandomString()
		};
		referenceFirebase.child(routes.users + $scope.data.nickname).set($scope.data);
		sessionData.user = $scope.data;
		window.localStorage.setItem('user', JSON.stringify(sessionData.user))
		$state.go('chat');
	};
}]);