export const BlueImageButton = ({ headingText, subText }) => {
  return (
    <div className='bg-[url("https://static.takeda.tv/images/2025/common/blue-button.webp")] w-[500px] h-[140px] bg-contain bg-no-repeat text-[#FFFFFF] text-[1.25rem] font-bold flex items-center justify-center bg-[50%] cursor-pointer hover:opacity-80'>
      <div>
        {headingText}
        <br />
        {subText}
      </div>
    </div>
  );
};
