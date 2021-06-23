module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('OrgUser', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      roleId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'RoleMaster',
          key: 'id',
        },
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'User',
          key: 'id',
        },
      },
      orgId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Organization',
          key: 'id',
        },
      },
      departmentId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'DeparmentMaster',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    }),
  down: (queryInterface) => queryInterface.dropTable('OrgUser'),
};
