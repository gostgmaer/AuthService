import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import avater from "../assets/profile.png";
import { usernameValidate } from "../helper/validate";
import styles from "../styles/Username.module.css";

const Login = () => {
  const formic = useFormik({
    initialValues: { username: "" },
    validate: usernameValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center h-screen">
        <div className={styles.glass}>
          <div className="title flex flex-col items-center">
            <h4 className=" text-4xl font-bold">Hello Again!</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              Explore more by connecting with us
            </span>
          </div>
          <form onSubmit={formic.handleSubmit} className="py-1">
            <div className="profile flex justify-center py-4">
              <img className={styles.profile_img} src={avater} alt="Avater" />
            </div>
            <div className="textbox flex items-center flex-col gap-6">
              <input
                {...formic.getFieldProps("username")}
                type="text"
                className={styles.textbox}
                placeholder="Username"
              />
              <button className={styles.btn} type="submit">
                let's go
              </button>
            </div>
            <div className="text-center py-4">
              <span className="flex gap-2 justify-center">
                Not a member?
                <Link className=" text-red-500" to={"./register"}>
                  Register Now
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
