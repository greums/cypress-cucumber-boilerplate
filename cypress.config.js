const { defineConfig } = require('cypress')
const cucumber = require('cypress-cucumber-preprocessor').default
const fs = require('fs')


module.exports = defineConfig({
  env: {
    TAGS: 'not @ignore',
  },
  projectId: 'cypress-cucumber-boilerplate',
  defaultCommandTimeout: 15000,
  chromeWebSecurity: false,
  userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.60 Safari/537.36',
  video: false,
  videoUploadOnPasses: false,
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'mocha-junit-reporter, mochawesome',
    mochaJunitReporterReporterOptions: {
      mochaFile: './cypress/results/junit/results-[hash].xml',
      testCaseSwitchClassnameAndName: true,
    },
    mochawesomeReporterOptions: {
      reportDir: './cypress/results/mochawesome',
      overwrite: false,
      html: false,
      json: true,
      timestamp: 'mmddyyyy_HHMMss',
    },
  },
  retries: {
    runMode: 2,
    openMode: 0,
  },
  e2e: {
    setupNodeEvents(on, config) {

      on('file:preprocessor', cucumber())

      on('after:screenshot', (details) => {

        const newPath = details.path.replace("#", "")

        return new Promise((resolve, reject) => {
          // fs.rename moves the file to the existing directory 'new/path/to'
          // and renames the image to 'screenshot.png'
          fs.rename(details.path, newPath, (err) => {
            if (err) return reject(err)

            // because we renamed and moved the image, resolve with the new path
            // so it is accurate in the test results
            resolve({ path: newPath })
          })
        })
      })
    },
    specPattern: 'cypress/e2e/**/*.{feature,features,spec.js}',
  },
})
