module.exports =
/******/ (function(modules, runtime) { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	__webpack_require__.ab = __dirname + "/";
/******/
/******/ 	// the startup function
/******/ 	function startup() {
/******/ 		// Load entry module and return exports
/******/ 		return __webpack_require__(410);
/******/ 	};
/******/
/******/ 	// run startup
/******/ 	return startup();
/******/ })
/************************************************************************/
/******/ ({

/***/ 410:
/***/ (function(__unusedmodule, __unusedexports, __webpack_require__) {

const core = __webpack_require__(739);
const github = __webpack_require__(646);
const exec = __webpack_require__(449);

try {
  const ENVIRONMENT = core.getInput('environment');
  const CLOUDINARY_CLOUDNAME = core.getInput('cloudinary_cloudname');
  const CLOUDINARY_URL = core.getInput('cloudinary_url');
  const CLOUDINARY_API_KEY = core.getInput('cloudinary_api_key');
  const CLOUDINARY_API_SECRET = core.getInput('cloudinary_api_secret');
  const CLOUDINARY_API_URL = core.getInput('cloudinary_api_url');
  const CLOUDINARY_API_URL_STRING = core.getInput('cloudinary_api_url_string');

  const TEST_USER_EMAIL = core.getInput('test_user_email');
  const TEST_USER_PASSWORD = core.getInput('test_user_password');

  const LOCAL_API_URL = core.getInput('local_api_url');
  const DEV_API_URL = core.getInput('dev_api_url');
  const STAGING_API_URL = core.getInput('staging_api_url');
  const PROD_API_URL = core.getInput('prod_api_url');

  const TEST_GROUP	 = core.getInput('test_group');
  const EXPO_USERNAME	 = core.getInput('expo_username');
  const EXPO_PASSWORD	 = core.getInput('expo_password');
  const FIREBASE_TOKEN	 = core.getInput('firebase_token');
  const FIREBASE_ANDROID_APP_ID	 = core.getInput('firebase_android_app_id');

  exec.exec(`yarn`)
    .then(() => exec.exec('yarn global add expo-cli'))
    .then(() => exec.exec('yarn global add firebase-tools'))
    .then(() => exec.exec(`yarn run expo login -u ${EXPO_USERNAME} -p ${EXPO_PASSWORD}`))
    .then(() => exec.exec('chmod +x ./comands.sh'))
    .then(() => exec.exec(`./comands.sh ${ENVIRONMENT} ${CLOUDINARY_CLOUDNAME} ${CLOUDINARY_URL} ${CLOUDINARY_API_KEY} ${CLOUDINARY_API_SECRET} ${CLOUDINARY_API_URL} ${CLOUDINARY_API_URL_STRING} ${TEST_USER_EMAIL} ${TEST_USER_PASSWORD} ${LOCAL_API_URL} ${DEV_API_URL} ${STAGING_API_URL} ${PROD_API_URL}`))
    // .then(() => exec.exec('yarn build:android'))
    // .then(() => exec.exec('yarn download-build'))
    .then(() => exec.exec(`firebase appdistribution:distribute ./build.apk --app ${FIREBASE_ANDROID_APP_ID} --groups ${TEST_GROUP} --token ${FIREBASE_TOKEN}`))
    .catch(e => core.setFailed(e));
    
} catch (error) {
  core.setFailed(error.message);
}


/***/ }),

/***/ 449:
/***/ (function() {

eval("require")("@actions/exec");


/***/ }),

/***/ 646:
/***/ (function() {

eval("require")("@actions/github");


/***/ }),

/***/ 739:
/***/ (function() {

eval("require")("@actions/core");


/***/ })

/******/ });