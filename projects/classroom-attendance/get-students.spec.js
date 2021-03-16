import { expect } from 'chai';
import { getStudents } from './get-students';

describe('get-students.js - basic functionality', () => {
  it('returns a list of students when hasTeachingAssistant is true', () => {
    const classroom = {
      hasTeachingAssistant: true,
      classList: ['Teacher', 'Assistant', 'Student1', 'Student2'],
    };

    const actual = getStudents(classroom);
    const expected = ['Student1', 'Student2'];

    expect(actual).to.have.members(expected);
  });

  it('returns a list of students when hasTeachingAssistant is false', () => {
    const classroom = {
      hasTeachingAssistant: false,
      classList: ['Teacher', 'Student1', 'Student2', 'Student3'],
    };

    const actual = getStudents(classroom);
    const expected = ['Student1', 'Student2', 'Student3'];

    expect(actual).to.have.members(expected);
  });
});