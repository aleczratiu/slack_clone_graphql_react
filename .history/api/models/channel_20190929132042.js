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

    Channel.association = (models) => {
        Channel.belongsTo(models.team, {
            through: 'team',
            foreignKey: 'teamId',
        }),
        Channel.belongsTo()
    }
}
