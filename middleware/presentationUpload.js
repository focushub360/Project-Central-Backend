const fs=require('fs');const path=require('path');const multer=require('multer');
const destination=path.join(__dirname,'..','uploads','presentations');fs.mkdirSync(destination,{recursive:true});
const storage=multer.diskStorage({destination,filename:(req,file,done)=>done(null,`${Date.now()}-${Math.round(Math.random()*1e9)}${path.extname(file.originalname).toLowerCase()}`)});
module.exports=multer({storage,limits:{fileSize:25*1024*1024},fileFilter:(req,file,done)=>['.ppt','.pptx'].includes(path.extname(file.originalname).toLowerCase())?done(null,true):done(new Error('Only .ppt and .pptx presentation files are allowed.'))});
