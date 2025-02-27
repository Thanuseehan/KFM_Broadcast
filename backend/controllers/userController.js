import userModel from "../models/usermodel.js";

export const getUserData = async (req, res) =>{

    try{

        const {userId} = req.body;
        const user = await userModel.findById(userId);

        if(!user){ 
            return res.json({ Sucess: false, message: 'User not found'});
            
        }

        res.json({
            Sucess:  true,
            userData: {
                name : user.name,
                isAccountVerified: user.isAccountVerified 


            }


        });




    }catch(error){
        res.json({Sucess: false, message: error.message });
    }

}