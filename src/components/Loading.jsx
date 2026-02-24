import React from "react";

const Loading = ({title}) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="flex flex-col items-center gap-6">
        
        {/* Animated Spinner */}
        <div className="w-14 h-14 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>

        {/* Animated Text */}
        <p className="text-lg font-medium text-gray-700 animate-pulse">
          Loading... {title && <span className="text-blue-600">{title}</span>}
        </p>

      </div>
    </div>
  );
};

export default Loading;