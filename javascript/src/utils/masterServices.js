import db from '../config/database';
import axios from 'axios';

const masterModel = db.masterDb;

/**
 *This addMaster function gets the input as object and insert/update that into masterTables table in the database
 * @param {object}
 * @returns {object} Returns the updated student object
 */
export async function addMaster(data) {
  return await masterModel.upsert(data);
}

/**
 *This getStudents function takes the input from the URL via queryString and fetch the required data from the database
 * @param {string} classCode Its the required classCode
 * @param {Integer} offset Total records to ignore before running the first record
 * @param {Integer} limit Total students to retrieve
 * @returns {object} Returns student objects in a single paginated list
 */
export async function getStudents(classCode, offset, limit) {
  const external = await getExternalStudents(classCode, limit);
  const internal = await masterModel.findAndCountAll({
    include: [{ model: db.student }],
    where: {
      classcode: classCode,
      toDelete: 0,
    },
  });

  let internalStudents = [];
  for (const { student } of internal.rows) {
    const { id, studentName: name, studentEmail: email } = student;
    const students = {
      id,
      name,
      email,
    };
    const stu = internalStudents.find((s) => s.email === students.email);
    if (!stu) internalStudents.push(students);
  }

  const students = {
    count: internalStudents.length + external.data.count,
    students: [],
  };

  let totStudents = [...internalStudents, ...external.data.students];

  //Sorting Alphanumerically
  totStudents.sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0));

  students.students = getStudentList(limit, offset, totStudents);
  return students;
}

/**
 * This getStudentList function takes the input and returns the array of student objects
 * @param {*} limit
 * @param {*} offset
 * @param {*} totStudents
 * @returns {object}
 */
export function getStudentList(limit, offset, totStudents) {
  const students = [];
  let totalIteration = parseInt(offset) + parseInt(limit);
  for (let i = offset; i < totalIteration; i++) {
    if (totStudents[i - 1] !== undefined) students.push(totStudents[i - 1]);
  }
  return students;
}

/**
 * This getExternalStudents function takes the input from the URL via queryString and fetch the required data via ExternalStudentListing API
 * @param {string} classCode Its the required classCode
 * @param {Integer} offset Total records to ignore before running the first record
 * @param {Integer} limit Total students to retrieve
 * @returns {object} Returns the student objects
 */
export async function getExternalStudents(classCode, limit) {
  return await axios.get(
    `http://localhost:5000/students?class=${classCode}&offset=1&limit=${
      limit * 20
    }`
  );
}
