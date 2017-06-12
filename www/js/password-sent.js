

angular.module('capitalconnect.controllers')

.controller('PasswordSentCtrl', function($scope, $rootScope, $ionicModal, $timeout, $utils, $ionicHistory) {

	$scope.$on( "$ionicView.beforeEnter", function( scopes, states ) {

	});

	$scope.$on( "$ionicView.beforeLeave", function( scopes, states ) {
		
	});

	$scope.onBackToSignIn = function(){
		$ionicHistory.goBack(-2);
	}
	
})
