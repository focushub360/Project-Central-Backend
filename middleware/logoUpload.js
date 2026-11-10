const fs=require('fs');const path=require('path');const multer=require('multer');
const destination=path.join(__dirname,'..','uploads','logos');fs.mkdirSync(destination,{recursive:true});
const storage=multer.diskStorage({destination,filename:(req,file,done)=>done(null,`${Date.now()}-${Math.round(Math.random()*1e9)}${path.extname(file.originalname).toLowerCase()}`)});
module.exports=multer({storage,limits:{fileSize:5*1024*1024},fileFilter:(req,file,done)=>file.mimetype&&file.mimetype.startsWith('image/')?done(null,true):done(new Error('Only image files are allowed for application logos.'))});
