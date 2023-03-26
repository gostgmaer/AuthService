// const { toast } = require("react-hot-toast");
import toast, { Toaster } from "react-hot-toast";

/** validate username */
/**validate username */

export const usernameValidate = (values) => {
  const error = usernameVerify({}, values);
  return error;
};
export const validatePassword = (values) => {
  const error = verifyPassword({}, values);
  return error;
};

const usernameVerify = (error = {}, values) => {
  if (!values.username) {
    error.username = toast.error("Username Required...!", { duration: 1000 });
  } else if (values.username.includes(" ")) {
    error.username = toast.error("Invalid Username", { duration: 1000 });
  }
};
const verifyPassword = (error = {}, values) => {
  if (!values.password) {
    error.password = toast.error("Password Required...!", { duration: 1000 });
  } else if (values.password.includes(" ")) {
    error.password = toast.error("Should not Include a space", {
      duration: 1000,
    });
  } else if (values.password.length < 4) {
    error.password = toast.error(
      " Password should be more then 4 charecter Long",
      { duration: 1000 }
    );
  }
};

export const resetPasswordValidation = async (values) => {
  const error = verifyPassword({}, values);
  if (values.password !== values.cnf_password) {
    error.exist = toast.error("Password Not Match", { duration: 1000 });
  }

  return error;
};
function emailVerify(error = {}, values) {
  if (!values.email) {
    error.email = toast.error("Email Required...!");
  } else if (values.email.includes(" ")) {
    error.email = toast.error("Wrong Email...!");
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    error.email = toast.error("Invalid email address...!");
  }

  return error;
}

export async function registerValidation(values) {
  const errors = usernameVerify({}, values);
  verifyPassword(errors, values);
  emailVerify(errors, values);

  return errors;
}

export async function profileValidation(values){
  const errors = emailVerify({}, values);
  return errors;
}

