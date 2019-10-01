import Sequelize from 'sequelize';
const sequelize = new Sequelize('slack', 'postgres', 'postgres', config);

const models = {
    user: sequelize.import('./users'),
    channel: sequelize.import('./channel'),
    member: sequelize.import('./member'),
    message: sequelize.import('./message'),
    team: sequelize.import('./team')
};

Object.keys(models).forEach(modelName => {
    if ('associate' in models[modelName]) {
        db[modelName].associate(db);
    }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = db;