export default (sequelize, DataTypes) => {
    var Channel = sequelize.define('channel', {
        text: DataTypes.STRING,
        public: DataTypes.BOOLEAN,
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
