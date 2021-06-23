module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('RolePermission', {
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
      permissionId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'PermissionMaster',
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
  down: (queryInterface) => queryInterface.dropTable('RolePermission'),
};
