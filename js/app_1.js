var app_1 = angular.module('app_1', []);

app_1.controller('CalcCtrl', function($scope){
    $scope.current_entry = ['0']; // initializing to nothing
    $scope.stored_entry = ['0']; // initializing to nothing
    $scope.tally = 0; // haven't done any math yet!

    $scope.number_push = function(entered_entry) {
        if ($scope.current_entry[0] === '0') {
            $scope.current_entry[0] = entered_entry;
        } else {
            $scope.current_entry.push(entered_entry);
        }
    };

    $scope.clear_current = function() {
        while($scope.current_entry.length > 0) {
            $scope.current_entry.pop();
        }
        $scope.current_entry[0] = '0';
    }

    $scope.clear_stored = function() {
        while($scope.stored_entry.length > 0) {
            $scope.stored_entry.pop();
        }
        $scope.stored_entry[0] = '0';
    }

    $scope.clear_all = function() {
        $scope.clear_current();
        $scope.clear_stored();
    }

    $scope.clean_stored_entry = function() {
        if ($scope.stored_entry[0] == '0' && $scope.stored_entry.length == 1) {
            $scope.stored_entry.splice(0, 1);
            console.log($scope.stored_entry)
        }
    }

    $scope.backspace = function() {
        var ind = $scope.current_entry.length - 1;
        if (ind != 0) {
            $scope.current_entry.splice(ind, 1);
        } else {
            $scope.current_entry[ind] = '0';
        }
    }

    $scope.plus = function() {
        $scope.clean_stored_entry();

        for (var i = 0; i < $scope.current_entry.length; i++) {
            $scope.stored_entry.push($scope.current_entry[i]);
        }
        $scope.tally += $scope.stored_entry.join('');
        $scope.stored_entry.push(' + ');

        $scope.clear_current();
    }
});