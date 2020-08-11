module.exports = (sequelize, Sequelize) => {
  const masterTable = sequelize.define('masterTable', {
    studentEmail: {
      type: Sequelize.STRING(30),
      references: {
        model: {
          tableName: 'students',
        },
        key: 'studentEmail',
      },
      primaryKey: true,
    },
    teacherEmail: {
      type: Sequelize.STRING(30),
      references: {
        model: {
          tableName: 'teachers',
        },
        key: 'teacherEmail',
      },
      primaryKey: true,
    },
    classCode: {
      type: Sequelize.STRING(30),
      references: {
        model: {
          tableName: 'classes',
        },
        key: 'classCode',
      },
      primaryKey: true,
    },
    subjectCode: {
      type: Sequelize.STRING(30),
      references: {
        model: {
          tableName: 'subjects',
        },
        key: 'subjectCode',
      },
      primaryKey: true,
    },
    toDelete: {
      type: Sequelize.BOOLEAN,
    },
  });

  return masterTable;
};
