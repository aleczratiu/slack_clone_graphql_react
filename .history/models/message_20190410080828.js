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

    Message.associate = (models) => {
        Message.belongsToMany(models.User, {
            through: 'member',
            foreignKey: 'teamId'
        });
        Message.belongsTo(models.User, {
            foreignKey: 'owner'
        })
    };

    return Message;
};
