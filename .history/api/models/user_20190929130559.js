export default (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    username: {
      type: DataTypes.STRING,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
    },
  });

  User.associate = (models) => {
    // User apartine de Team prin member tabla de legatura cu cheia useriD
    User.belongsToMany(models.Team, {
      through: 'member',
      foreignKey: 'userId',
    });

    return User;
  };
};
