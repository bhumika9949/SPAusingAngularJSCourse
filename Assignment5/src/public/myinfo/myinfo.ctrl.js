(function () {
  "use strict";

  angular.module('public')
  .controller('myinfoController', myinfoController);

  myinfoController.$inject = ['ApiPath','RegisterService', 'MenuService'];
  function myinfoController(ApiPath, RegisterService, MenuService) {
    var myinfoCtrl = this;
    myinfoCtrl.basePath = ApiPath;
    var show = false;

    myinfoCtrl.getMyInfo = function() {
        if(RegisterService.isUserRegistered()) {
          myinfoCtrl.user = RegisterService.getUser();
          show = true;
          console.log(myinfoCtrl.user);
        } else {
          show = false;
        }
        myinfoCtrl.show = show;
    };

    myinfoCtrl.getMyInfo();

  }

})();
