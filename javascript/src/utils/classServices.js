import db from '../config/database';

const classModel = db.class;

/**
 * This addClass function gets the input as object and insert/update that into classes table in the database
 * @param {object} data attributes derived from the imported CSV file
 * @returns {object} Returns the updated class
 */
export async function addClass(data) {
  return await classModel.upsert(data);
}

/**
 * This findClass function takes the input as classCode and find the object in the classes table
 * @param {*} classCode Its the required classCode
 * @returns {Object} Returns the class object
 */
export async function findClass(classCode) {
  return await classModel.findOne({ where: { classCode } });
}
