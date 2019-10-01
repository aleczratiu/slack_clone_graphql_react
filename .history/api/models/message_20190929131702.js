export default (sequelize, DataTypes) => {
  const Message = sequelize.define('message', {
    text: {
      type: DataTypes.STRING,
    },
  });

  Message.associate = (models) => {
    // 1:M
    // Un mesaj poate fi legat la 1 user dintr-un channel
    // Messaj legat la channel prin channelId,
    // Mesaj legat prin User la
    Message.belongsTo(models.Channel, {
      foreignKey: 'channelId',
    }),
    Message.belongsTo(models.User, {
      foreignKey: 'userId',
    });

    return Message;
  };
};
