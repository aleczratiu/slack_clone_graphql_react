export default (sequelize, DataTypes) => {
    var Channel = sequelize.define('channels', {
        public: DataTypes.BOOLEAN,
    });

    Channel.associate = (models) => {
        // 1:M
        Channel.belongsTo(models.Channel, {
            foreignKey: {
                name: 'teamId',
                field: 'teamId'
            }
        });
        Channel.belongsToMany(models.User, {
            through: 'channel_member',
            foreignKey: {
                name: 'channelId',
                field: 'channel_id'
            }
        });
    };

    return Channel;
};
