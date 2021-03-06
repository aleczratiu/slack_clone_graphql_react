export default (sequelize, DataTypes) => {
    const Message = sequelize.define('message', {
        text: {
            type: DataTypes.STRING,
        },
    });

    Message.associate = (models) => {
        // 1:M
        // Un mesaj poate fi legat la 1 user dintr-un channel
        // Messaj legat la channel cu cheia channelId,
        // Mesaj legat la User cu cheia userId
        Message.associate = models => {
            // 1:M
            Message.belongsTo(models.Channel, {
                foreignKey: 'channelId',
            });
            Message.belongsTo(models.User, {
                foreignKey: 'userId',
            });
        };

        return Message;
    };
};
