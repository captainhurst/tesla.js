var colors = require('colors');

module.exports = function (app) {

    var tesla = require('../../lib/tesla')(app);

    // global settings
    app.site.domain = "staging.site-name.com";
    app.site.environment = "Staging";
    app.site.url = app.site.protocol + app.site.domain + '/'; // base url

    // directories
    app.site.dir = {
        js : app.site.url + "js/",
        img : app.site.url + "img/",
        css : app.site.url + "css/"
    };

    tesla.log( 'INFO:'.blue + ' ' + app.site.environment + ' config loaded' );

}