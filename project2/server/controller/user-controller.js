import User from '../model/User.js'



export const signupUser=async (request,response)=>{
    try {
         // const salt=await bcrypt.genSalt()
        //  const hashedPassword=await bcrypt.hash(request.body.password,10)
     const user=request.body;
     const newUser=new User(user);
     await newUser.save();
     return response.status(200).json({msg:'signup successful'})
    } catch (error) {
     return response.status(500).json({msg:'error while signup the user'})
    }
}