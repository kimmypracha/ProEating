module.exports = function(app){
    var home = require("../controllers/home.server.controller.js");
    app.get('/',home.render);
}