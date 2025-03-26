import React, { useState } from "react";
import { IoIosHeart } from "react-icons/io";
import { FaFacebook, FaTwitter, FaGoogle } from "react-icons/fa";
import Logo from "../Auth/images/logo-admin.png";
import BG from "../Auth/images/bg-auth-overlay.png";
import { NavLink } from "react-router-dom";

const Auth = () => {
  const [slide, setSlide] = useState(0);
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: value.trim() ? "" : prev[name] }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    if (!formData[name].trim()) {
      setErrors((prev) => ({
        ...prev,
        [name]: `Please Enter Your ${
          name === "Username"
            ? "Username"
            : name === "Email"
            ? "Email"
            : "Password"
        }`,
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key].trim()) {
        newErrors[key] = `This field is required: ${key}`;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm())
      alert(isLogin ? "Login successful!" : "Registration successful!");
  };

  const inputFields = isLogin
    ? ["username", "password"]
    : ["email", "username", "password"];

  const testimonials = [
    {
      quote:
        "Fantastic theme with a ton of options. If you just want the HTML to integrate with your project, then this is the package...",
      author: "Abs1981",
      role: "- Skote User",
    },
    {
      quote:
        "The design quality is excellent, and the support team is super helpful. Highly recommended!",
      author: "Abs1981",
      role: "- Skote User",
    },
  ];

  return (
    <div>
      <div className="flex min-h-screen flex-col lg:flex-row">
        {/* Left */}
        <div className="lg:w-3/4 w-full bg-[#1A1E33] flex items-center justify-center text-white p-6 sm:p-10 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1E33] to-[#2C3154] opacity-80">
            <img
              src={BG}
              alt="Background overlay"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative z-10 text-center max-w-xl flex flex-col items-center justify-end h-full pb-10">
            <h2 className="text-3xl font-bold text-blue-400">
              5k+ Satisfied clients
            </h2>
            <p className="mt-4 text-gray-300 text-lg leading-relaxed">
              <span className="text-4xl text-gray-300 mr-1">"</span>
              {testimonials[slide].quote}
            </p>
            <p className="mt-3 text-blue-400 text-lg">
              {testimonials[slide].author}
            </p>
            <span className="text-sm text-gray-400">
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
        <div className="lg:w-1/4 w-full bg-[#16192A] p-10 text-white flex flex-col">
          {/* Logo */}
          <NavLink to="/" className="w-full flex justify-start mb-10">
            <img src={Logo} alt="logo" className="w-20" />
          </NavLink>

          {/* Form Container */}
          <div className="flex flex-col flex-grow justify-center">
            <h2 className="register-h2 text-[#556ee6]">
              {isLogin ? "Welcome Back!" : "Register account"}
            </h2>
            <p
              className="register-p text-[#c3cbe4] pb-6"
            >
              {isLogin
                ? "Sign in to continue to Skote."
                : "Get your free Skote account now."}
            </p>
            <form onSubmit={handleSubmit} className="w-full text-[#c3cbe4] space-y-3">
              {inputFields.map((field) => (
                <div key={field} className="mb-4">
                  <label className="text-base block mb-1">
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  <input
                    type={field === "password" ? "password" : "text"}
                    name={field}
                    placeholder={`Enter ${field}`}
                    value={formData[field]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full p-2 bg-[#1E223A] border rounded focus:outline-none text-gray-300 ${
                      errors[field] && touched[field]
                        ? "border-red-500"
                        : "border-gray-600 focus:border-blue-400"
                    }`}
                  />
                  {errors[field] && touched[field] && (
                    <p className="text-red-500 text-sm mt-1">{errors[field]}</p>
                  )}
                </div>
              ))}

              {/* Additional Elements for Login Form */}
              {isLogin && (
                <div className="flex justify-between items-center mb-4">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm text-[#a6b0cf]">Remember me</span>
                  </label>
                </div>
              )}

              {/* Terms of Use for Registration Form */}
              {!isLogin && (
                <p className="text-sm mb-4">
                  By registering you agree to the Skote{" "}
                  <a href="#" className="text-blue-600">
                    Terms of Use
                  </a>
                </p>
              )}

              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded">
                {isLogin ? "Log In" : "Register"}
              </button>
            </form>

            {/* Social Media Buttons */}
            <div className="text-center">
              <p className="text-sm my-4 font-medium">
                Sign {isLogin ? "in with" : "up using"}
              </p>
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
                <p className="mt-6 text-center text-[#a6b0cf]">
                  {isLogin
                    ? "Don't have an account?"
                    : "Already have an account?"}
                  <span
                    className="text-[#556ee6] cursor-pointer"
                    onClick={() => setIsLogin(!isLogin)}
                  >
                    {isLogin ? " Signup now" : " Login"}
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-5 text-[#a6b0cf] text-sm flex justify-center items-center">
            <span>© 2025 Skote. Crafted with</span>
            <IoIosHeart className="text-red-500 mx-1" />
            <span>by Themesbrand</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
