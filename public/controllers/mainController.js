myapp.controller('mainController', function($scope, $http) {

    $scope.blogs = {};

    $http.get('http://192.168.0.12:8000/blogtext').
    success(function(data, status, headers, config) {
        console.log(data)

        $scope.blogs = data;




    }).
    error(function(data, status, headers, config) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
    });

});