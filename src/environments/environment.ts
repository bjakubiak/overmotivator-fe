// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

// quick and dirty from http://stackoverflow.com/questions/31173738/typescript-getting-error-ts2304-cannot-find-name-require
declare var require: any;
var config = require('../../config.json'); 

export const environment = {
  production: false,
  appId: config.appId,
  serverUrl: config.serverUrl
};
