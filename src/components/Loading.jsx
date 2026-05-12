import React from "react";

const Loading = ({ title }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#08080a]">
      <div className="flex flex-col items-center gap-8">
        {/* Cyberpunk Spinner */}
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 border-4 border-[#c5a059]/20 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-t-[#c5a059] rounded-full animate-spin shadow-[0_0_15px_rgba(197,160,89,0.3)]"></div>
          <div className="absolute inset-4 border-2 border-b-[#4a5568] rounded-full animate-spin-slow"></div>
        </div>

        {/* Animated Text */}
        <div className="flex flex-col items-center gap-2">
          <p className="font-orbitron text-xl text-white tracking-[0.3em] animate-pulse">
            LOADING_SYSTEM...
          </p>
          {title && (
            <span className="font-orbitron text-xs text-[#c5a059] uppercase tracking-widest opacity-70">
              MODULE: {title}
            </span>
          )}
        </div>

        <div className="w-48 h-1 bg-white/10 overflow-hidden relative">
          <div className="absolute top-0 left-0 h-full bg-[#c5a059] animate-loading-bar shadow-[0_0_10px_rgba(197,160,89,0.5)]"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;