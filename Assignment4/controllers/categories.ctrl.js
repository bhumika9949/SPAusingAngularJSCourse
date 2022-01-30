angular.module('MenuApp')
.controller('categoriesController', CategoriesController);

CategoriesController.$inject = ['categories'];
function CategoriesController(categories) {
  var categoriesCtrl = this;
  categoriesCtrl.categories = categories;

}
