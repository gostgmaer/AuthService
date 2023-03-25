// const { toast } = require("react-hot-toast");
import toast, { Toaster } from 'react-hot-toast';

/** validate username */
/**validate username */

export const usernameValidate = (values) => {
    const error = usernameVerify({},values)
    return error
}

const usernameVerify = (error = {}, values) => {
  if (!values.username) {
    error.username = toast.error("Username Required...!",{duration:1000});
  }else if(values.username.includes("")){
    error.username = toast.error("Invalid Username",{duration:1000});
  }
};
