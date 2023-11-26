import userModel from "./../schemas/user.js"
import db from "./../db/index.js"

export const createUser=async(req,res)=>{
  const session=await db.startSession();
  session.startTransaction();

  try{
   const userCreate=await userModel.create([
  req.body
  ],
  {
    session:session
  })
   
  await session.commitTransaction()
   res.status(200).send("Successfully created");
  
}
catch(err){
  await session.abortTransaction()
  res.status(500).send("creation failes")
}
}