const express=require('express');
const cors=require('cors');
const path=require('path');

const app=express();
app.use(cors({origin:true,credentials:true}));
app.use(express.json({limit:'1mb'}));
app.use('/uploads',express.static(path.join(__dirname,'uploads')));

app.get('/api/health',(req,res)=>res.json({status:'ok'}));
app.use('/api/applications',require('./routes/applicationRoutes'));
app.use('/api/credentials',require('./routes/credentialRoutes'));
app.use('/api/auth',require('./routes/authRoutes'));
app.use((req,res)=>res.status(404).json({message:'Route not found.'}));
app.use((error,req,res,next)=>{
  const invalidUpload=error.name==='MulterError'||/Only (image|\.ppt)/i.test(error.message||'');
  res.status(invalidUpload?400:500).json({message:error.message||'Server error.'});
});

module.exports=app;
