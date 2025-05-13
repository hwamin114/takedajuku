export const AccordionItem = ({ label }) => {
  return (
    <div className="flex items-center text-[#c0272d] text-[20px] font-bold py-5 border-b border-[#e0e0e0] cursor-pointer">
      <div
        className="mr-2 w-0 h-0 
                  border-l-[8px] border-l-transparent 
                  border-r-[8px] border-r-transparent 
                  border-t-[12px] border-t-[#c0272d] 
                  border-solid"
      ></div>
      <div>{label}</div>
    </div>
  );
};
