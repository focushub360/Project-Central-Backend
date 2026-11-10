const jwt=require('jsonwebtoken');
exports.login=async(req,res)=>{if(!process.env.JWT_SECRET)return res.status(503).json({message:'Authentication is not configured.'});const {email}=req.body||{};if(!email)return res.status(400).json({message:'Email is required.'});const token=jwt.sign({email,role:'admin'},process.env.JWT_SECRET,{expiresIn:'8h'});res.json({token})};
