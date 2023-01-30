const Manager = require("../lib/Manager");

test("tests if we can create an manager object", () => {
    let manager = new Manager("Michael", "69", "michaelgscott@aoi.com", "#1");

    expect(manager.name).toBe("Michael");
    expect(manager.id).toBe("169");
    expect(manager.email).toBe("michaelgscott@aoi.com");
    expect(manager.officeNumber).toBe("#1");
})
