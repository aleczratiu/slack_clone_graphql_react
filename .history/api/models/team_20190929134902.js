export default (sequelize, DataTypes) => {
    const Team = sequelize.define('team', {
        name: {
            type: DataTypes.STRING,
            unique: true,
        },
    });

    Team.associate = (models) => {
        // Team apartine de User prin member tabla de legatura cu cheia teamId
        Team.belongsToMany(models.User, {
            through: 'member',
            foreignKey: 'teamId',
        });
        Team.belongsTo(models.User, {
            foreignKey: 'owner',
        });
    };

    return Team;
};
