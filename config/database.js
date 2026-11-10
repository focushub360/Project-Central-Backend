const mongoose=require('mongoose');

module.exports=async()=>{
  if(!process.env.MONGODB_URI)throw new Error('MONGODB_URI is not set. Add it to the deployment environment variables.');
  return mongoose.connect(process.env.MONGODB_URI);
};
