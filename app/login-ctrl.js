app.controller('loginCtrl', ['Api','$scope', '$rootScope', '$route', '$http', '$state', '$window', '$timeout', '$interval', '$filter', '$location', 'fileUpload', 'Common', 'UserStorageService', 'md5', function(Api, $scope, $rootScope, $route, $http, $state, $window, $timeout, $interval, $filter, $location, fileUpload, Common, UserStorageService, md5) {
   
    //Declrarations    
	$scope.loginForm = {};
    $scope.errorMessage = '';
    $scope.loader = true;

    $scope.checkAndRedirectBack = function () {
		/*Api.get('index/isLoggedIn').then(function(data) {		    		
			data = data.replace(/\s/g, "");
			if (data == 'LOGGED_IN') {
		    	$state.go('home');
    		}
		});*/
		setTimeout(function(){
            $scope.loader = false;
            $scope.$apply();
        },500);
	}
	$scope.checkAndRedirectBack();

    //login
    $scope.login = function() {
    	$state.go('home');
    	/*if (Common.checkNullOrUndefined($scope.loginForm.username) && Common.checkNullOrUndefined($scope.loginForm.password)) {
			var url = 'index/doLogin';
			var pwd = md5.createHash($scope.loginForm.password);
			var data = {
				username: $scope.loginForm.username,
				password: pwd
			}
			Api.post(url, data).then(function(data) {
				
				if (data.status == 'OK') {
					var session = {
						code: Common.getRandomCode()
					}
					UserStorageService.setLogin(session);
					//$state.go();
				} else if (data.status == 'FAIL'){
					$scope.loginForm = {};
					$.growl.error({ title: "Error!", message: "Incorrect Username or Password" });
				}
			});		
		} else {
			$.growl.error({ title: "Error!", message: "Please enter username and password to login." });
		}    */	
    }
}]);