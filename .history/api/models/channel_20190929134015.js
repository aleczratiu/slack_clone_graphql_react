export default (sequelize, DataTypes) => {
    const Channel = sequelize.define('channel', {
        id: {
            type: DataTypes.INT,
            unique: true,
        },
        name: {
            type: DataTypes.String,
        },
        teamId: {
            type: DataTypes.INT,
        },
        public: {
            type: DataTypes.BOOLEAN,
        },
    });

    Channel.associate = (models) => {
        Channel.belongsTo(models.Team, {
            foreignKey: 'teamId',
        }),

        return Channel;
    };
}
