import Express from 'express';
import Logger from '../config/logger';
import upload from '../config/multer';
import { convertCsvToJson } from '../utils';
import { addStudent } from '../utils/studentServices';
import { addTeacher } from '../utils/teacherServices';
import { addClass } from '../utils/classServices';
import { addSubject } from '../utils/subjectServices';
import { addMaster } from '../utils/masterServices';

const DataImportController = Express.Router();
const LOG = new Logger('DataImportController.js');

const dataImportHandler = async (req, res, next) => {
  const { file } = req;
  try {
    const data = await convertCsvToJson(file.path);
    for (const datum of data) {
      const {
        studentEmail,
        studentName,
        teacherEmail,
        teacherName,
        classCode,
        classname,
        subjectCode,
        subjectName,
        toDelete,
      } = datum;
      if (
        studentEmail === '' ||
        teacherEmail === '' ||
        classCode === '' ||
        subjectCode === ''
      ) {
        return res.sendStatus('400');
      }
      await addStudent({ studentEmail, studentName });
      await addTeacher({ teacherEmail, teacherName });
      await addSubject({ subjectCode, subjectName });
      await addClass({ classCode, classname });

      await addMaster({
        studentEmail,
        teacherEmail,
        subjectCode,
        classCode,
        toDelete,
      });
    }
    return res.sendStatus('204');
  } catch (err) {
    LOG.error(err);
    return next(err);
  }
};

DataImportController.post('/upload', upload.single('data'), dataImportHandler);

export default DataImportController;
