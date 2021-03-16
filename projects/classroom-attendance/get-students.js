export const getStudents = ({ hasTeachingAssistant, classList}) => {
  let students;

  if (hasTeachingAssistant) {
    [, , ...students] = classList;
  } else {
    [, ...students] = classList;
  }

  return students;
};
