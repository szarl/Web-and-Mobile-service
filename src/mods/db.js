var appartments  = require('./appartment/appartments.json');
var users = require('./user/users.json');

module.exports = function() {
    return {
        appartments : appartments,
        users : users,
    }
}