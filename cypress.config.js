const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const xlsx = require("node-xlsx").default;
const fs = require("fs");
const path = require("path");
const csv = require('@fast-csv/parse')
const { writeToPath } = require('@fast-csv/format');

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    "video": true,
    "specPattern": "cypress/e2e",
    // defaultCommandTimeout: 30000,
    // screenshotOnRunFailure: false,
    setupNodeEvents(on, config) {
      on("task", {
        // Read excel file
        readExcel({ filePath }) {
          return new Promise((resolve, reject) => {
            try {
              const jsonData = xlsx.parse(fs.readFileSync(filePath));
              resolve(jsonData);
            } catch (e) {
              reject(e);
            }
          })
        },
        // Read excel file
        writeExcel({ filePath, sheetName, data }) {
          var buffer = xlsx.build([{ name: sheetName, data: data }]);
          fs.writeFile(filePath, buffer, "binary", function (err) {
            if (err) {
              console.log(err);
            } else {
              console.log("The file was saved!");
            }
          });
          return null;
        },
        // Read csv file
        readCSV({ filePath }) {
          return new Promise(resolve => {
            let dataArray = [];
            csv.parseFile(filePath, { headers: true })
              .on('data', (data) => {
                dataArray.push(data)
              })
              .on('end', () => {
                resolve(dataArray)
              })
          })
        },
        // write csv file
        writeToCSV({ filePath, csvData }) {
          writeToPath(path.resolve(__dirname, filePath), csvData)
          return null;
        }
      });
      
      allureWriter(on, config);
      return config;
    }
  },
  // reporter: 'mochawesome',
  // reporterOptions: {
  //   reportDir: 'cypress/results',
  //   overwrite: false,
  //   html: false,
  //   json: true,
  // },
});