import User from "../model/userModel.js";

export const addUser = async (request, response) => {
  try {
    let exist = await User.findOne({ sub: request.body.sub });
    if (exist) {
      response.status(200).json({ message: "user already exist" });
      return;
    }

    const newUser = new User(request.body);
    await newUser.save();
    response.save(200).json(newUser);
  } catch (error) {
    response.status(500).json(error.message);
  }
};

export const getUser = async (request,response) => {
    try{
        let user=await User.find({});
        response.status(200).json(user)
    }catch(error){
        response.status(500).json(error.message)
    }
};


