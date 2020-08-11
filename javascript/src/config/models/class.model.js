module.exports = (sequelize, Sequelize) => {
  const Class = sequelize.define('class', {
    classCode: {
      type: Sequelize.STRING(30),
      primaryKey: true,
    },
    classname: {
      type: Sequelize.STRING(30),
    },
  });
  return Class;
};
