const { defineConfig } = require("cypress")

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    BASE_URL: 'https://fundingsocieties.com/',
    API_BASE_URL: 'https://reqres.in/'
  }
})
