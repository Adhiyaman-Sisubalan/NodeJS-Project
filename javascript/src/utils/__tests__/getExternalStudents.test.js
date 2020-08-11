import axios from 'axios';
import { getExternalStudents } from '../masterServices';

jest.mock('axios');
describe('getExternalStudents', () => {
  it('should fetch data successfully from an API', async () => {
    const data = getExternalStudents('1', 5);
    axios.get.mockImplementationOnce(() => Promise.resolve(data));
  });
});
