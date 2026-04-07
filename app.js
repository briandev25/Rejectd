import applicationRoute from './routes/applications.js';
import express from 'express';
import 'dotenv/config';
import cors from 'cors';




const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors())




//routes
app.use('/applications',applicationRoute);

app.get("/",(req,res) =>{
     res.send("Welcome Bryan");
});



app.listen(PORT,() =>{
    console.log(`Listening to port: ${PORT}`)
})
