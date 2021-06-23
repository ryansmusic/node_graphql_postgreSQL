module.exports = (sequelize, DataTypes) => {
  const RolePermission = sequelize.define(
    'RolePermission',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      roleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'RoleMaster',
          key: 'id',
        },
      },
      permissionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'PermissionMaster',
          key: 'id',
        },
      },
    },
    {
      freezeTableName: true,
    },
  );
  RolePermission.associate = function (models) {
    // associations can be defined here
  };
  return RolePermission;
};
