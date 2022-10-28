const request = require('supertest');

it('returns 204 from /_health', async () => {
  await request(strapi.server.httpServer)
.get('/_health')
.expect(204)
});


it("should return hello world", async () => {
  await request(strapi.server.httpServer)
    .get("/api/hellos")
    .expect(200) // Expect response http code 200
    .then((data) => {
      expect(data.text).toBe("Hello World!"); // expect the response text
    
    });
  });
    
   
