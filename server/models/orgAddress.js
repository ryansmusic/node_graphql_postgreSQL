module.exports = (sequelize, DataTypes) => {
  const OrgAddress = sequelize.define(
    'OrgAddress',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      orgId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Organization',
          key: 'id',
        },
      },
      address: DataTypes.STRING,
      country: DataTypes.STRING,
      state: DataTypes.STRING,
      city: DataTypes.STRING,
      postalCode: DataTypes.INTEGER,
      landmark: DataTypes.STRING,
      lat: DataTypes.STRING,
      long: DataTypes.STRING,
      addressType: DataTypes.STRING,
    },
    { freezeTableName: true },
  );
  OrgAddress.associate = function (models) {
    // associations can be defined here
  };
  return OrgAddress;
};
