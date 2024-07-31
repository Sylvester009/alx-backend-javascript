interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};

console.log(director1);

interface printTeacherFunction {
    (firstName: string,
        lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
    return `${firstName.charAt(0)}. ${lastName}`;
}

console.log(printTeacher("John", "Doe"));


interface StudentConstructor {
    new(firstName: string, lastName: string): StudentClass;
}

interface StudentInterface{
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements StudentInterface {
private firstName: string;
private lastName: string;

constructor (firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
}

workOnHomework() {
    return `Currently working`;
}

displayName() {
    return `${this.firstName}`;
}
}

const student = new StudentClass('John', 'Doe');
console.log(student.workOnHomework());
console.log(student.displayName()); 