const mongoose=require('mongoose');

const credentialSchema=new mongoose.Schema({role:{type:String,trim:true},username:{type:String,trim:true},password:{type:String}},{_id:false});
const applicationSchema=new mongoose.Schema({
  name:{type:String,required:true,trim:true},
  slug:{type:String,required:true,trim:true,unique:true,index:true},
  description:{type:String,default:''},
  businessProblem:{type:String,default:''},
  solutionOverview:{type:String,default:''},
  businessBenefits:{type:[String],default:[]},
  features:{type:[String],default:[]},
  workflow:{type:[String],default:[]},
  category:{type:String,default:''},
  technologies:{type:[String],default:[]},
  logo:{type:String,default:''},
  applicationUrl:{type:String,default:''},
  presentationFile:{url:String,name:String},
  credentials:{type:[credentialSchema],default:[]},
  demoAvailable:{type:Boolean,default:false},
  presentationAvailable:{type:Boolean,default:false},
  credentialsAvailable:{type:Boolean,default:false},
  status:{type:String,enum:['Planned','Active','Archived'],default:'Planned'},
  displayOrder:{type:Number,default:0}
},{timestamps:true});

module.exports=mongoose.model('Application',applicationSchema);
