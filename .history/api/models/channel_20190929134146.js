export default (sequelize, DataTypes) => {
    const Channel = sequelize.define('channel', {
        name: DataTypes.STRING,
        public: DataTypes.BOOLEAN,
    });

    Channel.associate = (models) => {
        // 1:M
        // Channel se leaga la Team prin teamId
        Channel.belongsTo(models.Team, {
            foreignKey: 'teamId',
        });
    };

    return Channel;
};
