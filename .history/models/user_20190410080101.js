export default (sequelize, DataTypes) => {
    var User = sequelize.define('user', {
        username: {
            type: DataTypes.STRING,
            unique: true,
        }
    });

    User.associate = (models) {
        models.User.hasMany(models.Task);
    };

    return User;
};
