(function () {
 "use strict";

 angular.module('public')
 .controller('FormController', FormController);

FormController.$inject = ['MenuService', 'RegisterService'];
 function FormController(MenuService, RegisterService) {
   var formCtrl = this;
   var user_info = {};
   formCtrl.submitForm = function() {
     formCtrl.trueMsg = null;
     formCtrl.falseMsg = null;
     user_info = {
       'firstname': formCtrl.firstname,
       'lastname': formCtrl.lastname,
       'email': formCtrl.email,
       'phone': formCtrl.phone,
     };
     MenuService.getMenuItems().then(function(response){
       var menuItems = response.menu_items;
       user_info.mydish = menuItems.find((x) => x.short_name == formCtrl.mydish);
       if(user_info.mydish) {
         RegisterService.setUser(user_info);
         formCtrl.trueMsg = 'Your information has been saved';
         console.log('Go ahead');
       } else {
         //otherwise return error
         formCtrl.falseMsg = 'No such menu number exists';
         console.log('Throw error');
       }
     });
   };

   formCtrl.isUserRegistered = function() {
     return RegisterService.isUserRegistered();
   };
 }

})();
