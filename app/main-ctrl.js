app.controller('mainCtrl', ['Api','$scope', '$rootScope', '$route', '$http', '$state', '$window', '$timeout', '$interval', '$filter', '$location', 'fileUpload', 'Common', 'UserStorageService', 'md5', function(Api, $scope, $rootScope, $route, $http, $state, $window, $timeout, $interval, $filter, $location, fileUpload, Common, UserStorageService, md5) {
    
	/*$scope.setSession = function() {
		Api.get('index/isLoggedIn').then(function(data) {		    		
			    		
			data = data.replace(/\s/g, "");
			if (data == 'LOGGED_IN') {
				var data = {
					code: Common.getRandomCode()
				}
				UserStorageService.setLogin(data);
    		} else {
    			UserStorageService.removeLogin();
    		}
		});
	}
	$scope.setSession();
	

	$scope.$on('$locationChangeStart', function(event, next, current) {

    	next = next.split('/');
	    next = next[next.length -1];

	    current = current.split('/');
	    current = current[current.length -1];

	    $scope.session = UserStorageService.getLogin();

	    if (current == '' && next == 'home') {
	    	event.preventDefault();
	    	$scope.setSession();
	    	$state.go('login');
	    }

	    if (current == 'home' && next == 'home') {
	    	if ($scope.session.code == undefined && $scope.session.code == null ) {
	    		event.preventDefault();
	    		$scope.setSession();
	    		$state.go('login');
	    	}
	    }

	    if (current == 'home' && next == 'login') {
	    	if ($scope.session.code != undefined && $scope.session.code != null ) {
	    		event.preventDefault();
	    	} else {
	    		$scope.setSession();
				$state.go('login');
	    	}
	    }

	    if (current == 'login' && next == 'home') {
	    	if ($scope.session.code == undefined && $scope.session.code == null ) {
	    		event.preventDefault();
	    	}
	    }

	});*/
}]);