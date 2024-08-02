export default function createIteratorObject(report) {
  const allEmployees = [];
  
  for (const department in report.allEmployees) {
    if (report.allEmployees.hasOwnProperty(department)) {
      allEmployees.push(...report.allEmployees[department]);
    }
  }

  return allEmployees[Symbol.iterator]();
}
