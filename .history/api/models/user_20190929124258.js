export default (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        username: {

      }
    title: DataTypes.STRING,
    unique: true,
  });

  User.associate = models => User;
};
