class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    yourInfo() {
        return this.name, this.id, this.email;
    }

    yourRole() {
        return 'Employee';
    }
}

module.exports = Employee;