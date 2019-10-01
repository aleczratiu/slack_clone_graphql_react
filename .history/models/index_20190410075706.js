import Sequelize from 'sequelize';
const sequelize = new Sequelize('slack', 'postgres', 'postgres', config);

const models = {
    user: sequelize.import('./users'),
    channel: sequelize.import('./channel'),
    team: sequelize.import('./team'),
    member: sequelize.import('./member'),
    message: sequelize.import('./message')
};

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = db;