import React from "react";

import axios from "axios";
import { type } from "@testing-library/user-event/dist/type";
import { LOGIN_USER_ERROR, LOGIN_USER_LOADING, LOGIN_USER_SUCCESS } from "./UserType";

export const getuser = (obj) => async (dispatch) => {

    console.log("hello jiiii")
    dispatch({type:LOGIN_USER_LOADING})
  
    try{
        let data = await axios.post("http://localhost:4000/user/login",{
            method:"post",
            data:obj,
        
          });

          
   let {message,token,status} =data.data
   console.log(message)

   if(status==1){

          dispatch({type:LOGIN_USER_SUCCESS,payload:token})
     }

     else{
        dispatch({type:LOGIN_USER_ERROR})
     }
    
    }
    
    catch(error){
        dispatch({type:LOGIN_USER_ERROR})

    }

 

};
