module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define(
    'UserAddress',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'User',
          key: 'id',
        },
      },
      address: DataTypes.STRING,
      country: DataTypes.STRING,
      state: DataTypes.STRING,
      postalCode: DataTypes.INTEGER,
      addressType: DataTypes.STRING,
    },
    { freezeTableName: true },
  );
  Address.associate = function (models) {
    // associations can be defined here
  };
  return Address;
};
