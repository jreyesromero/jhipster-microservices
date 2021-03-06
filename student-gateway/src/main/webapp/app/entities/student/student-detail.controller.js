(function() {
    'use strict';

    angular
        .module('microServiceGatewayStudentApp')
        .controller('StudentDetailController', StudentDetailController);

    StudentDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Student'];

    function StudentDetailController($scope, $rootScope, $stateParams, previousState, entity, Student) {
        var vm = this;

        vm.student = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('microServiceGatewayStudentApp:studentUpdate', function(event, result) {
            vm.student = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
