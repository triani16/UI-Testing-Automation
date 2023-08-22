const { defineConfig } = require('cypress') //Download Library dari Cypress

//Defining Lokasi Test Script Automation untuk run
module.exports = defineConfig({
    e2e: {
        specPattern : "cypress/support/e2e",
        supportFile : false,
        reporter: 'reporters/custom.js',
    }
})