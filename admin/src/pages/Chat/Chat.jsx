import React, { useState } from "react";
import { FaBell, FaSearch, FaCog, FaEllipsisH } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";
import { IoMdSend } from "react-icons/io";
import Avatar from "../images/avatar.jpg";
import Img_recent1 from "../images/notif-icon1.jpg";
import Img_recent2 from "../images/notif-icon2.jpg";
import Img_recent4 from "../images/notif-icon4.jpg";
import Img_recent6 from "../images/notif-icon6.jpg";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";

const Chat = () => {
  const [activeTab, setActiveTab] = useState("Chat");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedChat, setSelectedChat] = useState(null);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [selectedContact, setSelectedContact] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const chats = [
    {
      name: "Steven Franklin",
      message: "Hey! there I'm available",
      time: "05 min",
      avatar: Img_recent1,
      status: "pending",
      messages: [
        { sender: "Steven Franklin", text: "Good morning 😊", time: "10:00" },
        { sender: "You", text: "Hi, How are you? What about our next meeting?", time: "10:02" },
        { sender: "Steven Franklin", text: "Yeah everything is fine", time: "10:06" },
        { sender: "You", text: "& Next meeting tomorrow 10.00AM", time: "10:06" },
        { sender: "Steven Franklin", text: "Wow that's great", time: "10:07" },
      ],
    },
    {
      name: "Adam Miller",
      message: "I've finished it! See you soon",
      time: "12 min",
      avatar: Img_recent2,
      status: "online",
      messages: [
        { sender: "Adam Miller", text: "Hi, How are you? What about our next meeting?", time: "10:02" },
        { sender: "You", text: "Yeah everything is fine", time: "10:06" },
        { sender: "Adam Miller", text: "& Next meeting tomorrow 10.00AM", time: "10:06" },
      ],
    },
    {
      name: "Keith Gonzales",
      message: "This theme is awesome!",
      time: "24 min",
      avatar: "",
      status: "online",
      messages: [
        { sender: "Keith Gonzales", text: "Yeah everything is fine", time: "10:06" },
        { sender: "You", text: "& Next meeting tomorrow 10.00AM", time: "10:06" },
        { sender: "Keith Gonzales", text: "Wow that's great", time: "10:07" },
      ],
    },
    {
      name: "Jose Vickery",
      message: "Nice to meet you",
      time: "1 hr",
      avatar: Img_recent4,
      status: "pending",
      messages: [
        { sender: "Jose", text: "Good morning 😊", time: "10:00" },
        { sender: "You", text: "Yeah everything is fine!", time: "10:06" },
      ],
    },
    {
      name: "Mitchel Givens",
      message: "Hey! there I'm available",
      time: "3 hrs",
      avatar: "",
      status: "offline",
      messages: [
        { sender: "Mitchel Givens", text: "Good morning 😊", time: "10:00" },
        { sender: "You", text: "& Next meeting tomorrow 10.00AM", time: "10:06" },
        { sender: "Mitchel Givens", text: "Wow that's great", time: "10:07" },
      ],
    },
    {
      name: "Stephen Hadley",
      message: "I've finished it! See you soon",
      time: "5 hrs",
      avatar: Img_recent6,
      status: "online",
      messages: [
        { sender: "Stephen Hadley", text: "Good morning 😊", time: "10:00" },
        { sender: "You", text: "Hi, How are you? What about our next meeting?", time: "10:02" },
        { sender: "Stephen Hadley", text: "Yeah everything is fine", time: "10:06" },
        { sender: "You", text: "& Next meeting tomorrow 10.00AM", time: "10:06" },
      ],
    },
    {
      name: "Keith Gonzales",
      message: "This theme is awesome!",
      time: "24 min",
      avatar: "",
      status: "online",
      messages: [
        { sender: "Keith Gonzales", text: "Good morning 😊", time: "10:00" },
        { sender: "You", text: "Hi, How are you? What about our next meeting?", time: "10:02" },
        { sender: "Keith Gonzales", text: "Yeah everything is fine", time: "10:06" },
        { sender: "You", text: "& Next meeting tomorrow 10.00AM", time: "10:06" },
        { sender: "Keith Gonzales", text: "Wow that's great", time: "10:07" },
        { sender: "Keith Gonzales", text: "Wow that's great", time: "10:07" },
      ],
    },
  ];

  const groups = [
    {
      name: "General",
      initial: "G",
      messages: [
        { sender: "Steven Franklin", text: "Good morning 😊", time: "10:00" },
        { sender: "You", text: "Hi, How are you? What about our next meeting?", time: "10:02" },
        { sender: "Steven Franklin", text: "Yeah everything is fine", time: "10:06" },
        { sender: "You", text: "& Next meeting tomorrow 10.00AM", time: "10:06" },
        { sender: "Steven Franklin", text: "Wow that's great", time: "10:07" },
      ],
    },
    {
      name: "Reporting",
      initial: "R",
      messages: [
        { sender: "Adam Miller", text: "Hi, How are you? What about our next meeting?", time: "10:02" },
        { sender: "You", text: "Yeah everything is fine", time: "10:06" },
        { sender: "Adam Miller", text: "& Next meeting tomorrow 10.00AM", time: "10:06" },
      ],
    },
    {
      name: "Meeting",
      initial: "M",
      messages: [
        { sender: "Keith Gonzales", text: "Yeah everything is fine", time: "10:06" },
        { sender: "You", text: "& Next meeting tomorrow 10.00AM", time: "11:06" },
        { sender: "Keith Gonzales", text: "Wow that's great", time: "11:07" },
      ],
    },
    {
      name: "Project A",
      initial: "A",
      messages: [
        { sender: "Jose Vickery", text: "Good morning 😊", time: "10:00" },
        { sender: "You", text: "Yeah everything is fine", time: "10:06" },
      ],
    },
    {
      name: "Project B",
      initial: "B",
      messages: [
        { sender: "Mitchel Givens", text: "Good morning 😊", time: "10:00" },
        { sender: "You", text: "& Next meeting tomorrow 10.00AM", time: "10:06" },
        { sender: "Mitchel Givens", text: "Wow that's great", time: "10:07" },
      ],
    },
  ];

  const contacts = [
    {
      name: "Adam Miller",
      initial: "A",
      status: "online",
      messages: [
        { sender: "Steven Franklin", text: "Good morning 😊", time: "10:00" },
        { sender: "You", text: "Hi, How are you? What about our next meeting?", time: "10:02" },
        { sender: "Steven Franklin", text: "Yeah everything is fine", time: "10:06" },
        { sender: "You", text: "& Next meeting tomorrow 10.00AM", time: "10:06" },
        { sender: "Steven Franklin", text: "Wow that's great", time: "10:07" },
      ],
    },
    {
      name: "Alfonso Fisher",
      initial: "A",
      status: "offline",
      messages: [
        { sender: "Adam Miller", text: "Hi, How are you? What about our next meeting?", time: "10:02" },
        { sender: "You", text: "Yeah everything is fine", time: "10:06" },
        { sender: "Adam Miller", text: "& Next meeting tomorrow 10.00AM", time: "10:06" },
      ],
    },
    {
      name: "Bonnie Harney",
      initial: "B",
      status: "pending",
      messages: [
        { sender: "Keith Gonzales", text: "Yeah everything is fine", time: "10:06" },
        { sender: "You", text: "& Next meeting tomorrow 10.00AM", time: "11:06" },
        { sender: "Keith Gonzales", text: "Wow that's great", time: "11:07" },
      ],
    },
    {
      name: "Charles Brown",
      initial: "C",
      status: "online",
      messages: [
        { sender: "Jose Vickery", text: "Good morning 😊", time: "10:00" },
        { sender: "You", text: "Yeah everything is fine", time: "10:06" },
      ],
    },
    {
      name: "Carmella Jones",
      initial: "C",
      status: "online",
      messages: [
        { sender: "Mitchel Givens", text: "Good morning 😊", time: "10:00" },
        { sender: "You", text: "& Next meeting tomorrow 10.00AM", time: "10:06" },
        { sender: "Mitchel Givens", text: "Wow that's great", time: "10:07" },
      ],
    },
    {
      name: "Carrie Williams",
      initial: "C",
      status: "offline",
      messages: [
        { sender: "Stephen Hadley", text: "Good morning 😊", time: "10:00" },
        { sender: "You", text: "Hi, How are you? What about our next meeting?", time: "10:02" },
        { sender: "Stephen Hadley", text: "Yeah everything is fine", time: "10:06" },
        { sender: "You", text: "& Next meeting tomorrow 10.00AM", time: "10:06" },
      ],
    },
    {
      name: "Dolores Minter",
      initial: "D",
      status: "online",
      messages: [
        { sender: "Keith Gonzales", text: "Good morning 😊", time: "10:00" },
        { sender: "You", text: "Hi, How are you? What about our next meeting?", time: "10:02" },
        { sender: "Keith Gonzales", text: "Yeah everything is fine", time: "10:06" },
        { sender: "You", text: "& Next meeting tomorrow 10.00AM", time: "10:06" },
        { sender: "Keith Gonzales", text: "Wow that's great", time: "10:07" },
      ],
    },
  ].sort((a, b) => a.name.localeCompare(b.name));

  const handleChatSelect = (chat) => {
    setSelectedChat(chat);
    setSelectedGroup(null);
    setSelectedContact(null);
  };

  const handleGroupSelect = (group) => {
    setSelectedGroup(group);
    setSelectedChat(null);
    setSelectedContact(null);
  };

  const handleContactSelect = (contact) => {
    setSelectedContact(contact);
    setSelectedChat(null);
    setSelectedGroup(null);
  };

  const filteredChats = chats.filter(
    (chat) =>
      chat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      chat.message.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredGroups = groups.filter((group) =>
    group.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full min-h-screen bg-[#222736] text-white flex flex-col">
      <div className="px-4 sm:px-6 pt-8 flex items-center justify-between">
        <h1 className="text-lg font-bold">CHAT</h1>
        <div className="flex items-center text-sm">
          <a href="#" className="font-medium">
            Skote
          </a>
          <span className="mx-2">/</span>
          <span className="text-[#a6b0cf]">Chat</span>
        </div>
      </div>

      {/* Container chính với responsive */}
      <div className="flex flex-col lg:flex-row flex-1 overflow-hidden px-4 sm:px-6">
        {/* Cột trái */}
        <div className="w-full lg:w-1/3 flex flex-col pr-0 lg:pr-4 mb-4 lg:mb-0">
          <div className="flex items-center justify-between py-6">
            <div className="flex items-center space-x-3">
              <img src={Avatar} alt="User" className="w-8 h-8 rounded-full" />
              <div>
                <h1 className="text-sm font-semibold">Henry Wells</h1>
                <div className="flex items-center space-x-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <p className="text-xs text-green-500">Active</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="relative focus:outline-none"
              >
                <motion.div
                  animate={{ rotate: [0, 15, -15, 15, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
                >
                  <FaBell className="text-gray-400 text-lg" />
                </motion.div>
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute -right-2 mt-2 w-48 bg-[#2a3042] text-[#a6b0cf] rounded-md shadow-lg z-10"
                  style={{ top: "100%" }}
                >
                  <div className="py-2">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm hover:bg-gray-700"
                      onClick={() => setIsOpen(false)}
                    >
                      Action
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm hover:bg-gray-700"
                      onClick={() => setIsOpen(false)}
                    >
                      Another action
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm hover:bg-gray-700"
                      onClick={() => setIsOpen(false)}
                    >
                      Something else
                    </a>
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          <hr className="border-gray-600" />

          <div className="relative py-6">
            <BiSearchAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 text-sm bg-[#2a3042] text-white placeholder:text-[#a6b0cf] rounded-md outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex bg-gray-700 my-2 overflow-hidden rounded-md">
            {["Chat", "Groups", "Contacts"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-2 text-sm font-semibold text-center transition-colors ${
                  activeTab === tab
                    ? "bg-blue-500 text-white"
                    : "text-gray-400 hover:bg-gray-600"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="flex-1 py-2 overflow-hidden">
            {activeTab === "Chat" && (
              <>
                <h1 className="text-lg font-semibold mb-3">Recent</h1>
                <div className="max-h-[18rem] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
                  {filteredChats.map((chat, index) => (
                    <div
                      key={index}
                      onClick={() => handleChatSelect(chat)}
                      className={`flex items-center gap-3 p-3 rounded-lg hover:bg-gray-600 cursor-pointer transition-colors ${
                        selectedChat === chat ? "bg-gray-600" : ""
                      }`}
                    >
                      <span
                        className={`w-2 h-2 rounded-full ${
                          chat.status === "online"
                            ? "bg-green-500"
                            : chat.status === "pending"
                            ? "bg-yellow-500"
                            : "bg-gray-500"
                        }`}
                      />
                      {chat.avatar ? (
                        <img
                          src={chat.avatar}
                          alt={chat.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                      ) : (
                        <div className="w-10 h-10 bg-gray-700 text-white flex items-center justify-center rounded-full">
                          {chat.name[0]}
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <h1 className="text-sm font-semibold truncate">
                          {chat.name}
                        </h1>
                        <p className="text-xs text-[#c3cbe4] truncate">
                          {chat.message}
                        </p>
                      </div>
                      <div className="text-xs text-[#c3cbe4] whitespace-nowrap">
                        {chat.time}
                      </div>
                    </div>
                  ))}
                  {filteredChats.length === 0 && (
                    <p className="text-gray-400 text-center mt-4">
                      No chats found
                    </p>
                  )}
                </div>
              </>
            )}

            {activeTab === "Groups" && (
              <>
                <h1 className="text-lg font-semibold mb-3">Group</h1>
                <div className="max-h-[18rem] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
                  {filteredGroups.map((group, index) => (
                    <div
                      key={index}
                      onClick={() => handleGroupSelect(group)}
                      className={`flex items-center gap-3 p-3 rounded-lg hover:bg-gray-600 cursor-pointer transition-colors ${
                        selectedGroup === group ? "bg-gray-600" : ""
                      }`}
                    >
                      <div className="w-10 h-10 bg-blue-500 text-white flex items-center justify-center rounded-full">
                        {group.initial}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h1 className="text-sm font-semibold truncate">
                          {group.name}
                        </h1>
                      </div>
                    </div>
                  ))}
                  {filteredGroups.length === 0 && (
                    <p className="text-gray-400 text-center mt-4">
                      No groups found
                    </p>
                  )}
                </div>
              </>
            )}

            {activeTab === "Contacts" && (
              <>
                <h1 className="text-base font-semibold mb-3">Contact</h1>
                <div className="max-h-[18rem] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
                  {Object.entries(
                    filteredContacts.reduce((acc, contact) => {
                      const initial = contact.name[0].toUpperCase();
                      if (!acc[initial]) acc[initial] = [];
                      acc[initial].push(contact);
                      return acc;
                    }, {})
                  ).map(([initial, contactsGroup]) => (
                    <div key={initial}>
                      <div className="w-8 h-8 bg-[#2e3962] text-[#546ce1] flex items-center text-sm justify-center rounded-full mt-4">
                        {initial}
                      </div>
                      <hr className="border-gray-700 mt-4" />
                      {contactsGroup.map((contact, index) => (
                        <div
                          key={index}
                          onClick={() => handleContactSelect(contact)}
                          className={`flex items-center gap-3 p-3 rounded-sm hover:bg-gray-600 cursor-pointer transition-colors ${
                            selectedContact === contact ? "bg-gray-600" : ""
                          }`}
                        >
                          <div className="flex-1 ml-2">
                            <h1 className="text-sm font-semibold truncate">
                              {contact.name}
                            </h1>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                  {filteredContacts.length === 0 && (
                    <p className="text-gray-400 text-center mt-4">
                      No contacts found
                    </p>
                  )}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Cột phải */}
        <div className="w-full lg:w-2/3 flex flex-col bg-[#2a3042] rounded-lg">
          <div className="flex justify-between items-center px-4 py-4 border-b border-gray-600">
            <div>
              <h1 className="text-lg font-semibold">
                {selectedChat?.name ||
                  selectedGroup?.name ||
                  selectedContact?.name ||
                  "Select a chat"}
              </h1>
              {(selectedChat || selectedContact) && (
                <div className="flex items-center space-x-1">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      (selectedChat?.status || selectedContact?.status) === "online"
                        ? "bg-green-500"
                        : (selectedChat?.status || selectedContact?.status) === "pending"
                        ? "bg-yellow-500"
                        : "bg-gray-500"
                    }`}
                  />
                  <p className="text-xs text-green-500">
                    {(selectedChat?.status || selectedContact?.status) === "online"
                      ? "Online"
                      : (selectedChat?.status || selectedContact?.status)
                          ?.charAt(0)
                          .toUpperCase() +
                        (selectedChat?.status || selectedContact?.status)?.slice(1)}
                  </p>
                </div>
              )}
            </div>
            <div className="flex items-center space-x-3">
              <div className="relative flex items-center">
                <button
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
                >
                  <FaSearch className="text-gray-400 text-xs" />
                </button>
                {isSearchOpen && (
                  <div className="absolute top-full right-0 mt-2 z-10">
                    <form
                      onSubmit={handleSearchSubmit}
                      className="bg-[#2a3042] border border-gray-600 px-4 py-6 flex items-center rounded-md"
                    >
                      <div className="flex items-stretch">
                        <input
                          type="text"
                          placeholder="Search..."
                          className="p-1 px-2 bg-[#2a3042] text-white border border-gray-600 border-r-0 rounded-l-md outline-none w-36"
                        />
                        <button
                          type="submit"
                          className="p-2 bg-blue-500 rounded-r-md text-white flex items-center justify-center border border-gray-600 border-l-0 hover:bg-blue-600 transition-colors"
                        >
                          <FaSearch className="text-sm" />
                        </button>
                      </div>
                    </form>
                  </div>
                )}
              </div>
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-gray-600 transition-colors">
                <FaCog className="text-gray-400 text-xs" />
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-gray-600 transition-colors">
                <FaEllipsisH className="text-gray-400 text-xs" />
              </button>
            </div>
          </div>

          <div className="flex-1 p-4 max-h-[30rem] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
            {selectedChat ? (
              <div className="space-y-4">
                {selectedChat.messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={msg.sender === "You" ? "text-right" : "text-left"}
                  >
                    <div
                      className={`text-sm p-3 rounded-lg inline-block max-w-[90%] sm:max-w-md ${
                        msg.sender === "You" ? "bg-[#444c5c]" : "bg-[#3b4252]"
                      }`}
                    >
                      {msg.sender !== "You" && (
                        <p className="font-semibold">{msg.sender}</p>
                      )}
                      <p>{msg.text}</p>
                      <span className="text-xs text-gray-400 block mt-1">
                        {msg.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : selectedGroup ? (
              <div className="space-y-4">
                {selectedGroup.messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={msg.sender === "You" ? "text-right" : "text-left"}
                  >
                    <div
                      className={`text-sm p-3 rounded-lg inline-block max-w-[90%] sm:max-w-md ${
                        msg.sender === "You" ? "bg-[#444c5c]" : "bg-[#3b4252]"
                      }`}
                    >
                      {msg.sender !== "You" && (
                        <p className="font-semibold">{msg.sender}</p>
                      )}
                      <p>{msg.text}</p>
                      <span className="text-xs text-gray-400 block mt-1">
                        {msg.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : selectedContact ? (
              <div className="space-y-4">
                {selectedContact.messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={msg.sender === "You" ? "text-right" : "text-left"}
                  >
                    <div
                      className={`text-sm p-3 rounded-lg inline-block max-w-[90%] sm:max-w-md ${
                        msg.sender === "You" ? "bg-[#444c5c]" : "bg-[#3b4252]"
                      }`}
                    >
                      {msg.sender !== "You" && (
                        <p className="font-semibold">{msg.sender}</p>
                      )}
                      <p>{msg.text}</p>
                      <span className="text-xs text-gray-400 block mt-1">
                        {msg.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex items-center justify-center h-full">
                <p className="text-gray-400 text-center">
                  Select a chat, group, or contact to start messaging
                </p>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-gray-600">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                placeholder="Enter Message..."
                className="flex-1 bg-[#32394e] outline-none text-white placeholder-gray-400 pl-4 py-2 rounded-full text-sm w-full"
              />
              <button className="bg-blue-500 px-4 py-1 rounded-full hover:bg-blue-600 flex items-center transition-colors text-sm">
                Send
                <IoMdSend className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Chat;