(function () {
    'use strict';

    angular
        .module('microServiceGatewayStudentApp')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('api/register', {}, {});
    }
})();
