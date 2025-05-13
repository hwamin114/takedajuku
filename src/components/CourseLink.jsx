// export const CourseLink = ({ label, text, contents, textColor }) => {
//   return (
//     <div class="bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] h-full w-full px-[30px] pb-[20px]">
//       <div className={`${textColor} text-[white] w-[165px] text-center font-black text-[20px]`}>{label}</div>
//       <div className="my-[16px]">{contents}</div>
//       <div className={`${textColor} text-[#1C3D76] flex justify-end cursor-pointer group`}>
//         <div className="font-bold mr-2 underline group-hover:no-underline">{text}</div>
//         <div className="group-hover:no-underline">→</div>
//       </div>
//     </div>
//   );
// };

import clsx from 'clsx';

export const CourseLink = ({ label, text, contents, color }) => {
  const [bgColor, textColor] = color.split(' ');

  return (
    <div className="bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] w-[48%] px-[30px] pb-[20px]">
      <div
        className={clsx(
          bgColor,
          'text-white w-[165px] h-[40px] text-center font-black text-[20px] flex flex-col justify-center'
        )}
      >
        {label}
      </div>
      <div className="my-[16px]">{contents}</div>
      <div className={clsx(textColor, 'text-[#1C3D76] flex justify-end cursor-pointer group')}>
        <div className="font-bold mr-2 underline group-hover:no-underline">{text}</div>
        <div className="group-hover:no-underline">→</div>
      </div>
    </div>
  );
};
