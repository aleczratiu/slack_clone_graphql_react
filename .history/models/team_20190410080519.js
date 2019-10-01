export default (sequelize, DataTypes) => {
    var Team = sequelize.define('user', {
        name: {
            type: DataTypes.STRING,
            unique: true,
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
        },
        password: DataTypes.STRING,
    });

    Team.associate = (models) => {
        Team.belongsToMany(models.User, {
            through: 'member',
            foreignKey: 'teamId'
        });
    };

    return Team;
};
