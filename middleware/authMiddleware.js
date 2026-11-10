const jwt=require('jsonwebtoken');
module.exports=(req,res,next)=>{const token=req.headers.authorization?.replace(/^Bearer\s+/i,'');if(!token)return res.status(401).json({message:'Authentication is required.'});try{req.user=jwt.verify(token,process.env.JWT_SECRET);next()}catch(error){res.status(401).json({message:'Invalid or expired token.'})}};
