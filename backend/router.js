const router = require("express").Router();
const USER_MODEL = require("./src/Database/Models/userModel")

router.post("/signup", async (req, res) => {
 try {
  // const {
  //   firstName,
  //   lastName,
  //   email,
  //   age,
  //   password
  // } = req.body
  console.log("this is req body",req.body)
  const saveUser = new USER_MODEL(req.body);
  const response =await saveUser.save();
      console.log("this is response ",response)
    console.log("login page has been called")
    res.send({ response: "user successfully saved" }).status(200);
 }catch(error){
  console.log("this is error ",error)
  res.send({ response: "error while saving data" }).status(400);

 }
  });


  router.post("/login", async (req, res) => {
    try {
     const {
       email,
       password
     } = req.body
      
     const response=await USER_MODEL.find({email: email});
     console.log("data is ",response)
     if(!response || response.length===0)
     {
     return res.send({success:false,response:"failed! no data found"}).status(200)
     }
     let isSame=true
     response[0].password.forEach((currImg,imgIndex) =>{
      currImg.forEach((currBox,boxIndex) =>{
          if(password[imgIndex][boxIndex] !== currBox) isSame=false;
      })
     })
     console.log("thi sis ",isSame)
     if(!isSame) return res.send({success:false,response:"failed! password is incorrect"}).status(200)

       res.send({ success:true, response: "user logged In!" }).status(200);
    }catch(error){
     console.log("this is error ",error)
     res.send({ response: "error while saving data" }).status(400);
   
    }
     });
  module.exports = router;