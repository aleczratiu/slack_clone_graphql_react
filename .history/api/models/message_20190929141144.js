export default (sequelize, DataTypes) => {
    const Message = sequelize.define('message', {
        text: {
            type: DataTypes.STRING,
        },
    }, {
        underscored: true,
    });

    Message.associate = (models) => {
        // 1:M
        // Un mesaj poate fi legat la 1 user dintr-un channel
        // Messaj legat la channel cu cheia channelId,
        // Mesaj legat la User cu cheia userId
        Message.belongsTo(models.Channel, {
            foreignKey: {
                name: 'channelId',
                field: 'channel_id',
            },
        });
        Message.belongsTo(models.User, {
            foreignKey: {
                name: 'userId',
                field: 'user_Id',
            },
        });
    };

    return Message;
};
