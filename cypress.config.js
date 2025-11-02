import { defineConfig } from 'cypress'
import mochawesome from 'cypress-mochawesome-reporter/plugin.js'

export default defineConfig({
  e2e: {
    baseUrl: 'https://automationexercise.com',
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'cypress/reports/json',
      overwrite: false,
      html: false,
      json: true,
      embeddedScreenshots: true,
      inlineAssets: true,
    },
    setupNodeEvents(on, config) {
      mochawesome(on)
      return config
    },
  },
  video: false, 
})
