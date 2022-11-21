 'use strict'
const cors = require('cors');
const authRoutes = require('./auth/auth.routes');
const express = require("express")
const propeties = require('./config/propeties');
const DB=require('./config/db');
//init DB
DB();

const app =express();
const router = express.Router();

const bodyParser = require('body-parser');
const bodyParserJSON = bodyParser.json;
const bodyParserURLEncoded = bodyParser.urlencoded({extended: true});

app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);

app.use(cors());

app.use('/api', router);
authRoutes(router);
router.get('/',(req, res) => {
   res.send('Hello from home'); 
});
app.use(router);
app.listen(propeties.PORT, ()=> console.log(`Server running on port ${propeties.PORT}`)); 