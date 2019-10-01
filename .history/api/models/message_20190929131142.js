export default (sequelize, DataTypes) => {
  const Message = sequelize.define('message', {
    text: {
      type: DataTypes.STRING,
      unique: true,
    },
  });

  Message.associate = (models) => {
    Message.belongsToMany(models.Channel, {
      through: 'messages',
      foreignKey: 'channelId',
    }),
    Message.belongsTo(models.User, {
      through: 'messages',
      foreignKey: 'userId',
    });
  };
};
