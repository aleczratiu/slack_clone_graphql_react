export default (sequelize, DataTypes) => {
    var Message = sequelize.define('message', {
        name: {
            type: DataTypes.STRING,
            unique: true,
        },
    });

    Message.associate = (models) => {
        // 1:1
        Message.belongsToMany(models.Channel, {
            through: 'member',
            foreignKey: 'teamId'
        });
        // 1:M
        Message.belongsTo(models.User, {
            foreignKey: 'owner'
        })
    };

    return Message;
};
