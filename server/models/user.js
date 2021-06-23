module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      userName: DataTypes.STRING,
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      dob: DataTypes.DATE,
      gender: DataTypes.STRING,
      isActive: DataTypes.BOOLEAN,
      avtar: DataTypes.STRING,
      otp: DataTypes.STRING,
      otpExpireTime: DataTypes.BIGINT,
    },
    { freezeTableName: true },
  );
  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
};
