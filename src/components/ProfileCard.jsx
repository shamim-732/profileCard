import React from "react";

const ProfileCard = () => {
  return (
    <div className="flex justify-center items-center  min-h-screen bg-gray-900 p-5">
      {/* Card with gradient border */}
      <div className="relative w-full max-w-sm p-1 rounded-2xl bg-gradient-to-br   from-yellow-400 via-orange-500 to-red-500 shadow-xl transition-transform duration-300 hover:scale-102">
        <div className="bg-gray-800 rounded-2xl p-6 text-center">
          
          {/* Profile Image */}
          <img
            className="w-36 h-36 mx-auto rounded-full object-cover  border-4 border-yellow-400 mt-2"
            src="./img/shamim.jpg"
            alt="Profile"
          />

          {/* Name & Role */}
          <h2 className="text-yellow-400 text-2xl font-bold mt-3 font-sen">Shamim Babu</h2>
          <p className="text-gray-400 text-sm mb-6 font-sen">Web Developer</p>

          {/* Stats Section */}
          <div className="flex justify-between px-3 mb-6">
            <div className="text-center">
              <h3 className="text-white text-xl font-sen">120</h3>
              <p className="text-gray-500 text-xs font-sen">Posts</p>
            </div>
            <div className="text-center">
              <h3 className="text-white text-xl font-sen">450</h3>
              <p className="text-gray-500 text-xs font-sen">Followers</p>
            </div>
            <div className="text-center">
              <h3 className="text-white text-xl font-sen">180</h3>
              <p className="text-gray-500 text-xs font-sen">Following</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-between gap-2 mb-6">
            <button className="flex-1 py-2 rounded-full border border-yellow-400 text-yellow-400 font-bold hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300">
              Follow
            </button>
            <button className="flex-1 py-2 rounded-full border border-yellow-400 text-yellow-400 font-bold hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300">
              Message
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 text-yellow-400 text-2xl">
            <i className="fa-brands fa-facebook cursor-pointer transition-all duration-300 hover:text-yellow-300 hover:scale-125"></i>
            <i className="fa-solid fa-heart cursor-pointer transition-all duration-300 hover:text-yellow-300 hover:scale-125"></i>
            <i className="fa-brands fa-instagram cursor-pointer transition-all duration-300 hover:text-yellow-300 hover:scale-125"></i>
            <i className="fa-brands fa-x-twitter cursor-pointer transition-all duration-300 hover:text-yellow-300 hover:scale-125"></i>
            <i className="fa-brands fa-github cursor-pointer transition-all duration-300 hover:text-yellow-300 hover:scale-125"></i>
            <i className="fa-solid fa-user cursor-pointer transition-all duration-300 hover:text-yellow-300 hover:scale-125"></i>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
