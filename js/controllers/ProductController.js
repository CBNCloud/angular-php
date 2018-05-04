app.controller('ProductController', ['$scope', function ($scope) {
    $scope.title = 'Belajar aja';
    $scope.book = {
        title: 'Belajar AngularJs Bersama Agung Setiawan',
        author: 'Agung Setiawan',
        price: 80000
    };


    $scope.log = function () {
        console.log($scope.harga);
    };
}]);