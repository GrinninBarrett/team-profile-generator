const Engineer = require('../lib/Engineer');

// Tests the Engineer subclass based on various parameters
describe("Engineer", () => {
    
    it("Should return an Engineer instance", () => {
        const newHire = new Engineer("Ludwig", 0, "piano@music.com");

        expect(typeof(newHire)).toEqual("object");
    });

    it("Should check for the name given", () => {
        const newHire = new Engineer("Mozart", 1, "symphony@vienna.com");

        expect(newHire.getName()).toEqual("Mozart");
    });

    it("Should check for the id given", () => {
        const newHire = new Engineer("Tucker", 81, "tucker@hey.com");

        expect(newHire.getID()).toEqual(81);
    });

    it("Should check for the email given", () => {
        const newHire = new Engineer("Waldo", 47, "waldo@where.com");

        expect(newHire.getEmail()).toEqual("waldo@where.com");
    });

    it("Should check for the Engineer's role", () => {
        const newHire = new Engineer("Barack Obama", 44, "barack@pres.com");

        expect(newHire.getRole()).toEqual("Engineer");
    });

})