export default (sequelize, DataTypes) => {
    var User = sequelize.define('user', {
        username: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
        password: DataTypes.STRING,
    });

    User.associate = (models) => {
        User.belongsToMany(models.Team, {
            through: 'member',
            foreignKey: {
                name: 'userId',
                field: 'user_id'
            }
        });
        User.belongsToMany(models.Channel, {
            through: 'channel_member',
            foreignKey: {
                name: 'userId',
                field: 'user_id'
            }
        });
    };

    return User;
};
