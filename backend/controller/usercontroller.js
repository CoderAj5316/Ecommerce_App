const { hashpassword } = require('../middleware/helper');
const Usermodel = require('../models/usermodels');

exports.register = async (req, res) => {
  try {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const phone = req.body.phone;
    const secanswer = req.body.secanswer;
    const address = req.body.address;

    if (!name || !email || !password || !phone || !secanswer || !address) {
      return res.send({ message: "Please Fill All Fields!" });
    }

    const existuser = await Usermodel.findOne({ email });

    if (existuser) {
      res.send({ message: "Already User Have an Account, Please Login"});
      return;
    }

    const newuser = new Usermodel({ name, email, password, phone, secanswer, address });
    

    const usersave = await newuser.save();
    console.log(usersave);
    // res.send(usersave);
    // return;
    res.send({ message: `User Registered Successfully: ${usersave}` });
    return;
  } catch (error) {
    console.error(error);
    res.status(400).send("Registration failed. Please try again.");
  }
};


exports.login=async(req,res)=>
{

    const userEmail=req.body.email;
    const userPassword=req.body.password;


    if(!userEmail || !userPassword)
    {
        return;
    }


    const validUser=await Usermodel.findOne({email:userEmail});
   

    if(validUser)
    {
        const validpassword=validUser.password;
        if(validpassword===userPassword)
        {
            return res.send({message:"Login Success"});
        }
        else
        {
            console.log("invalid credintials");
            return res.send({message:"Enter Valid Email/Password"});
        }
    }
    else
    {
        return res.send({message:"Not Having Existing Account,Please Signup"});
    }

    // if(validUser)
    // {

    // }
}

exports.forgotpassword=async(req,res)=>
{
    const newPassword=req.body.password;
    const secAnswer=req.body.secanswer;
    const email=req.body.email;

    //  res.send({password:newPassword,secAnswer:secAnswer,email:email});

    const validUser=await Usermodel.findOne({email:email});

    if(validUser)
    {
        if(validUser.secanswer===secAnswer)
        {
            const up=await Usermodel.updateMany({email:email},{$set:{password:newPassword}});
            res.send({message:"update success"});
            return;
        }
        else
        {
          res.send({message:"secretAnswer is Wrong"});
          return;
        }
    }
    else
    {
      res.send({message: "User Not Found"});
      return;
    }

     return;
  
}