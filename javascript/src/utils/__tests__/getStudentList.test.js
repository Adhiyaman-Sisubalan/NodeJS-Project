import { getStudents } from './../masterServices';

describe('getStudents', () => {
  it('should return the list of students as much as the limit we give', async () => {
    const totStudents = await getStudents('1', 1, 2);
    console.log(totStudents.students);
    expect(totStudents.students.length).toBe(2);
  });
});
