const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, gituser) {
        super(name, id, email);
        this.gituser = gituser;
    }

    getGit() {
        return this.gituser;
    }

    yourRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;
