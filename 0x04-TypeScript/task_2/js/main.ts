interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
};

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

class Director implements DirectorInterface {
    workFromHome() {
        return `Working from home`;
    }
    getCoffeeBreak() {
        return `Getting a coffee break`;
    }

    workDirectorTasks() {
        return `Getting to director tasks`;
    }
}

class Teacher implements TeacherInterface {
    workFromHome() {
        return `Cannot work from home`;
    }
    getCoffeeBreak() {
        return `Cannot have a break`;
    }

    workTeacherTasks() {
        return `Getting to work`;
    }
}

const createEmployee = (salary: string | number): Director | Teacher => {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    } else {
        return new Director();
    }
}

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));


const isDirector = (employee: DirectorInterface | TeacherInterface): employee is Director => {
    return employee instanceof Director;
}

const executeWork = (employee: DirectorInterface | TeacherInterface) => {
    if (isDirector(employee)) {
        console.log(employee.workDirectorTasks());
    } else {
        console.log(employee.workTeacherTasks());
    }
}

executeWork(new Director());
executeWork(new Teacher());

type Subjects = 'Math' | 'History';

const teachClass = (todayClass: Subjects) => {
    if (todayClass === 'Math') {
        return `Teaching Math`;
    } else if (todayClass === 'History') {
        return `Teaching History`;
    }
}

console.log(teachClass('Math')); 
console.log(teachClass('History'));