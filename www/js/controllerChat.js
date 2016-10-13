angular.module('starter.controllers')
.controller('chatCtrl',['$scope', '$firebaseArray', '$ionicScrollDelegate', 'sessionData', function($scope, $firebaseArray, $ionicScrollDelegate, sessionData) {

	function initData(){
		var ref = referenceFirebase.child(routes.messages).orderByChild('timestamp');
		$scope.messages = $firebaseArray(ref);
	};

	$scope.sendMessage = function(){
		var message = {
			nickname: sessionData.user.nickname,
			message: $scope.data.message,
			timestamp: +new Date()
		}
		$scope.messages.$add(message);
	}

	$ionicScrollDelegate.scrollBottom(true);
	initData();
}]);