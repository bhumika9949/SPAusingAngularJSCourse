(function () {
  'use strict';

  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService',MenuSearchService)
  .directive('foundItems', FoundItemsDirective)
  ;

function FoundItemsDirective(){
    var ddo = {
      templateUrl: 'foundItems.html',
      scope: {
        items : '<',
        onRemove : '&'
      },
    };

    return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var vm = this;
  vm.getItems = function() {
    if (vm.search === "") {
        vm.myItems = [];
      } else {
        MenuSearchService.getMatchedMenuItems(vm.search).then(function(res) {
           vm.myItems = res;
           console.log(vm.myItems);
         });
      }

  };
  vm.removeItem = function(index) {
    MenuSearchService.removeItem(index);
  };
}

MenuSearchService.$inject = ['$http'];
function MenuSearchService($http){
  var service = this;
  var searchedItems = [];
  service.getMatchedMenuItems = function(search) {
    var promise = $http( {
      method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
    });
    return promise.then(function (result) {
      searchedItems = [];
      result.data.menu_items.forEach((item) => {
        if(item.description.toUpperCase().includes(search.toUpperCase())) {
          searchedItems.push(item);
        }
      });
      return searchedItems;
    });
  }
  service.removeItem = function(index) {
   searchedItems.splice(index, 1);
 };
}


}) ();
