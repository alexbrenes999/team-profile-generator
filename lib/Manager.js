const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email)
        this.officeNum = officeNum;
    }

    yourOffNum() {
        return this.officeNum;
    }

    yourRole() {
        return 'Manager';
    }
}

module.exports = Manager;