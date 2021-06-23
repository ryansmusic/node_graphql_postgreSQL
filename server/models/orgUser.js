module.exports = (sequelize, DataTypes) => {
  const OrgUser = sequelize.define(
    'OrgUser',
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
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'User',
          key: 'id',
        },
      },
      orgId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Organization',
          key: 'id',
        },
      },
      departmentId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'DeparmentMaster',
          key: 'id',
        },
      },
    },
    {
      freezeTableName: true,
    },
  );
  OrgUser.associate = function (models) {
    // associations can be defined here
  };
  return OrgUser;
};
