import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { BiCopyAlt, BiPurchaseTagAlt } from "react-icons/bi";
import { RiInboxArchiveLine } from "react-icons/ri";

// Dữ liệu giữ nguyên
const weekData = [
  { name: "Jan", A: 20, B: 10, C: 5 },
  { name: "Feb", A: 25, B: 12, C: 7 },
  { name: "Mar", A: 22, B: 11, C: 6 },
  { name: "Apr", A: 30, B: 15, C: 8 },
  { name: "May", A: 28, B: 14, C: 7 },
  { name: "Jun", A: 35, B: 18, C: 10 },
  { name: "Jul", A: 30, B: 15, C: 9 },
  { name: "Aug", A: 38, B: 20, C: 12 },
  { name: "Sep", A: 25, B: 12, C: 6 },
  { name: "Oct", A: 27, B: 13, C: 8 },
  { name: "Nov", A: 33, B: 16, C: 10 },
  { name: "Dec", A: 40, B: 20, C: 12 },
];

const monthData = [
  { name: "Jan", A: 50, B: 20, C: 15 },
  { name: "Feb", A: 55, B: 22, C: 18 },
  { name: "Mar", A: 52, B: 21, C: 16 },
  { name: "Apr", A: 60, B: 25, C: 20 },
  { name: "May", A: 58, B: 24, C: 18 },
  { name: "Jun", A: 65, B: 28, C: 22 },
  { name: "Jul", A: 60, B: 25, C: 20 },
  { name: "Aug", A: 70, B: 30, C: 25 },
  { name: "Sep", A: 55, B: 22, C: 18 },
  { name: "Oct", A: 58, B: 24, C: 20 },
  { name: "Nov", A: 63, B: 26, C: 22 },
  { name: "Dec", A: 68, B: 28, C: 25 },
];

const yearData = [
  { name: "Jan", A: 80, B: 30, C: 25 },
  { name: "Feb", A: 90, B: 35, C: 30 },
  { name: "Mar", A: 85, B: 33, C: 28 },
  { name: "Apr", A: 95, B: 40, C: 35 },
  { name: "May", A: 92, B: 38, C: 32 },
  { name: "Jun", A: 100, B: 45, C: 40 },
  { name: "Jul", A: 95, B: 42, C: 38 },
  { name: "Aug", A: 110, B: 50, C: 45 },
  { name: "Sep", A: 90, B: 35, C: 30 },
  { name: "Oct", A: 95, B: 40, C: 35 },
  { name: "Nov", A: 105, B: 45, C: 42 },
  { name: "Dec", A: 115, B: 50, C: 48 },
];

const Dashboard = () => {
  const [data, setData] = useState(yearData);
  const [activeView, setActiveView] = useState("year");
  const [barOpacity, setBarOpacity] = useState({
    A: 1,
    B: 1,
    C: 1,
  });

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const hoveredBar = payload[0];
      const fillColor = hoveredBar.fill;
      const dataEntry = hoveredBar.payload;

      let displayValue = "";
      let displayColor = "";
      let displayName = "";

      if (fillColor === "#4f46e5") {
        displayValue = dataEntry.A;
        displayColor = "#4f46e5";
        displayName = "A";
      } else if (fillColor === "#fbbf24") {
        displayValue = dataEntry.B;
        displayColor = "#fbbf24";
        displayName = "B";
      } else if (fillColor === "#10b981") {
        displayValue = dataEntry.C;
        displayColor = "#10b981";
        displayName = "C";
      }

      return (
        <div className="bg-gray-800 p-2 rounded shadow text-white">
          <p>{`${label}`}</p>
          <p
            style={{ color: displayColor }}
          >{`${displayName}: ${displayValue}`}</p>
        </div>
      );
    }
    return null;
  };

  const handleLegendClick = (dataKey) => {
    setBarOpacity((prev) => ({
      ...prev,
      [dataKey]: prev[dataKey] === 1 ? 0.3 : 1,
    }));
  };

  const renderLegend = (props) => {
    const { payload } = props;
    return (
      <div className="flex justify-center gap-6">
        {payload.map((entry) => (
          <div
            key={entry.value}
            className="flex items-center cursor-pointer"
            onClick={() => handleLegendClick(entry.value)}
          >
            <div
              style={{
                width: 10,
                height: 10,
                backgroundColor: entry.color,
                marginRight: 5,
                opacity: barOpacity[entry.value],
              }}
            />
            <span
              style={{
                color: "white",
                opacity: barOpacity[entry.value],
              }}
            >
              {entry.value}
            </span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card
          className="bg-[#2a3042]"
          title="Orders"
          value="1,235"
          icon={<BiCopyAlt />}
        />
        <Card
          className="bg-[#2a3042]"
          title="Revenue"
          value="$35,723"
          icon={<RiInboxArchiveLine />}
        />
        <Card
          className="bg-[#2a3042]"
          title="Average Price"
          value="$16.2"
          icon={<BiPurchaseTagAlt />}
        />
      </div>

      <div className="bg-[#2a3042] p-6 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Email Sent</h2>
          <div className="flex space-x-4">
            <button
              onClick={() => {
                setData(weekData);
                setActiveView("week");
              }}
              className={`px-4 py-2 text-sm rounded ${
                activeView === "week" ? "bg-[#556ee6]" : ""
              }`}
            >
              Week
            </button>
            <button
              onClick={() => {
                setData(monthData);
                setActiveView("month");
              }}
              className={`px-4 py-2 text-sm rounded ${
                activeView === "month" ? "bg-[#556ee6]" : ""
              }`}
            >
              Month
            </button>
            <button
              onClick={() => {
                setData(yearData);
                setActiveView("year");
              }}
              className={`px-4 py-2 text-sm rounded ${
                activeView === "year" ? "bg-[#556ee6]" : ""
              }`}
            >
              Year
            </button>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} barSize={10}>
            <XAxis dataKey="name" stroke="#ccc" />
            <YAxis stroke="#ccc" />
            <Tooltip content={<CustomTooltip />} />
            <Legend content={renderLegend} />
            <Bar
              dataKey="A"
              stackId="a"
              fill="#4f46e5"
              fillOpacity={barOpacity.A}
            />
            <Bar
              dataKey="B"
              stackId="a"
              fill="#fbbf24"
              fillOpacity={barOpacity.B}
            />
            <Bar
              dataKey="C"
              stackId="a"
              fill="#10b981"
              fillOpacity={barOpacity.C}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const Card = ({ title, value, icon, className }) => (
  <div
    className={`${className} p-6 rounded-lg shadow-lg flex justify-between items-center`}
  >
    <div>
      <h3 className="text-gray-400 text-sm">{title}</h3>
      <p className="text-2xl font-semibold">{value}</p>
    </div>
    <div className="bg-[#556ee6] rounded-full p-3">
      <div className="text-white text-2xl">{icon}</div>
    </div>
  </div>
);

export default Dashboard;
