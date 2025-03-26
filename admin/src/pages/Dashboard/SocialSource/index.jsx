import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdOutlineNavigateNext } from "react-icons/md";

const SocialSource = () => {
    return (
        <div className="bg-[#2a3042] p-6 rounded-md shadow-lg w-full">
          <h3 className="text-sm font-semibold text-white uppercase mb-4">
            Social Source
          </h3>
          <div className="flex flex-col items-center text-center mb-6">
            <div className="w-12 h-12 bg-[#556ee640] rounded-full flex items-center justify-center">
              <FaFacebook className="h-5 w-5 text-[#556ee6]" />
            </div>
            <h4 className="flex text-lg font-semibold text-white mt-4">
              Facebook - <p className="text-[#c3cbe4] ml-1">125 sales</p>
            </h4>
            <p className="text-sm text-[#c3cbe4] mt-2">
              Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut
              libero venenatis faucibus tincidunt.
            </p>
            <a
              href="#"
              className="text-blue-400 text-sm my-4 flex items-center justify-center"
            >
              Learn more <MdOutlineNavigateNext className="ml-1" />
            </a>
          </div>
          <div className="flex justify-between px-4">
            {[
              {
                name: "Facebook",
                sales: 125,
                color: "#3b5998",
                icon: <FaFacebook />,
              },
              {
                name: "Twitter",
                sales: 112,
                color: "#1DA1F2",
                icon: <FaTwitter />,
              },
              {
                name: "Instagram",
                sales: 104,
                color: "#E1306C",
                icon: <FaInstagram />,
              },
            ].map((social, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: social.color }}
                >
                  {React.cloneElement(social.icon)}
                </div>
                <span className="text-sm text-white mt-2">{social.name}</span>
                <span className="text-sm text-[#c3cbe4]">{social.sales} sales</span>
              </div>
            ))}
          </div>
        </div>
      );
};

export default SocialSource;
