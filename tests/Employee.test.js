const Employee = require("../lib/Employee");
const employee = new Employee("Edgar", "42", "noquema555@yahoo.com");

test("test if constructor returns correct values", () => {
    expect(employee.name).toBe("Edgar");
    expect(employee.id).toBe("42");
    expect(employee.email).toBe("noquema555@yahoo.com");
});

test("test if the getName() method returns the employee name", () => {
    expect(employee.getName()).toBe("Edgar");
});

test("test if the getId() method returns the employee ID", () => {
    expect(employee.getId()).toBe("42");
});

test("test if the getEmail() method returns the employee email", () => {
    expect(employee.getEmail()).toBe("noquema555@yahoo.com");
});
