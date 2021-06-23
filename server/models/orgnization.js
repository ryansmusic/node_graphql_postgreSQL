module.exports = (sequelize, DataTypes) => {
  const Organization = sequelize.define(
    'Organization',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      email: DataTypes.STRING,
      orgName: DataTypes.STRING,
      website: DataTypes.STRING,
      logo: DataTypes.STRING,
      orgType: DataTypes.STRING,
      phone: DataTypes.STRING,
    },
    { freezeTableName: true },
  );
  Organization.associate = function (models) {
    // associations can be defined here
  };
  return Organization;
};
