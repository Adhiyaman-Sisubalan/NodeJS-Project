import db from '../config/database';

const subjectModel = db.subject;


/**
 *This addSubject function gets the input as object and insert/update that into subjects table in the database
 * @param {object} subject attributes derived from the imported CSV file
 * @returns {object} Returns the updated subject object
 */
export async function addSubject(subject) {
  return await subjectModel.upsert(subject);
}
