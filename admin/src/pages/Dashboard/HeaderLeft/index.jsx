import React from "react";
import bg_img from "../HeaderLeft/images/profile-img.png";
import profile_img from "../HeaderLeft/images/avatar.jpg";
import { FaArrowRight } from "react-icons/fa";
import { Box } from "@mui/material";

// UserProfileCard Component
const UserProfileCard = () => {
  return (
    <div className="w-full bg-[#2a3042] rounded-xl text-white shadow-lg overflow-hidden font-sans">
      {/* Header */}
      <div className="bg-[#2A2F57] p-5 py-8 relative flex flex-col rounded-t-xl">
        <h1 className="text-lg font-semibold text-[#556ee6] tracking-wide">
          Welcome Back!
        </h1>
        <p className="text-sm text-[#556ee6] tracking-wide">Skote Dashboard</p>
        <img
          src={bg_img}
          alt="Background Illustration"
          className="absolute right-2 top-3 w-36 h-auto md:block hidden" // Hide on mobile
        />
      </div>

      {/* Main Content */}
      <div className="p-5 flex flex-col md:flex-row items-start md:items-center">
        <div className="relative flex flex-col -mt-20 ml-2">
          <img
            src={profile_img}
            alt="User Avatar"
            className="w-16 h-16 rounded-full border-4 border-[#2a3042] shadow-md ml-4"
          />
          <h2 className="mt-2 text-lg font-semibold text-white tracking-wide">
            Henry Price
          </h2>
          <p className="text-sm text-[#c3cbe4] tracking-wide">UI/UX Designer</p>
        </div>

        <div className="flex flex-col items-start md:items-center md:flex-1 mt-4 md:mt-0">
          <div className="flex flex-col md:flex-row md:space-x-7 mb-4 space-y-4 md:space-y-0">
            <div>
              <p className="text-base font-bold tracking-wide mb-2">125</p>
              <p className="text-sm text-[#c3cbe4] tracking-wide">Projects</p>
            </div>
            <div>
              <p className="text-base font-bold tracking-wide mb-2">$1245</p>
              <p className="text-sm text-[#c3cbe4] tracking-wide">Revenue</p>
            </div>
          </div>

          <button className="bg-[#5C67F2] hover:bg-[#4A55D2] text-white py-2 px-3 rounded-sm flex items-center transition duration-300 ease-in-out text-xs font-medium tracking-wide">
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
        <h3 className="text-sm font-semibold text-white uppercase mb-4 tracking-wide">
          Monthly Earning
        </h3>
        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
          {/* Column 1: Earning Info */}
          <div className="flex-1 flex flex-col items-start">
            <div className="mb-4">
              <p className="text-sm text-[#c3cbe4] mb-2 tracking-wide">
                This month
              </p>
              <p className="text-2xl font-bold text-white tracking-wide">
                $34,252
              </p>
              <p className="text-sm mt-1">
                <span className="text-green-500 font-medium tracking-wide">
                  12% ↑
                </span>{" "}
                <span className="text-[#c3cbe4] tracking-wide">
                  From previous period
                </span>
              </p>
            </div>
            {/* View More Button */}
            <button className="bg-[#5C67F2] hover:bg-[#4A55D2] text-white py-2 px-3 rounded-sm flex items-center justify-center transition duration-300 ease-in-out text-xs font-medium tracking-wide">
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
        <p className="text-sm text-[#c3cbe4] tracking-wide mt-4">
          We craft digital, graphic and dimensional thinking.
        </p>
      </div>
    </div>
  );
};

// HeaderDBLeft Component
const HeaderDBLeft = () => {
  return (
    <div className="w-full space-y-4">
      <UserProfileCard />
      <MonthlyEarningCard />
    </div>
  );
};

export default HeaderDBLeft;