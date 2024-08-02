export default function getStudentIdsSum(students) {
  if (!Array.isArray(students)) {
    return 0;
  };
  return students.reduce((accumulator, current) => accumulator + current.id, 0);
}
