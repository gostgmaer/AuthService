import React, { useState } from "react";
import avatar from "../assets/profile.png";
import toast, { Toaster } from "react-hot-toast";
import { useFormik } from "formik";

import { Link, useNavigate } from "react-router-dom";

import styles from "../styles/Username.module.css";
import extend from "../styles/Profile.module.css";
import { profileValidation } from "../helper/validate";
import { convertToBase64 } from "../helper/convirt";
const NotFound = () => {
  return (
    <div className="container mx-auto">
   

      <div className="flex justify-center items-center h-screen">
        <div
          className={`${styles.glass} ${extend.glass} mt-5 mb-5`}
          style={{ width: "45%", paddingTop: "2em" }}
        >
          <div className="title flex flex-col gap-10 items-center">
            <h4 className="text-5xl font-bold">Page Not Found</h4>
            <Link to={'/'} className=" bg-slate-500 py-3 rounded px-10 text-xl text-center text-gray-100">
              Back to Homepage
            </Link>
          </div>

      
        </div>
      </div>
    </div>
  )
}

export default NotFound