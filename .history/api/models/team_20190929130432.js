export default (sequelize, DataTypes) => {
  const Team = sequelize.define('team', {
    name: {
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

  Team.association = (models) => {
    Team.belongsToMany(models.User, {
      through: 'member',
      foreignKey: 'teamId',
    });

    return Team;
  };
};
