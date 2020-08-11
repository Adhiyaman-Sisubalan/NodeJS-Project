import db from '../config/database';
import { QueryTypes } from 'sequelize';

const teacherModel = db.teacher;

/**
 *This addTeacher function gets the input as object and insert/update that into teachers table in the database
 * @param {object} teacher attributes derived from the imported CSV file
 * @returns {object} Returns the updated teacher object
 */
export async function addTeacher(teacher) {
  return await teacherModel.upsert(teacher);
}

/**
 * createReport function connects to masterTables in the Mysql database and fetch the data from the table
 * @returns {array} Return the objects as array
 */
export async function createReport() {
  return await db.sequelize.query(
    'select t.teacherName, m.subjectCode, s.subjectName, count(m.classCode) as count from masterTables m join teachers t on t.teacherEmail= m.teacherEmail join subjects s on s.subjectCode=m.subjectCode where toDelete=0  group by m.teacherEmail, m.subjectCode',
    { type: QueryTypes.SELECT }
  );
}
