import React from "react";
import { GrLinkNext } from "react-icons/gr";
import { motion } from "framer-motion";

const ActivityPanel = () => {
  return (
    <div className="bg-[#2a3042] p-8 rounded-md shadow-lg w-full">
      <h3 className="text-sm font-semibold text-white uppercase mb-4">
        Activity
      </h3>
      <div className="relative space-y-8">
        <div
          className="absolute left-[10px] top-0 h-full border-gray-700"
          style={{ borderStyle: "dashed", borderWidth: "1px" }}
        ></div>

        {/* Danh sách các activity */}
        {[
          {
            date: "22 Nov",
            text: "Responded to need 'Volunteer Activities'",
          },
          {
            date: "17 Nov",
            text: "Everyone realizes why a new common language would be desirable... Read More",
          },
          {
            date: "15 Nov",
            text: "Joined the group 'Boardsmanship Forum'",
            animated: true,
          },
          {
            date: "22 Nov",
            text: "Responded to need 'In-Kind Opportunity'",
          },
        ].map((activity, index) => (
          <div
            key={index}
            className="flex items-center relative mb-6 last:mb-0"
          >
            {activity.animated ? (
              <motion.div
                className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center mr-4 z-10"
                animate={{ x: [0, 10, 0], opacity: [1, 0.5, 1] }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                }}
              >
                <GrLinkNext className="text-white w-2 h-2" />
              </motion.div>
            ) : (
              <div className="w-5 h-5 bg-gray-500 rounded-full flex items-center justify-center mr-4 z-10">
                <GrLinkNext className="text-white w-2 h-2" />
              </div>
            )}

            <p className="text-sm text-white min-w-[60px]">{activity.date}</p>

            <p className="text-sm text-[#a6b0cf] flex-1">{activity.text}</p>
          </div>
        ))}
      </div>

      {/* Nút View More */}
      <div className="mt-6 text-center">
        <button className="px-4 py-1 bg-blue-600 text-white rounded-sm hover:bg-blue-700 text-sm font-medium flex items-center justify-center mx-auto">
          View More
          <GrLinkNext className="ml-2 w-3 h-3" />
        </button>
      </div>
    </div>
  );
};

export default ActivityPanel;
