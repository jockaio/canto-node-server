const Sequelize = require('sequelize');
const sequelizeConnection = new Sequelize(process.env.DBNAME, process.env.DBUSER, process.env.DBPASSWORD, {
    host: process.env.DBHOST,
    dialect: 'mysql',
    operatorsAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

const db = {
    Sequelize: Sequelize,
    sequelize: sequelizeConnection,
  };
  
db.Word = db.sequelize.import('./dbModels');

db.Word.sync().then(() => {
    console.log('Word table created.');
  }).catch(() => {
    console.log('Something went wrong yo.')
  });

module.exports = db;
