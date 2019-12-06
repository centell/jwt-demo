'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      id: 1,
      name: 'foo',
      email: 'foo@example.com',
      password: 'foo'
    },{
      id: 2,
      name: 'bar',
      email: 'bar@example.com',
      password: 'bar'
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
