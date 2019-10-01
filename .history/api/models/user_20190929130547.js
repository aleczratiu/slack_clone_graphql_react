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
    // Team apartine de User prin member tabla de legatura cu cheia teamId
    User.belongsToMany(models.Team, {
      through: 'member',
      foreignKey: 'userId',
    });

    return User;
  };
};
