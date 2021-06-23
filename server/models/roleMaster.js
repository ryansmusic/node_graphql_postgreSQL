module.exports = (sequelize, DataTypes) => {
  const RoleMaster = sequelize.define(
    'RoleMaster',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      roleName: DataTypes.STRING,
    },
    { freezeTableName: true },
  );
  RoleMaster.associate = function (models) {
    // associations can be defined here
  };
  return RoleMaster;
};
