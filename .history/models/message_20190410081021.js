export default (sequelize, DataTypes) => {
    var Message = sequelize.define('message', {
        text: DataTypes.STRING,
    });

    Message.associate = (models) => {
        // 1:M
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
