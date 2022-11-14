// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

import addContext from 'mochawesome/addContext'
import './commands'

Cypress.on('test:after:run', (test, runnable) => {
  if (test.state === 'failed') {

    let item = runnable
    const nameParts = [runnable.title]

    // Iterate through all parents and grab the titles
    while (item.parent) {
      nameParts.unshift(item.parent.title)
      item = item.parent
    }

    if (runnable.hookName) {
      nameParts.push(`${runnable.hookName} hook`)
    }

    const fullTestName = nameParts
      .filter(Boolean)
      .join(' -- ')
      .replace(/[#\/]/g, '')
    const attemptCount = test.currentRetry ? ` (attempt ${test.currentRetry + 1})` : ''

    addContext({ test }, `screenshots/${Cypress.spec.name}/${fullTestName} (failed)${attemptCount}.png`)
    // addContext({ test }, `videos/${Cypress.spec.name}.mp4`)
  }
})

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
