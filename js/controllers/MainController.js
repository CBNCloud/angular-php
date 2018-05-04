
app.controller('MainController', ['$scope', 'KalkulatorFactory','UsersService', function ($scope, KalkulatorFactory, UsersService) {
    $scope.books = [
        {
            title: 'Belajar AngularJs Bersama Agung Setiawan',
            author: 'Agung Setiawan',
            price: 80000,
            pubdate: new Date('2015', '09', '09')
        },
        {
            title: 'Belajar Ruby',
            author: 'Penulis Satu',
            price: 10000000,
            pubdate: new Date('2015', '10', '09')
        },
        {
            title: 'Belajar Ruby',
            author: 'Penulis Satu',
            price: 65000,
            pubdate: new Date('2015', '10', '09')
        },
        {
            title: 'Belajar Ruby on Rails',
            author: 'Penulis Dua',
            price: 90000,
            pubdate: new Date('2015', '11', '09')
        }];


    $scope.titlehttpd = "AngularJs Http Service";

    UsersService.datanya().success(function (data) {
        $scope.users = data;
        var users = $scope.users;
        console.log(users);
    });

    $scope.logToConsole = function (index) {
        var book = $scope.books[index];
        console.log(book);
    };
}]);