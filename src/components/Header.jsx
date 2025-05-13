export const Header = () => {
  return (
    <div className="flex justify-around mt-[20px] mb-[20px]">
      <div className="bg-[url('https://static.takeda.tv/images/2023/common/main_logo.webp')] w-[190px] h-[90px] bg-cover"></div>
      <div className="flex items-end gap-4 font-bold text-white text-[23px]">
        <div className="flex justify-center cursor-pointer bg-red-500 px-4 py-3 rounded w-[220px] hover:opacity-70">
          校舎を探す
        </div>
        <div className="flex justify-center cursor-pointer bg-blue-500 px-4 py-3 rounded w-[220px] hover:opacity-70">
          無料受付相談
        </div>
      </div>
    </div>
  );
};
