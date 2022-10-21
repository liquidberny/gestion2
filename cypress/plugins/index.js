/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

const cucumber = require('cypress-cucumber-preprocessor').default
//const { lighthouse, pa11y, prepareAudit } = require("cypress-audit");
const { lighthouse, prepareAudit } = require('@cypress-audit/lighthouse');
// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  on('file:preprocessor',cucumber())
  const getCompareSnapshotsPlugin = require('cypress-image-diff-js/dist/plugin')
getCompareSnapshotsPlugin(on, config)
on('before:browser:launch', (browser = {}, launchOptions) => {
  prepareAudit(launchOptions)
})

on('task', {
  lighthouse: lighthouse(), // calling the function is important
});
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
}




