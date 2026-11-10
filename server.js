require('dotenv').config();
require('node:dns').setServers(['8.8.8.8','1.1.1.1']);
const app=require('./app');
const connectDatabase=require('./config/database');

const port=Number(process.env.PORT)||5000;
connectDatabase().then(()=>app.listen(port,()=>console.log(`Focus IT API listening on port ${port}`))).catch(error=>{console.error('Unable to start API:',error.message);process.exit(1)});
