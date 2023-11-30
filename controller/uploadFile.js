import uploadFileModel from "./../schemas/uploadFile.js";
import db from "./../db/index.js";

export const uploadFile = async (req, res) => {
  const session = await db.startSession();
  session.startTransaction();
  const { title } = req.body;

  try {
    await uploadFileModel.create(
      [
        {
          title,
          file: req?.file?.filename,
        },
      ],
      {
        session: session,
      }
    );

    await session.commitTransaction();
    res.status(200).send("Successfully file uploaded");
  } catch (err) {
    await session.abortTransaction();
    res.status(500).send("upload file failed");
  }

};

export const getFiles=async (req,res)=>{
  try{
    const data=await uploadFileModel.find({})
    res.status(200).send(data)
  }
  catch(err){
    res.status(500).send([])
  }

}
