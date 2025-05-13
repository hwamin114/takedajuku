export const StudyMethodCard = ({ title, subTitle, text }) => {
  return (
    <div className="bg-[#fff] w-[465px] h-[310px] shadow-[0_0_10px_rgba(0,0,0,0.5)] rounded-[15px] overflow-hidden m-[1%]">
      <div className="h-[50%] bg-[#3F3F3F] flex-col flex justify-center">
        <div className="border-l-[5px] border-l-[#f9de21] pl-[15px] mx-[30px] font-yakunoto">
          <div className="text-white text-[32px] font-black">{title}</div>
          <div className="text-[#f9de21] font-black text-[19px]">{subTitle}</div>
        </div>
      </div>
      <div className="h-[50%] bg-white flex flex-col justify-center p-[28px]">
        <div className="text-[16px]">{text}</div>
      </div>
    </div>
  );
};
