var app = angular.module('githubScrub',[]);

	app.controller('controller1',['$scope','$http',function($scope,$http) {
		$scope.submit = function(name){
			$http.get('/user/'+name+'/repos').success(function(data){
				$scope.name = name;
				console.log(data);
			});
		}

		$scope.getRepos = function(){
			$http.get('/user/'+$scope.name+'/repos/names').success(function(data){
				$scope.repos = data.data;
			});
		}

	}]);
