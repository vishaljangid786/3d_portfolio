const Alert = ({ type, text }) => {
  return (
    <div className="fixed top-24 left-0 right-0 flex justify-center items-center z-[100] pointer-events-none">
      <div
        className={`px-6 py-3 ${
          type === "danger" ? "border-[#ff00ff] text-[#ff00ff]" : "border-[#00f2ff] text-[#00f2ff]"
        } bg-black/80 backdrop-blur-md border font-orbitron text-sm flex items-center gap-4 shadow-[0_0_20px_rgba(0,0,0,0.5)] pointer-events-auto`}
        role="alert"
      >
        <span className={`w-2 h-2 rounded-full animate-pulse ${
          type === "danger" ? "bg-[#ff00ff] shadow-[0_0_10px_#ff00ff]" : "bg-[#00f2ff] shadow-[0_0_10px_#00f2ff]"
        }`}></span>
        <p className="uppercase tracking-widest">
          {type === "danger" ? "SYSTEM_FAILURE: " : "SYSTEM_READY: "}
          <span className="text-white">{text}</span>
        </p>
      </div>
    </div>
  );
};

export default Alert;
