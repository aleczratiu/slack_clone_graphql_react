export default (sequelize, DataTypes) => {
    var Channel = sequelize.define('channel', {
        text: DataTypes.STRING,
        public: DataTypes.BOOLEAN,
    });

    Channel.associate = (models) => {
        // 1:M
        Channel.belongsToMany(models.Channel, {
            foreignKey: 'teamId'
        });
    };

    return Channel;
};
