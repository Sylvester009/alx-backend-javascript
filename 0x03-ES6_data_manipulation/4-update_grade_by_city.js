export default function updateStudentGradeByCity(students, city, newGrades) {
  const cityFilter = students.filter((student) => student.location === city);
  const gradeUpdate = cityFilter.map((student) => {
    const gradeObject = newGrades.find((grade) => grade.id === student.id);
    return {
      ...student,
      grade: gradeObject ? gradeObject.grade : "N/A",
    };
  });

  return gradeUpdate;
}
