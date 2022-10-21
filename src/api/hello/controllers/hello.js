'use strict';

/**
 * hello controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::hello.hello',  {
async find(ctx, next) {
    // called by GET /hello
    ctx.body = 'Hello World!'; // we could also send a JSON
  },

});
