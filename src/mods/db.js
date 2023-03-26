const appartments  = require('./appartment/appartments.json');
const users = require('./user/users.json');
const students = require('./student/students.json');
const universities = require('./university/universities.json');

module.exports = function() {
    return {
        appartments,
        users,
        students,
        universities,
    }
}