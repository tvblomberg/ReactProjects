var dispatcher = require('./../dispatcher.jsx');

module.exports = {
    add: function(item) {
        dispatcher.dispatch({
            payload: item,
            type: 'grocery-item:add'

        })  
    },
    delete: function(item) {
        dispatcher.dispatch({
            payload: item,
            type: 'grocery-item:delete'

        })  
    }
}