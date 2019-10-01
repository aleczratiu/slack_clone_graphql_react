export default (sequelize, DataTypes) => {
    var Team = sequelize.define('team', {
        name: {
            type: DataTypes.STRING,
            unique: true,
        },
    });

    Team.associate = (models) => {
        Team.belongsToMany(models.User, {
            through: 'member',
            foreignKey: {
                name: 'teamId',
                field: 'teamId'
            }
        });
        Team.belongsTo(models.User, {
            foreignKey: 'owner'
        })
    };

    return Team;
};
