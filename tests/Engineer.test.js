const Engineer = require("../lib/Engineer");

test("tests if we can create an engineer object", () => {
    let engineer = new Engineer("Fetty", "1738", "remyboys@hotmail.com", "fettywapify");

    expect(engineer.name).toBe("Fetty");
    expect(engineer.id).toBe("1738");
    expect(engineer.email).toBe("remyboys@hotmail.com");
    expect(engineer.github).toBe("fettywapify")
})
