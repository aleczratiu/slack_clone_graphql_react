export default (sequelize, DataTypes) => {
    var User = sequelize.define('user', {
        username: {
            type: DataTypes.STRING,
            unique: true,
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
        },
        password: DataTypes.STRING,
    });

    User.associate = (models) => {
        User.belongsToMany(models.Team, {
            through: models.member
        });
    };

    return User;
};
