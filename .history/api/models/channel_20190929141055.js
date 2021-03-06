export default (sequelize, DataTypes) => {
    const Channel = sequelize.define('channel', {
        name: DataTypes.STRING,
        public: DataTypes.BOOLEAN,
    }, {
        underscored: true,
    });

    Channel.associate = (models) => {
        // 1:M
        // Channel se leaga la Team cu cheia teamId
        Channel.belongsTo(models.Team, {
            foreignKey: {
                name: 'teamId',
                field: 'team_id',
            },
        });
    };

    return Channel;
};
