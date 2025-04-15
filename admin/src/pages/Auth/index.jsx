// import React, { useState } from "react";
// import { IoIosHeart } from "react-icons/io";
// import { FaFacebook, FaTwitter, FaGoogle } from "react-icons/fa";
// import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"; // Thêm icon mắt
// import Logo from "../Auth/images/logo-admin.png";
// import logoDark from "../Auth/images/logo-dark.png";
// import BG from "../Auth/images/bg-auth-overlay.png";
// import { NavLink } from "react-router-dom";

// const Auth = () => {
//   const [slide, setSlide] = useState(0);
//   const [isLogin, setIsLogin] = useState(true);
//   const [formData, setFormData] = useState({
//     email: "",
//     username: "",
//     password: "",
//   });
//   const [errors, setErrors] = useState({});
//   const [touched, setTouched] = useState({});
//   const [showPassword, setShowPassword] = useState(false); // Thêm state để toggle password

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     setErrors((prev) => ({ ...prev, [name]: value.trim() ? "" : prev[name] }));
//   };

//   const handleBlur = (e) => {
//     const { name } = e.target;
//     setTouched((prev) => ({ ...prev, [name]: true }));
//     if (!formData[name].trim()) {
//       setErrors((prev) => ({
//         ...prev,
//         [name]: `Please Enter Your ${
//           name === "Username"
//             ? "Username"
//             : name === "Email"
//               ? "Email"
//               : "Password"
//         }`,
//       }));
//     }
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     Object.keys(formData).forEach((key) => {
//       if (!formData[key].trim()) {
//         newErrors[key] = `This field is required: ${key}`;
//       }
//     });
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm())
//       alert(isLogin ? "Login successful!" : "Registration successful!");
//   };

//   const inputFields = isLogin
//     ? ["username", "password"]
//     : ["email", "username", "password"];

//   const testimonials = [
//     {
//       quote:
//         "Fantastic theme with a ton of options. If you just want the HTML to integrate with your project, then this is the package. You can find the files in the 'dist‘ folder...no need to install git and all the other stuff the documentation talks about.",
//       author: "Abs1981",
//       role: "- Skote User",
//     },
//     {
//       quote:
//         "If Every Vendor on Envato are as supportive as Themesbrand, Development with be a nice experience. You guys are Wonderful. Keep us the good work.",
//       author: "Abs1981",
//       role: "- Skote User",
//     },
//   ];

//   return (
//     <div>
//       <div className="flex min-h-screen flex-col lg:flex-row">
//         {/* Left */}
//         <div className="lg:w-3/4 w-full bg-[#2e3962] flex items-center justify-center text-white p-6 sm:p-10 relative">
//           <div className="absolute inset-0 bg-gradient-to-r from-[#1A1E33] to-[#2C3154] opacity-80">
//             <img
//               src={BG}
//               alt="Background overlay"
//               className="w-full h-full object-cover"
//             />
//           </div>

//           <div className="relative z-10 text-center max-w-xl flex flex-col items-center justify-end h-full pb-10">
//             <h2 className="mb-4 text-xl poppins-medium text-[#556ee6]">
//               5k
//               <span className="text-[#f6f6f6] poppins-medium">
//                 + Satisfied clients
//               </span>
//             </h2>
//             <p className="mb-6 text-[#a6b0cf] poppins-regular text-base leading-relaxed">
//               "{testimonials[slide].quote}"
//             </p>
//             <p className="mb-2 text-[#556ee6] text-base poppins-medium">
//               {testimonials[slide].author}
//             </p>
//             <span className="text-sm poppins-medium text-[#a6b0cf]">
//               {testimonials[slide].role}
//             </span>
//             <div className="flex space-x-2 mt-5">
//               {[0, 1].map((index) => (
//                 <button
//                   key={index}
//                   className={`w-2 h-2 rounded-full ${
//                     slide === index ? "bg-blue-400" : "bg-gray-500"
//                   }`}
//                   onClick={() => setSlide(index)}
//                 ></button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Right */}
//         <div className="lg:w-1/4 w-full bg-[#222736] p-10 text-white flex flex-col">
//           <NavLink to="/" className="w-full flex justify-start mb-10">
//             <img
//               src={isLogin ? logoDark : Logo}
//               alt="logo"
//               className="logo-auth"
//             />
//           </NavLink>

//           <div className="flex flex-col flex-grow justify-center">
//             <h2 className="poppins-medium text-[#556ee6]">
//               {isLogin ? "Welcome Back!" : "Register account"}
//             </h2>
//             <p className="poppins-regular text-xs text-[#c3cbe4] pb-6">
//               {isLogin
//                 ? "Sign in to continue to Skote."
//                 : "Get your free Skote account now."}
//             </p>
//             <form
//               onSubmit={handleSubmit}
//               className="w-full text-[#c3cbe4] space-y-3"
//             >
//               {inputFields.map((field) => (
//                 <div key={field} className="mb-4">
//                   <label className="text-xs block mb-1 poppins-medium">
//                     {field.charAt(0).toUpperCase() + field.slice(1)}
//                   </label>
//                   <div className="relative">
//                     <input
//                       type={
//                         field === "password" && showPassword
//                           ? "text"
//                           : field === "password"
//                             ? "password"
//                             : "text"
//                       }
//                       name={field}
//                       placeholder={`Enter ${field}`}
//                       value={formData[field]}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       className={`w-full text-xs p-2 bg-[#1E223A] border rounded focus:outline-none text-gray-300 pr-10 ${
//                         errors[field] && touched[field]
//                           ? "border-red-500"
//                           : "border-gray-600 focus:border-blue-400"
//                       }`}
//                     />
//                     {field === "password" && (
//                       <button
//                         type="button"
//                         className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400"
//                         onClick={() => setShowPassword(!showPassword)}
//                       >
//                         {showPassword ? (
//                           <AiFillEyeInvisible className="text-xl" />
//                         ) : (
//                           <AiFillEye className="text-xl" />
//                         )}
//                       </button>
//                     )}
//                   </div>
//                   {errors[field] && touched[field] && (
//                     <p className="text-[#f8a6a6] text-err-auth poppins-regular mt-1">
//                       {errors[field]}
//                     </p>
//                   )}
//                 </div>
//               ))}

//               {/* Additional Elements for Login Form */}
//               {isLogin && (
//                 <div className="flex justify-between items-center mb-4">
//                   <label className="flex items-center">
//                     <input type="checkbox" className="mr-2" />
//                     <span className="text-xs poppins-medium text-[#a6b0cf]">
//                       Remember me
//                     </span>
//                   </label>
//                 </div>
//               )}

//               {/* Terms of Use for Registration Form */}
//               {!isLogin && (
//                 <p className="text-xs mb-4">
//                   By registering you agree to the Skote{" "}
//                   <a href="#" className="text-xs text-blue-600">
//                     Terms of Use
//                   </a>
//                 </p>
//               )}

//               <button className="w-full text-xs bg-blue-500 hover:bg-blue-600 text-white py-2 rounded">
//                 {isLogin ? "Log In" : "Register"}
//               </button>
//             </form>

//             <div className="text-center">
//               <p className="text-sm my-4 poppins-medium">
//                 Sign {isLogin ? "in with" : "up using"}
//               </p>
//               <div className="flex justify-center space-x-4 mb-6">
//                 <button className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
//                   <FaFacebook className="text-white text-xs" />
//                 </button>
//                 <button className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
//                   <FaTwitter className="text-white text-xs" />
//                 </button>
//                 <button className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
//                   <FaGoogle className="text-white text-xs" />
//                 </button>
//               </div>

//               <div>
//                 <p className="mt-6 text-xs text-center text-[#a6b0cf]">
//                   {isLogin
//                     ? "Don't have an account?"
//                     : "Already have an account?"}
//                   <span
//                     className="text-[#556ee6] cursor-pointer"
//                     onClick={() => setIsLogin(!isLogin)}
//                   >
//                     {isLogin ? " Signup now" : " Login"}
//                   </span>
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="mt-8 text-center text-[#a6b0cf] text-xs">
//             <span>© 2025 Skote. Crafted with</span>{" "}
//             <IoIosHeart className="text-red-500 inline mx-1" />{" "}
//             <span>by Themesbrand</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Auth;
