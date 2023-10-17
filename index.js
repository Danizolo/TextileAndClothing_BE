/**
    * @description      : 
    * @author           : DHANUSH
    * @group            : 
    * @created          : 14/10/2023 - 22:41:03
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 14/10/2023
    * - Author          : DHANUSH
    * - Modification    : 
**/
const express = require('express')
const application = express();
const port = 3999;
const cors = require('cors')
require("dotenv").config();
const bodyParser = require('body-parser');
const AuthenticateRoute = require('./routes/authentication_route')
const ProductRoute = require('./routes/product_route')

application.use(cors({
    origin: 'http://localhost:3000'
}));

application.use(bodyParser.json());



application.listen(port, () => {
    console.log("Application running successfully on port " + port);
})

application.get('/' , (req, res) => {
    res.send('Hello world')
});
application.use("/api", AuthenticateRoute);
application.use("/users", ProductRoute);




