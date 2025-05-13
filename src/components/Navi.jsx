import { NaviItems } from './NaviItems';

export const Navi = () => {
  // const naviItemsClass = 'h-full  hover:bg-gray border-r last:border-0';
  const naviItemsClass = `
  h-full hover:bg-gray relative 
  after:content-[''] after:absolute after:top-[15%] after:bottom-[15%] 
  after:right-0 after:w-px after:bg-white last:after:content-none
`;
  const naviItemsContents = 'h-[70px] cursor-pointer hover:opacity-80 flex items-center w-full px-[35px] duration-300';
  return (
    <div className="flex justify-center bg-[#1A1A1A] text-white w-full h-[70px] text-[18px] font-bold items-center ">
      <NaviItems title="武田塾とは？" />
      <NaviItems title="コース案内" />
      <NaviItems title="合格実績" />
      <div className={naviItemsClass}>
        <div className={naviItemsContents}>保護者の方へ</div>
      </div>
      <div className={naviItemsClass}>
        <div className={naviItemsContents}>よくある質問</div>
      </div>
      <NaviItems title="採用情報" />
    </div>
  );
};
