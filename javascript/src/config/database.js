import Sequelize from 'sequelize';
import Logger from './logger';

const LOG = new Logger('database.js');
const {
  DB_HOST = 'localhost',
  DB_PORT = '3306',
  DB_SCHEMA = 'school-administration-system',
  DB_USER = 'root',
  DB_PW = 'password',
  DB_POOL_ACQUIRE = '30000',
  DB_POOL_IDLE = '10000',
  DB_POOL_MAX_CONN = '10',
  DB_POOL_MIN_CONN = '1',
  DB_LOG_LEVEL = 'info',
} = process.env;

const sequelize = new Sequelize(DB_SCHEMA, DB_USER, DB_PW, {
  dialect: 'mysql',
  host: DB_HOST,
  port: parseInt(DB_PORT),
  pool: {
    acquire: parseInt(DB_POOL_ACQUIRE),
    idle: parseInt(DB_POOL_IDLE),
    max: parseInt(DB_POOL_MAX_CONN),
    min: parseInt(DB_POOL_MIN_CONN),
  },
  timezone: '+08:00',
  logging: (msg) => {
    LOG[DB_LOG_LEVEL](msg);
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.teacher = require('./models/teacher.model.js')(sequelize, Sequelize);
db.student = require('./models/student.model.js')(sequelize, Sequelize);
db.class = require('./models/class.model.js')(sequelize, Sequelize);
db.subject = require('./models/subject.model.js')(sequelize, Sequelize);
db.masterDb = require('./models/masterDb.model.js')(sequelize, Sequelize);

db.masterDb.hasOne(db.student, {
  foreignKey: {
    name: 'studentEmail',
    allowNull: false,
  },
});

db.masterDb.hasOne(db.teacher, {
  foreignKey: {
    name: 'teacherEmail',
    allowNull: false,
  },
});

db.masterDb.hasOne(db.subject, {
  foreignKey: {
    name: 'subjectCode',
    allowNull: false,
  },
});

db.masterDb.hasOne(db.class, {
  foreignKey: {
    name: 'classCode',
    allowNull: false,
  },
});
export default db;
