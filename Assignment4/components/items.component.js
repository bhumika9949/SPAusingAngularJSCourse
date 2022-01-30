angular.module('MenuApp')
.component('items', {
  templateUrl: 'html/items.component.html',
  bindings: {
    items: '<'
  }
});
