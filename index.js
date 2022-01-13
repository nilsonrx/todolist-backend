if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config();


}
 

const express = require('express');
const cors = require('cors');
const Conn = require('./conn/index');




const db_url = process.env.DB_URL;
const db_user = process.env.DB_USER;
const db_pass = process.env.DB_PASS;
const db_data = process.env.DB_DATA;

Conn(db_url, db_user, db_pass,db_data);


// const corsOptions = {origin:'http://localhost:3000',
//     optionsSuccessStatus:200,

// } 
const app = express();
app.use (cors())
app.use (express.json())

app.get ("/", (req , res) => {
    res.send('Rodando');
} ) 


const tarefasRouter = require('./routers/routers');
app.use('/tarefa',tarefasRouter);


const PORT = 4000

app.listen(process.env.PORT || PORT, () => console.log(`Servidor Rodando em http://localhost:${PORT}`) )