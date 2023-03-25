const { defineConfig } = require("cypress");
const { Client } = require('pg')

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    "video": false,
    // defaultCommandTimeout: 100000,
    setupNodeEvents(on, config) { 
      // implement node event listeners here
      // on('task', { downloadFile }),
      
      on("task", {
        async connectDB(query) {
          const client = new Client({
            user: "postgres",
            password: "postgres",
            host: "localhost",
            database: "todo_dev",
            ssl: false,
            port: 5432
          })
          await client.connect()
          const res = await client.query(query)
          await client.end()
          return res.rows;
        }
      })
    }
  },
});
