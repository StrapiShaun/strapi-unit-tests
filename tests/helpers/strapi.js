const Strapi = require("@strapi/strapi");
const fs = require("fs");
const request = require('supertest');
const port = process.env.NODE_ENV === 'test' ? 3001 : 3000;

let instance;

async function setupStrapi() {
  if (!instance) {
    await Strapi().load();
    instance = strapi;
    
    await instance.server.mount();
  }
  return instance;
}


async function teardownStrapi() {
  const dbSettings = strapi.config.get("database.connection");

  //close server to release the db-file
  await strapi.server.httpServer.close();

  // close the connection to the database before deletion
  await strapi.db.connection.destroy(); 
  

  //delete test database after all tests have completed
  if (dbSettings && dbSettings.connection && dbSettings.connection.filename) {
    const tmpDbFile = dbSettings.connection.filename;
    if (fs.existsSync(tmpDbFile)) {
      fs.unlinkSync(tmpDbFile);
    }
  }
}

//new code:
//async function destroySqlite()


module.exports = { setupStrapi, teardownStrapi };


