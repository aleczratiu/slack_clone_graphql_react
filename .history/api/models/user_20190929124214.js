import { userInfo } from 'os';

export default (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    title: DataTypes.STRING,
    unique: true,
  });

  User.associate = models => userInfo;
};
