import { findClass } from '../classServices';

describe('findClass', () => {
  it('should return the same class object as the classCode we give ', async () => {
    const result = await findClass('1');
    expect(result).toMatchObject({ classCode: '1' });
  });
});
