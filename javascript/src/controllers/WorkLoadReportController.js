import Express from 'express';
import Logger from '../config/logger';
import { createReport } from '../utils/teacherServices';

const WorkLoadReportController = Express.Router();
const LOG = new Logger('WorkLoadReportController.js');

const reportHandler = async (req, res, next) => {
  try {
    const records = await createReport();
    const record = {};

    records.forEach((element) => {
      if (record[element.teacherName] === undefined) {
        record[element.teacherName] = [];
      }
      record[element.teacherName].push({
        subjectCode: element.subjectCode,
        subjectName: element.subjectName,
        numberOfClasses: element.count,
      });
    });

    return res.send(record);
  } catch (err) {
    LOG.error(err);
    return next(err);
  }
};

WorkLoadReportController.get('/reports/workload', reportHandler);

export default WorkLoadReportController;
