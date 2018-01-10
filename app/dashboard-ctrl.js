app.controller('dashboardCtrl', ['Api', '$scope', '$rootScope', '$http', '$state', '$window', '$timeout', '$interval', '$rootScope', '$filter', '$location', 'fileUpload', 'UserStorageService', 'Common', function(Api, $scope, $rootScope, $http, $state, $window, $timeout, $interval, $rootScope, $filter, $location, fileUpload, UserStorageService, Common) {

    $scope.loader = true;

	//on page load check if user is logged in then stay otherwise logout
	$scope.checkAndRedirectBack = function () {
        setTimeout(function(){
            $scope.loader = false;
            $scope.$apply();
        },500);
	}
	$scope.checkAndRedirectBack();

	$scope.logout = function(){
        $state.go('login');
	}

}]);