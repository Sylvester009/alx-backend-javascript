const fs = require('fs');

/**
 * Counts the students in a CSV data file.
 */
const countStudents = (csvdataPath) => {
  if (!fs.existsSync(csvdataPath)) {
    throw new Error('Cannot load the database');
  }
  if (!fs.statSync(csvdataPath).isFile()) {
    throw new Error('Cannot load the database');
  }
  const fileContent = fs
    .readFileSync(csvdataPath, 'utf-8')
    .toString('utf-8')
    .trim()
    .split('\n');
  const studentsByField = {};
  const dbFieldNames = fileContent[0].split(',');
  const studentAttributes = dbFieldNames.slice(0, dbFieldNames.length - 1);

  for (const data of fileContent.slice(1)) {
    const studentData = data.split(',');
    const studentPropValues = studentData.slice(0, studentData.length - 1);
    const field = studentData[studentData.length - 1];
    while (!Object.keys(studentsByField).includes(field)) {
      studentsByField[field] = [];
    }
    const studentEntries = studentAttributes
      .map((propName, idx) => [propName, studentPropValues[idx]]);
    studentsByField[field].push(Object.fromEntries(studentEntries));
  }

  const totalStudents = Object
    .values(studentsByField)
    .reduce((pre, cur) => (pre || []).length + cur.length);
  console.log(`Number of students: ${totalStudents}`);
  for (const [field, group] of Object.entries(studentsByField)) {
    const studentNames = group.map((student) => student.firstname).join(', ');
    console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
  }
};

module.exports = countStudents;
