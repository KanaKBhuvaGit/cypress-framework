const { defineConfig } = require("cypress");
const { Client } = require('pg')
// const { downloadFile } = require('cypress-downloadfile/lib/addPlugin');

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    // defaultCommandTimeout: 30000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // on('task', { downloadFile }),

      // Using cypress pg only
      // on("task", {
      //   async connectDB(query) {
      //     const client = new Client({
      //       user: "postgres",
      //       password: "postgres",
      //       host: "localhost",
      //       database: "todo_dev",
      //       ssl: false,
      //       port: 5432
      //     })
      //     await client.connect()
      //     const res = await client.query(query)
      //     await client.end()
      //     return res.rows;
      //   }
      // })



    },
    // "baseUrl": "http://jsonplaceholder.typicode.com",
    "baseUrl": "https://reqres.in/api",
    "projectId": "api-testing",
    "video": false
  },
});
