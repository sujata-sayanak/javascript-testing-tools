var app = angular.module("myModule", [])
							   .controller("myController", function($scope){
			
								$scope.newMember = {};
								$scope.clickedMembers = [];
								
								$scope.members = [
									{name: "Juan Dela Cruz", email: "delacruz@rocketmail.com", gender: "Male"},
									{name: "San Pedro", email: "pedro@yahoo.com", gender: "Male"},
									{name: "San Lazaro", email: "lazaro@gmail.com", gender: "Male"}
								];
								
								$scope.saveMember = function(){
									$scope.members.push($scope.newMember);
									$scope.newMember = {};
								};		
								
								$scope.selectMember =  function(member){
									$scope.selectedMember = member;
								};
								
								$scope.updateMember = function(){
									
								};
								
								$scope.deleteMember = function(){
									$scope.members.splice($scope.members.indexOf($scope.selectMember), 1);
								};
						});