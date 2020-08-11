module.exports = (sequelize, Sequelize) => {
  const Teacher = sequelize.define('teacher', {
    teacherEmail: {
      type: Sequelize.STRING(30),
      primaryKey: true,
    },
    teacherName: {
      type: Sequelize.STRING(30),
    },
  });
  return Teacher;
};
