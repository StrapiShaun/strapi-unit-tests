const fs = require('fs');
const { setupStrapi, teardownStrapi } = require("./helpers/strapi");
const grantPrivilege = require("./helpers/grantPrivilege")


//require('./publicRoute');
require('./authRoute');
//const sum = require('../sum');


beforeEach(async () => {
  await setupStrapi();
  // await grantPrivilege();
});

afterEach(async () => {
  await teardownStrapi();
  
});


it("strapi is defined", () => {
  expect(strapi).toBeDefined();
});

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

