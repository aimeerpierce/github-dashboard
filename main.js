var app = angular.module('githubScrub',[]);

	app.controller('controller1',['$scope','$http','$window', function($scope,$http,$window) {
		$scope.submit = function(name){
			$http.get('/user/'+name+'/repos').success(function(data){
				$scope.name = name;
				console.log(data);
				$http.get('/user/'+$scope.name).success(function(data){
						$scope.givenName = data.data.name;
					});
			});
		}
		//$scope.name = 'aimeerpierce';

		// $scope.getName = function(){
		// 	$http.get('/user/'+$scope.name).success(function(data){
		// 		$scope.givenName = data.data.name;
		// 	});
		// }

		$scope.getRepos = function(){
			$http.get('/user/'+$scope.name+'/repos/names').success(function(data){
				$scope.repos = data.data;
			});
			$scope.repoListed = true;
		}
		$scope.assignRepo = function(repo){
			$scope.currentRepo = repo;
			console.log($scope.currentRepo);
		}

		$scope.getIssue = function(){
			$http.get('/user/'+$scope.name+'/'+$scope.currentRepo+'/issues').success(function(data){
				$scope.issues = data.data;
				console.log($scope.issues);
			});
		}
		$scope.resolveIssue = function(url){
			$window.open(url,'_blank');
		}

		$scope.hideRepos = function(){
			if($scope.repoListed == true){
				$scope.repoListed = false;
			} else {
				$scope.repoListed = true;
			}
		}
	}]);
