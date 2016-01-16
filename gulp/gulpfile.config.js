'use strict';
var GulpConfig = (function () {
    function gulpConfig() {
        //Got tired of scrolling through all the comments so removed them
        //Don't hurt me AC :-)
        this.source = './src/';
        this.sourceApp = this.source;

        this.tsOutputPath = this.source + '../public/assets/js';
        this.allJavaScript = [this.source + '*.js'];
        this.allTypeScript = this.sourceApp + '/**/*.ts';

        this.typings = '../src/typecript/typings/';
        this.libraryTypeScriptDefinitions = '../src/typecript/typings/**/*.ts';
    }
    return gulpConfig;
})();
module.exports = GulpConfig;
