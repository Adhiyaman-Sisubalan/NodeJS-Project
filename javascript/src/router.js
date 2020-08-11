import Express from 'express';
import DataImportController from './controllers/DataImportController';
import HealthcheckController from './controllers/HealthcheckController';
import ClassController from './controllers/ClassController';
import StudentController from './controllers/StudentController';
import WorkLoadReportController from './controllers/WorkLoadReportController';

const router = Express.Router();

router.use('/', DataImportController);
router.use('/', ClassController);
router.use('/', StudentController);
router.use('/', HealthcheckController);
router.use('/', WorkLoadReportController);

export default router;
