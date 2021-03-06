export default (sequelize, DataTypes) => {
  const Message = sequelize.define('message', {
    name: {
      type: DataTypes.STRING,
      unique: true,
    },
  });

  Message.associate = (models) => {
      Message.belongsToMany(models.)
  }
};
