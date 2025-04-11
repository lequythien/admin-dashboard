import React from "react";
import bg_img from "../HeaderLeft/images/profile-img.png";
import profile_img from "../HeaderLeft/images/avatar.jpg";
import { FaArrowRight, FaArrowUp } from "react-icons/fa";
import { Box } from "@mui/material";

// UserProfileCard Component
const UserProfileCard = () => {
  return (
    <div className="w-full bg-[#2a3042] rounded-md text-white shadow-lg overflow-hidden font-sans">
      {/* Header */}
      <div className="bg-[#34406b] p-4 pb-8 relative flex flex-col rounded-t-md">
        <h1 className="text-base pb-2 poppins-medium text-[#556ee6] tracking-wide">
          Welcome Back!
        </h1>
        <p className="text-xs text-[#556ee6] tracking-wide">Skote Dashboard</p>
        <img
          src={bg_img}
          alt="Background Illustration"
          className="absolute right-2 top-1 w-36 h-auto md:block hidden"
        />
      </div>

      {/* Main Content */}
      <div className="p-5 flex flex-col md:flex-row items-start md:items-center">
        <div className="relative flex flex-col md:-mt-12 -mt-10">
          <img
            src={profile_img}
            alt="User Avatar"
            className="avt-henry rounded-full border-4 border-[#2a3042] shadow-md ml-2"
          />
          <h2 className="mt-6 mb-2 name-user-chat poppins-medium text-white tracking-wide">
            Henry Price
          </h2>
          <p className="text-xs text-[#c3cbe4] tracking-wide poppins-regular">
            UI/UX Designer
          </p>
        </div>

        <div className="flex flex-col items-start md:items-center md:flex-1 mt-4 md:mt-0">
          <div className="flex flex-col md:flex-row md:space-x-7 mb-4 space-y-4 md:space-y-0">
            <div>
              <p className="text-base poppins-medium tracking-wide mb-2">125</p>
              <p className="text-sm poppins-regular text-[#c3cbe4] tracking-wide">
                Projects
              </p>
            </div>
            <div>
              <p className="text-base poppins-medium tracking-wide mb-2">
                $1245
              </p>
              <p className="text-sm poppins-regular text-[#c3cbe4] tracking-wide">
                Revenue
              </p>
            </div>
          </div>

          <button className="text-view-more bg-[#5C67F2] hover:bg-[#4A55D2] text-white py-2 px-3 rounded-sm flex items-center transition duration-300 ease-in-out text-xs font-medium tracking-wide">
            View More
            <FaArrowRight className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

// MonthlyEarningCard Component
const MonthlyEarningCard = () => {
  const radius = 45;
  const strokeWidth = 10;
  const circumference = 2 * Math.PI * radius;
  const progress = 67;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="w-full bg-[#2a3042] rounded-xl text-white shadow-sm overflow-hidden font-sans p-5">
      <div>
        <h3 className="text-sm font-semibold text-white uppercase mb-6 tracking-wide">
          Monthly Earning
        </h3>
        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
          {/* Column 1: Earning Info */}
          <div className="flex-1 flex flex-col items-start">
            <div className="mb-4">
              <p className="text-xs text-[#c3cbe4] mb-4 tracking-wide">
                This month
              </p>
              <p className="text-2xl mb-2 poppins-medium text-white tracking-wide">
                $34,252
              </p>
              <p className="text-sm mb-4">
                <span className="flex text-green-500 font-medium tracking-wide">
                  12% <FaArrowUp className="ml-1 text-xs" />
                </span>{" "}
                <span className="text-xs text-[#c3cbe4] tracking-wide">
                  From previous period
                </span>
              </p>
            </div>
            {/* View More Button */}
            <button className="text-view-more bg-[#556ee6] hover:bg-[#4A55D2] text-white py-1.5 px-2 rounded-sm flex items-center justify-center transition duration-300 ease-in-out text-xs font-medium tracking-wide">
              View More
              <FaArrowRight className="ml-2" />
            </button>
          </div>

          {/* Column 2: Circular Progress */}
          <div className="flex-1 flex flex-col items-start md:items-center">
            <div className="relative">
              <svg width="120" height="120" className="relative">
                {/* Background Circle */}
                <circle
                  cx="60"
                  cy="60"
                  r={radius}
                  stroke="#2A2F57"
                  strokeWidth={strokeWidth}
                  fill="none"
                />
                {/* Progress Circle */}
                <circle
                  cx="60"
                  cy="60"
                  r={radius}
                  stroke="#5C67F2"
                  strokeWidth={strokeWidth}
                  fill="none"
                  strokeDasharray={strokeDasharray}
                  strokeDashoffset={strokeDashoffset}
                  transform="rotate(90 60 60)"
                />
              </svg>
              {/* Centered Text */}
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <p className="text-lg font-bold text-white tracking-wide">
                  67%
                </p>
              </Box>
            </div>
            <p className="text-sm font-semibold text-[#c3cbe4] text-left md:text-center mt-2 tracking-wide">
              Series A
            </p>
          </div>
        </div>

        {/* Tagline */}
        <p className="text-xs text-[#c3cbe4] tracking-wide">
          We craft digital, graphic and dimensional thinking.
        </p>
      </div>
    </div>
  );
};

// HeaderDBLeft Component
const HeaderDBLeft = () => {
  return (
    <div className="w-full space-y-6">
      <UserProfileCard />
      <MonthlyEarningCard />
    </div>
  );
};

export default HeaderDBLeft;
