module.exports = (sequelize, DataTypes) => {
  const DeparmentMaster = sequelize.define(
    'DeparmentMaster',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      departmentName: DataTypes.STRING,
    },
    {
      freezeTableName: true, // make singular table name
    },
  );
  DeparmentMaster.associate = function (models) {};
  return DeparmentMaster;
};
