import Express from 'express';
import Logger from '../config/logger';
import { getStudents } from '../utils/masterServices';

const StudentController = Express.Router();
const LOG = new Logger('StudentController.js');

const getStudentsHandler = async (req, res, next) => {
  try {
    const classCode = req.params.classCode;
    const { offset, limit } = req.query;
    const students = await getStudents(classCode, offset, limit);
    if (students === null || students.length === 0)
      return res.sendStatus('404');
    else return res.send(students);
  } catch (err) {
    LOG.error(err);
    return next(err);
  }
};

StudentController.get('/class/:classCode/students', getStudentsHandler);

export default StudentController;
