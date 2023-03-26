import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import avater from "../assets/profile.png";
import { usernameValidate } from "../helper/validate";
import styles from "../styles/Username.module.css";

const Recovery = () => {
  const formic = useFormik({
    initialValues: { otp: "" },
   
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
              Enter OTP to recover Password
            </span>
          </div>
          <form onSubmit={formic.handleSubmit} className="py-20">
            <div className="textbox flex items-center flex-col gap-6">
              <div className="input text-center">
                {" "}
                <span className=" py-4 text-sm text-left text-gray-500">
                  Enter 6 digit OTP send to your Email
                </span>
                <input
                  type="text"
                  className={styles.textbox}
                  placeholder="OTP"
                />
              </div>
              <button className={styles.btn} type="submit">
                Recovor
              </button>
            </div>
            <div className="text-center py-4">
              <span className="flex gap-2 justify-center">
                Con't get OTP?
                <button className=" text-red-500">Resend</button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Recovery;
