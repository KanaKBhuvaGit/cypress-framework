const TestFilters = (givenTags: any, runTest: any) => {
    if (Cypress.env('tags')) {
      const tags = Cypress.env('tags').split(',')
      const isFound = givenTags.some((givenTag: any) => tags.includes(givenTag))
 
      if (isFound) {
        runTest()
      }
    } else {
      runTest()
    }
  };
 
  export default TestFilters