export default (sequelize, DataTypes) => {
    var Channel = sequelize.define('message', {
        text: DataTypes.STRING,
    });

    Channel.associate = (models) => {
        // 1:M
        Channel.belongsToMany(models.Channel, {
            through: 'member',
            foreignKey: 'channelId'
        });
        // 1:M
        Channel.belongsTo(models.User, {
            foreignKey: 'userId'
        })
    };

    return Channel;
};
