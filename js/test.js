const code =  'module.exports = function () {console.log("abc");}';
const codeModule = module._compile(code,'xxx.js');
var codeModule_ = module.exports;
codeModule_();