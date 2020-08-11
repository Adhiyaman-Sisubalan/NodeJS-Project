import Express from 'express';
import Logger from '../config/logger';
import { addClass, findClass } from '../utils/classServices';

const ClassController = Express.Router();
const LOG = new Logger('ClassController.js');

const classUpdateHandler = async (req, res, next) => {
  const { classname } = req.body;
  try {
    const classCode = req.params.classCode;
    const dbClass = await findClass(classCode);
    if (dbClass === null) return res.sendStatus('404');
    else await addClass({ classCode, classname });
    return res.sendStatus('204');
  } catch (err) {
    LOG.error(err);
    return next(err);
  }
};

ClassController.put('/class/:classCode', classUpdateHandler);

export default ClassController;
