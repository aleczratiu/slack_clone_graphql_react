export default (sequelize, DataTypes) => {
    var Message = sequelize.define('user', {
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
        Team.belongsTo(models.User, {
            foreignKey: 'owner'
        })
    };

    return Team;
};
