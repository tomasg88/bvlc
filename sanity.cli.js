/* eslint-disable no-process-env */
var loadEnvConfig = require('@next/env').loadEnvConfig;
var defineCliConfig = require('sanity/cli').defineCliConfig;

var dev = process.env.NODE_ENV !== 'production';
loadEnvConfig(__dirname, dev, { info: function () {}, error: console.error });

var projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
var dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

module.exports = defineCliConfig({ api: { projectId: projectId, dataset: dataset } });
