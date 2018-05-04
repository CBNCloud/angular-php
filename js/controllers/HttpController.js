app.controller('HttpController', ['$scope', '$http', function ($scope, $http) {
    $scope.SendData = function () {
        // use $.param jQuery function to serialize data from JSON
        var data = ({
            fName: $scope.firstName,
            lName: $scope.lastName
        });

        var config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        }
        console.log(data);
        console.log(config);
        $http.post('/post.php', data, config)
            .success(function (data, status, headers, config) {
                $scope.PostDataResponse = data;
                console.log($scope.PostDataResponse, status);
            })
            .error(function (data, status, header, config) {
                $scope.ResponseDetails = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });
    };

}]);