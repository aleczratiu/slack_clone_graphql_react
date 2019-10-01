export default (sequelize, DataTypes) => {
    var User = sequelize.define('user', {
        username: DataTypes.STRING
    });

    User.associate = function (models) {
        models.User.hasMany(models.Task);
    };

    return User;
};
