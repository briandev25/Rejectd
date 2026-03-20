require('dotenv').config();
const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

const applicationRoute = require('./routes/applications');

//routes
app.use('/applications',applicationRoute);

app.get("/",(req,res) =>{
     res.send("Welcome Bryan");
});



app.listen(PORT,() =>{
    console.log(`Listening to port: ${PORT}`)
})
