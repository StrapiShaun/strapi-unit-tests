const fs = require('fs');
const { setupStrapi, cleanupStrapi } = require("./helpers/strapi");

require('./hello');

beforeEach(async () => {
  await setupStrapi();
});

afterEach(async () => {
  await cleanupStrapi();
});

it("strapi is defined", () => {
  expect(strapi).toBeDefined();
});

