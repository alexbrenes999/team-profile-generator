const Intern = require("../lib/Intern");

test("tests if we can create an intern object", () => {
    let intern = new Intern("Ken", "1", "runran@gmail.com", "Yale");

    expect(intern.name).toBe("Ken");
    expect(intern.id).toBe("1");
    expect(intern.email).toBe("runran@gmail.com");
    expect(intern.school).toBe("Yale");
})
