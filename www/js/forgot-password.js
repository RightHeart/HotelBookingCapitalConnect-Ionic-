

angular.module('capitalconnect.controllers')

.controller('ForgotPasswordCtrl', function($scope, $rootScope, $ionicModal, $timeout, $utils, $api, $http) {

	$scope.$on( "$ionicView.beforeEnter", function( scopes, states ) {

	});

	$scope.$on( "$ionicView.beforeLeave", function( scopes, states ) {
		
	});

	$scope.onSendPasswordReminder = function(){
		console.log("email", $rootScope.CRED_DATA);
		$utils.showLoading();

		$api.post('/forgotpassword', $rootScope.CRED_DATA)
		.then(function(response, status, headers, config) {
			$utils.hideLoading();
			console.log("-----", response);
			alert("Please check your email to reset password");
			$utils.goState("password-sent", {});
		}, function(response, status, headers, config) {
			$utils.hideLoading();
			console.log("+++++", response);
			alert("Invailed email!");
		});

		// var forgot_url = "https://thecapitalapp.co.za/api/v1/forgotpassword";

		// var header = {
		// 	headers: {
		// 		'Content-Type': 'application/json',
		// 		'X-API-KEY': "5wE(tT6kFzDQD^qve4Q5"
		// 	},
		// 	timeout: 40000
		// };

		// $http.post(forgot_url, $rootScope.CRED_DATA, header)
		// .success(function(data, status, headers) {
		// 	console.log("*****", data);
		// 	$utils.hideLoading();
		// })
		// .error(function(data, status, headers) {
		// 	console.log("@@@", data);
		// 	$utils.hideLoading();
		// });
	}
	
})