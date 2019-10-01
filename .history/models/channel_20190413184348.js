export default (sequelize, DataTypes) => {
    var Channel = sequelize.define('channels', {
        public: DataTypes.BOOLEAN,
    });

    Channel.associate = (models) => {
        // 1:M
        Channel.belongsTo(models.Channel, {
            foreignKey: {
                name: 'teamId',
                field: 'team_id'
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
