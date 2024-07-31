interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const firstStudent: Student = {
    firstName: 'Sylvester',
    lastName: 'Samuel',
    age: 23,
    location: 'Nigeria',
};

const secondStudent: Student = {
    firstName: 'Joshua',
    lastName: 'Etim',
    age: 24,
    location: 'Nigeria',
};

const studentsList: Student[] = [firstStudent, secondStudent];

const table = document.createElement('table');
document.body.appendChild(table);

studentsList.forEach(students => {
    table.innerHTML += `
    <tr>
    <td>${students.firstName}</td>
    <td>${students.location}</td>
    </tr>
    `
});