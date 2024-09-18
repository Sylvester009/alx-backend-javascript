const fs = require('fs');

function countStudents(path) {
  try {
    // Read the file synchronously
    const data = fs.readFileSync(path, 'utf-8');
    
    // Split the data into rows
    const rows = data.split('\n').filter((row) => row.trim() !== ''); // Exclude empty lines
    
    if (rows.length === 0) {
      console.log('Number of students: 0');
      return;
    }
    
    // Remove the first row (header) and process the rest
    const studentData = rows.slice(1);

    // Initialize object to store students by fields
    const studentsByField = {};

    studentData.forEach((row) => {
      const [firstname, lastname, age, field] = row.split(',');

      // Skip invalid rows with missing data
      if (firstname && field) {
        if (!studentsByField[field]) {
          studentsByField[field] = [];
        }
        studentsByField[field].push(firstname);
      }
    });

    // Get the total number of students
    const totalStudents = Object.values(studentsByField).reduce(
      (sum, students) => sum + students.length,
      0
    );

    // Log the total number of students
    console.log(`Number of students: ${totalStudents}`);

    // Log the number of students and their first names for each field
    for (const field in studentsByField) {
      const studentList = studentsByField[field];
      console.log(
        `Number of students in ${field}: ${studentList.length}. List: ${studentList.join(', ')}`
      );
    }
  } catch (err) {
    // Handle errors (file not found or other issues)
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
