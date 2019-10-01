export default (sequelize, DataTypes) => {
    var Message = sequelize.define('message', {
        name: {
            type: DataTypes.STRING,
            unique: true,
        },
    });

    Message.associate = (models) => {
        // 1:1
        Message.belongsToMany(models.Channel, {
            through: 'member',
            foreignKey: 'channelId'
        });
        // 1:M
        Message.belongsTo(models.User, {
            foreignKey: 'userId'
        })
    };

    return Message;
};
