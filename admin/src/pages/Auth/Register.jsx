import React, { useState } from "react";
import { IoIosHeart } from "react-icons/io";
import { FaFacebook, FaTwitter, FaGoogle } from "react-icons/fa";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Logo from "../Auth/images/logo-admin.png";
import BG from "../Auth/images/bg-auth-overlay.png";
import { NavLink } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { MdErrorOutline } from "react-icons/md";

const Register = () => {
  const [slide, setSlide] = useState(0);
  const [showPassword, setShowPassword] = useState(false);

  const initialValues = {
    email: "",
    username: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Please Enter Your Email"),
    username: Yup.string().required("Please Enter Your Username"),
    password: Yup.string().required("Please Enter Your Password"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert("Registration successful!");
      setSubmitting(false);
    }, 400);
  };

  const testimonials = [
    {
      quote:
        "Fantastic theme with a ton of options. If you just want the HTML to integrate with your project, then this is the package. You can find the files in the 'dist' folder...no need to install git and all the other stuff the documentation talks about.",
      author: "Abs1981",
      role: "- Skote User",
    },
    {
      quote:
        "If Every Vendor on Envato are as supportive as Themesbrand, Development with be a nice experience. You guys are Wonderful. Keep us the good work.",
      author: "Abs1981",
      role: "- Skote User",
    },
  ];

  return (
    <div>
      <div className="flex min-h-screen flex-col lg:flex-row">
        {/* Left */}
        <div className="lg:w-3/4 w-full bg-[#2e3962] flex items-center justify-center text-white p-6 sm:p-10 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1E33] to-[#2C3154] opacity-80">
            <img
              src={BG}
              alt="Background overlay"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative z-10 text-center max-w-xl flex flex-col items-center justify-end h-full pb-10">
            <h2 className="mb-4 text-xl poppins-medium text-[#556ee6]">
              5k
              <span className="text-[#f6f6f6] poppins-medium">
                + Satisfied clients
              </span>
            </h2>
            <p className="mb-6 text-[#a6b0cf] poppins-regular text-base leading-relaxed">
              "{testimonials[slide].quote}"
            </p>
            <p className="mb-2 text-[#556ee6] text-base poppins-medium">
              {testimonials[slide].author}
            </p>
            <span className="text-sm poppins-medium text-[#a6b0cf]">
              {testimonials[slide].role}
            </span>
            <div className="flex space-x-2 mt-5">
              {[0, 1].map((index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    slide === index ? "bg-blue-400" : "bg-gray-500"
                  }`}
                  onClick={() => setSlide(index)}
                ></button>
              ))}
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="lg:w-1/4 w-full bg-[#222736] p-10 text-white flex flex-col">
          <NavLink to="/" className="w-full flex justify-start mb-10">
            <img src={Logo} alt="logo" className="logo-auth" />
          </NavLink>

          <div className="flex flex-col flex-grow justify-center">
            <h2 className="poppins-medium text-[#556ee6]">Register account</h2>
            <p className="poppins-regular text-xs text-[#c3cbe4] pb-6">
              Get your free Skote account now.
            </p>

            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, errors, touched }) => (
                <Form className="w-full text-[#a6b0cf] space-y-3">
                  {["email", "username", "password"].map((field) => (
                    <div key={field} className="mb-4">
                      <label
                        htmlFor={field}
                        className="text-xs block mb-1 poppins-medium"
                      >
                        {field.charAt(0).toUpperCase() + field.slice(1)}
                      </label>
                      <div className="relative">
                        <Field
                          type={
                            field === "password" && showPassword
                              ? "text"
                              : field === "password"
                                ? "password"
                                : field
                          }
                          name={field}
                          placeholder={`Enter ${field}`}
                          className={`w-full text-xs p-2 bg-[#2a3042] border rounded focus:outline-none text-[#fff] pr-10 ${
                            errors[field] && touched[field]
                              ? "border-[#f8a6a6]"
                              : "border-[#353d55]"
                          }`}
                        />
                        {errors[field] && touched[field] && (
                          <span
                            className={`absolute top-1/2 -translate-y-1/2 text-[#f8a6a6] text-lg ${
                              field === "password" ? "right-10" : "right-2"
                            }`}
                          >
                            <MdErrorOutline />
                          </span>
                        )}
                        {field === "password" && (
                          <button
                            type="button"
                            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? (
                              <AiFillEyeInvisible className="text-xl" />
                            ) : (
                              <AiFillEye className="text-xl" />
                            )}
                          </button>
                        )}
                      </div>
                      <ErrorMessage
                        name={field}
                        component="p"
                        className="text-[#f8a6a6] text-err-auth poppins-regular mt-1"
                      />
                    </div>
                  ))}

                  <p className="text-xs mb-4">
                    By registering you agree to the Skote{" "}
                    <a href="#" className="text-xs text-blue-600">
                      Terms of Use
                    </a>
                  </p>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full text-xs bg-blue-500 hover:bg-blue-600 text-white py-2 rounded disabled:opacity-50"
                  >
                    Register
                  </button>
                </Form>
              )}
            </Formik>

            <div className="text-center">
              <p className="text-sm my-4 poppins-medium">Sign up using</p>
              <div className="flex justify-center space-x-4 mb-6">
                <button className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <FaFacebook className="text-white text-xs" />
                </button>
                <button className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                  <FaTwitter className="text-white text-xs" />
                </button>
                <button className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                  <FaGoogle className="text-white text-xs" />
                </button>
              </div>

              <div>
                <p className="mt-6 text-xs text-center text-[#a6b0cf]">
                  Already have an account?{" "}
                  <NavLink to="/login" className="text-[#556ee6]">
                    Login
                  </NavLink>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center text-[#a6b0cf] text-xs">
            <span>© 2025 Skote. Crafted with</span>{" "}
            <IoIosHeart className="text-red-500 inline mx-1" />{" "}
            <span>by Themesbrand</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
