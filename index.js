const express = require('express')
const application = express();
const port = 3999;
const cors = require('cors')
const bodyParser = require('body-parser');
const AuthenticateRoute = require('./routes/authentication_route')

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



