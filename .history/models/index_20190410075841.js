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
        models[modelName].associate(models);
    }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = db;