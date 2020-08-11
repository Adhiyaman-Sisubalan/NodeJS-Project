module.exports = (sequelize, Sequelize) => {
  const Student = sequelize.define('student', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    studentEmail: {
      type: Sequelize.STRING(30),
      unique: true,
    },
    studentName: {
      type: Sequelize.STRING(30),
    },
  });
  return Student;
};
