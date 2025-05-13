const subMenuItems = {
  '武田塾とは？': ['武田塾の強み', 'メディア情報', '出版書籍', '塾生の声', 'お知らせ'],
  コース案内: [
    '高１生コース',
    '高2生コース',
    '高3生コース',
    '既卒生コース',
    '小学生・中学生',
    'オンライン',
    '生配信コース',
    '質問対応サービス',
    '医学部志望の方',
  ],
  合格実績: ['合格実績(大学)', '合格実績(中学高校)'],
  採用情報: ['正社員採用', 'アルバイト採用'],
};

const naviItemsClass = `
  h-full hover:bg-gray relative 
  after:content-[''] after:absolute after:top-[15%] after:bottom-[15%] 
  after:right-0 after:w-px after:bg-white last:after:content-none
`;
const naviItemsContents = 'h-[70px] cursor-pointer hover:opacity-80 flex items-center w-full px-[35px] duration-300';

export const NaviItems = ({ title }) => {
  const submenuItem = subMenuItems[title] || [];

  return (
    <div className={`${naviItemsClass} relative group`}>
      <div className={naviItemsContents}>
        {title}
        <img
          src="https://static.takeda.tv/images/2023/common/header_arrow.webp"
          alt="下矢印"
          className="ml-1 w-[17px] h-[17px] object-contain"
        />
      </div>
      <div
        className="absolute top-full left-0 z-20 w-full text-center bg-[#000000]
               opacity-0 pointer-events-none
               group-hover:opacity-100 group-hover:group-hover:pointer-events-auto
               transition-all duration-500 ease-in-out"
      >
        {submenuItem.map((label, index) => {
          return (
            <div
              key={index}
              className="h-[50px] flex flex-col justify-center cursor-pointer text-[16px] cursor-pointer hover:opacity-80 duration-300"
            >
              {label}
            </div>
          );
        })}
      </div>
    </div>
  );
};
