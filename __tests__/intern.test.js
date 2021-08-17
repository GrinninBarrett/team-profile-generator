const Intern = require('../lib/Intern');

// Tests the Intern subclass based on various parameters
describe("Intern", () => {
    
    it("Should return an Intern instance", () => {
        const newHire = new Intern("Ludwig", 0, "piano@music.com");

        expect(typeof(newHire)).toEqual("object");
    });

    it("Should check for the name given", () => {
        const newHire = new Intern("Mozart", 1, "symphony@vienna.com");

        expect(newHire.getName()).toEqual("Mozart");
    });

    it("Should check for the id given", () => {
        const newHire = new Intern("Tucker", 81, "tucker@hey.com");

        expect(newHire.getID()).toEqual(81);
    });

    it("Should check for the email given", () => {
        const newHire = new Intern("Waldo", 47, "waldo@where.com");

        expect(newHire.getEmail()).toEqual("waldo@where.com");
    });

    it("Should check for the Intern's role", () => {
        const newHire = new Intern("Barack Obama", 44, "barack@pres.com");

        expect(newHire.getRole()).toEqual("Intern");
    });

})