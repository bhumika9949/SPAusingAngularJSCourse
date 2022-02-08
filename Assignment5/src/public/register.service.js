(function () {
  "use strict";

  angular.module('public')
  .service('RegisterService', RegisterService);

  function RegisterService() {
    var service = this;
    var user = {};
    var isUserRegistered = false;

    service.setUser = function (user_info) {
      user = user_info;
      isUserRegistered = true;
    };

    service.isUserRegistered = function() {
      return isUserRegistered;
    }

    service.getUser = function () {
      return user;
    };

  }


})();
