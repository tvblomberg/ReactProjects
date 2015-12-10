var React = require('react/addons');
var GroceryItemList = require('./components/groceryitemlist.jsx');

var groceryItemStore = require('./stores/GroceryItemStore.jsx');
var initial = groceryItemStore.getItems();

function render() {
    React.render(<GroceryItemList items={initial} />, app);
}

groceryItemStore.onChange(function(items) {
    initial = items;
    render();
});
render();



