import Sequelize from 'sequelize';
const sequelize = new Sequelize('slack', 'postgras', config.password, config);

const models = {
    userMode: sequelize.import('./users')
};

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = db;