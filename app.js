require('dotenv').config();
const express = require('express');
const cors = require('cors')

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors())


const applicationRoute = require('./routes/applications');

//routes
app.use('/applications',applicationRoute);

app.get("/",(req,res) =>{
     res.send("Welcome Bryan");
});



app.listen(PORT,() =>{
    console.log(`Listening to port: ${PORT}`)
})
