const mongoose = require('mongoose');
const express = require('express')
const uri = "mongodb+srv://jkenzkul:27101999@cluster0.jtsbw.mongodb.net/ecomTest?retryWrites=true&w=majority";
mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true});
const app = express()
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,OPTIONS,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    
    next();
});
app.use(express.json())
app.use(express.urlencoded({extended: true}))
const port = 5050

//route
const AccountRoutes = require('./routes/account')(app)
const ItemRoutes = require('./routes/item')(app)
//

app.listen(port,()=>{
    console.log('my app is running')
})