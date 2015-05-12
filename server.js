var express = require("express"),
    port = process.env.PORT || 3000,
    app = express();

 app.use(express.static("public"));

 app.listen(port, function(){
    console.log("Listening on PORT:"+port);
 });
