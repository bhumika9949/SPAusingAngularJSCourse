(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService',ShoppingListCheckOffService)
  ;

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var buyCtrl = this;
  buyCtrl.tobuyitems = ShoppingListCheckOffService.gettobuyitems();
  buyCtrl.checkOff = function (item){
    try {
      ShoppingListCheckOffService.checkOff(item);
    } catch (e) {
      buyCtrl.error = e;
    }
  }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtCtrl = this;
  boughtCtrl.boughtitems = ShoppingListCheckOffService.getboughtitems();
}

function ShoppingListCheckOffService() {
  var service = this;

  //List of Items
  var tobuy = [{ name: "cookies", quantity: 10 }, { name: "chips", quantity: 12 }, { name: "candies", quantity: 20 }];
  var bought = [];

  //CheckOff function
  service.checkOff = function(boughtitem){
    var index = tobuy.findIndex(item => item == boughtitem);
    if(index > -1){
      tobuy.splice(index, 1);
      bought.push(boughtitem);
    } else{
      throw new Error("Can not buy this item");
    }
  };
  //Bought items
  service.getboughtitems = function(){
    return bought;
  };
  //To Buy items
  service.gettobuyitems = function(){
    return tobuy;
  };
}

}) ();
