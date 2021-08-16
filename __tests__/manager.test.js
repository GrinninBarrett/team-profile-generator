const Manager = require('../lib/Manager');

describe("Manager", () => {
    
    it("Should return a Manager instance", () => {
        const newHire = new Manager("Ludwig", 0, "piano@music.com");

        expect(typeof(newHire)).toEqual("object");
    });

    it("Should check for the name given", () => {
        const newHire = new Manager("Mozart", 1, "symphony@vienna.com");

        expect(newHire.getName()).toEqual("Mozart");
    });

    it("Should check for the id given", () => {
        const newHire = new Manager("Tucker", 81, "tucker@hey.com");

        expect(newHire.getID()).toEqual(81);
    });

    it("Should check for the email given", () => {
        const newHire = new Manager("Waldo", 47, "waldo@where.com");

        expect(newHire.getEmail()).toEqual("waldo@where.com");
    });

    it("Should check for the Manager's role", () => {
        const newHire = new Manager("Barack Obama", 44, "barack@pres.com");

        expect(newHire.getRole()).toEqual("Manager");
    });

})