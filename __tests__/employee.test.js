const Employee = require('../lib/Employee');

// Tests the Employee class based on various parameters
describe("Employee", () => {
    
    it("Should return an Employee instance", () => {
        const newHire = new Employee("Ludwig", 0, "piano@music.com");

        expect(typeof(newHire)).toEqual("object");
    });

    it("Should check for the name given", () => {
        const newHire = new Employee("Mozart", 1, "symphony@vienna.com");

        expect(newHire.getName()).toEqual("Mozart");
    });

    it("Should check for the id given", () => {
        const newHire = new Employee("Tucker", 81, "tucker@hey.com");

        expect(newHire.getID()).toEqual(81);
    });

    it("Should check for the email given", () => {
        const newHire = new Employee("Waldo", 47, "waldo@where.com");

        expect(newHire.getEmail()).toEqual("waldo@where.com");
    });

    it("Should check for the employee's role", () => {
        const newHire = new Employee("Barack Obama", 44, "barack@pres.com");

        expect(newHire.getRole()).toEqual("Employee");
    });

})
