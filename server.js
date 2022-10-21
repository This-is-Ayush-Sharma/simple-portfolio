const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes/routes');

app.set('view engine','ejs');
app.use(express.json());
app.use(cors());
app.use('/',routes);

app.listen(process.env.PORT,()=>{
    console.log(`connected to port ${process.env.PORT}`);
})