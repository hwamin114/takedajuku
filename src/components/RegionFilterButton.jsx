export const RegionFilterButton = ({ label }) => {
  return (
    <div className="flex-1 min-w-0 flex items-center justify-center bg-white rounded-[5px] shadow-[0_0_12px_rgba(0,0,0,0.212)] text-[#c0272d] cursor-pointer text-[1.25rem] font-bold leading-[1.2] h-[64px] text-center transition-colors transition-opacity duration-300 hover:opacity-60">
      {label}
    </div>
  );
};
