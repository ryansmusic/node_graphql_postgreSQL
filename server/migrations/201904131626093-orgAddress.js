module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('OrgAddress', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      orgId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Organization',
          key: 'id',
        },
      },
      address: {
        type: Sequelize.STRING,
      },
      country: {
        type: Sequelize.STRING,
      },
      state: {
        type: Sequelize.STRING,
      },
      city: {
        type: Sequelize.STRING,
      },
      addressType: {
        type: Sequelize.STRING,
      },
      lat: {
        type: Sequelize.STRING,
      },
      long: {
        type: Sequelize.STRING,
      },
      landmark: {
        type: Sequelize.STRING,
      },
      postalCode: {
        type: Sequelize.INTEGER,
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
  down: (queryInterface) => queryInterface.dropTable('OrgAddress'),
};
