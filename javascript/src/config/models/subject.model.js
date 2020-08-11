module.exports = (sequelize, Sequelize) => {
  const Subject = sequelize.define('subject', {
    subjectCode: {
      type: Sequelize.STRING(30),
      primaryKey: true,
    },
    subjectName: {
      type: Sequelize.STRING(30),
    },
  });
  return Subject;
};
