'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn( // Añadir la columna AuthorId a la tabla Tips
      'Tips',
      'AuthorId',
      {type: Sequelize.INTEGER}
      );
  },

  down: function (queryInterface, Sequelize) {
   return queryInterface.removeColumn('Tips', 'AuthorId');
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
