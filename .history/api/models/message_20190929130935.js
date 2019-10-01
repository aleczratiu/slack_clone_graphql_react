export default (sequelize, DataTypes) => {
  const Message = sequelize.define('message', {
    text: {
      type: DataTypes.STRING,
      unique: true,
    },
  });

  Message.associate = (models) => {
      Message.belongsToMany(models.Channel)
  }
};
