describe('Read/Write JSON', function () {

    it('Read json file', function () {
        cy.readFile('cypress/fixtures/file-processing/JSON/users.json').then((data) => {
            data.forEach(element => {
                cy.log(element.id)
                cy.log(element.name)
                cy.log(element.username)
                cy.log(element.email)
                cy.log("-----------------")
            });
        })
    });

    it('Write to json file', function () {
        const userData = {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "address": {
              "street": "Kulas Light",
              "suite": "Apt. 556",
              "city": "Gwenborough",
              "zipcode": "92998-3874",
              "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
              }
            },
            "phone": "1-770-736-8031 x56442",
            "website": "hildegard.org",
            "company": {
              "name": "Romaguera-Crona",
              "catchPhrase": "Multi-layered client-server neural-net",
              "bs": "harness real-time e-markets"
            },
          }

        cy.writeFile('cypress/fixtures/file-processing/JSON/users_write.json', userData)
    });

});
