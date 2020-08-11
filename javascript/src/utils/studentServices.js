import db from '../config/database';

const studentModel = db.student;

/**
 *This addStudent function gets the input as object and insert/update that into students table in the database
 * @param {object} student attributes derived from the imported CSV file
 * @returns {object} Returns the updated student object
 */
export async function addStudent(student) {
  return await studentModel.upsert(student);
}
