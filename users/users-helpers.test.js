const { validateUser } = require('./users-helpers.js')

//sent an empty object, we saw the result fail
// sent an object with a username than less than 2 charecters, we verified it faild
// sent an object with a valid username, no password

describe("users hepers", () => {
    describe("validateUser()", () => {
        it('should fail when missing username and password',() => {
            //arrage: setup the world for test
            const invalidUser = {};
            const expected = false;


              // act: execute the sysem under test (sut) => validateUser method
            const actual = validateUser(invalidUser);
        }
                //Assert: we check the result
        expect(actual.isSuccesful).toBe(expected) //matchers
        expect(actual.errors).toHaveLength(2)
    });
    it.todo("should fail if username is an object");
});

