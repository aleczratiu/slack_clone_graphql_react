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
    }, {
        underscored: true,
    });

    User.associate = (models) => {
        // User apartine de Team prin member tabla de legatura cu cheia userId
        User.belongsToMany(models.Team, {
            through: 'member',
            foreignKey: {
                name: 'userId',
                field: 'user_id',
            },
        });
        User.belongsToMany(models.Channel, {
            through: 'member',
            foreignKey: {
                name: 'userId',
                field: 'user_id',
            },
        });
    };

    return User;
};
