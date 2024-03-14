const path = require('path');
require("dotenv").config()
require("./config/database")
const express = require("express")
const app = express()
const port = 3000 
app.listen(port,()=>{
    console.log("server started")
})
app.use(express.json())
app.use(express.static(path.join(__dirname, 'build')));
// Check if token and create req.auth.user
app.use(require('./config/checkToken'));

// Put API routes here, before the "catch all" route
app.use('/api/users', require('./routes/api/users'));
// Protect the API routes below from anonymous users
const ensureLoggedIn = require('./config/ensureLoggedIn');
app.use('/api/items', ensureLoggedIn, require('./routes/api/items'));
app.use('/api/orders', ensureLoggedIn, require('./routes/api/orders'));
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });