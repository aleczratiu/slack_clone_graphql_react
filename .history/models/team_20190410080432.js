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

    User.associate = (models) => {
        User.belongsToMany(models.Team, {
            through: 'member',
            foreignKey: 'userId'
        });
    };

    return User;
};
