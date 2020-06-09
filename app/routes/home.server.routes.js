module.exports = function(app){
    var home = require("../controllers/home.server.controllers.js");
    app.get('/',home.render);
}