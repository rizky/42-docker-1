angular.module('isaralanding', ['ngCookies'])
.controller('MainController', ['$scope','$http','$cookieStore', function($scope,$http,$cookieStore) {
  $scope.lang = null;
  $scope.chosenLang = $cookieStore.get('isara_lang') || 'en';
  $scope.dataLang = null;

  function loadLanguage(){
    $http.get('js/lang.json').success(function(data){
      $scope.dataLang = data;
      $scope.lang = data[$scope.chosenLang];
    });  
  }

  $scope.changeLang = function(lg){
    $scope.chosenLang = lg;
    $scope.lang = $scope.dataLang[lg];
    $cookieStore.put('isara_lang',lg);
  };

  loadLanguage();
}]);