var self = require('sdk/self');
var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");

pageMod.PageMod({
  include: "*.tangerine.ca",
  contentScriptFile: [data.url("jquery.min.js"), data.url("contentScript.js")]
});
