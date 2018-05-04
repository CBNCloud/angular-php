app.controller('IndexController', function ($scope, $http) {
    $scope.people;

    $scope.getPeople = function () {
        $http({

            method: 'GET',
            url: '/api/read.php'

        }).then(function (response) {

            // on success
            $scope.people = response.data;

        }, function (response) {

            // on error
            console.log(response.data, response.status);

        });
    };

    $scope.addPerson = function () {
        $http({

            method: 'POST',
            url: '/api/insert.php',
            data: {newName: $scope.newName, newPhone: $scope.newPhone}

        }).then(function (response) {// on success

            $scope.getPeople();

        }, function (response) {

            console.log(response.data, response.status);

        });
    };

    $scope.deletePerson = function (id) {

        $http({

            method: 'POST',
            url: '/api/delete.php',
            data: {recordId: id}

        }).then(function (response) {

            $scope.getPeople();

        }, function (response) {

            console.log(response.data, response.status);

        });
    };

    $scope.getPeople();
});