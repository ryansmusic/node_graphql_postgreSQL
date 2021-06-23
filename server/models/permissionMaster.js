module.exports = (sequelize, DataTypes) => {
  const PermissionMaster = sequelize.define(
    'PermissionMaster',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      permissionName: DataTypes.STRING,
      isActive: DataTypes.BOOLEAN,
    },
    { freezeTableName: true },
  );
  PermissionMaster.associate = function (models) {
    // associations can be defined here
  };
  return PermissionMaster;
};
