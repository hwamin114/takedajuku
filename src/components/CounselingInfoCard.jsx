export const CounselingInfoCard = (imageUrl, tagUrl, tagText) => {
  return (
    <div className="bg-white border-[5px] border-[#cc2626] rounded-[15px] h-full w-[270px]">
      <img src={imageUrl} alt="" />
      <div
        style={{
          '--tw-translate-x': '-8%',
          transform: 'translateX(var(--tw-translate-x))',
          backgroundImage: `url(${tagUrl})`,
        }}
        className="h-[60px] w-[305px] -translate-x-1/2 bg-cover flex justify-center flex-col"
      >
        <div className="text-[#fff] text-center font-black text-[18px]">{tagText}</div>
      </div>
      <div className="pt-5 px-8 text-[14px]">
        <ul className="list-disc text-[#CC2526] font-bold">
          <li>奇跡の逆転合格カリキュラム</li>
          <li>参考書を完璧にする方法</li>
          <li>合格までのすべて（悩みや今後の方針など）</li>
        </ul>
      </div>
      <div className="px-4 pt-2 pb-6 text-[14px]">
        以上についてお話しします。
        <br />
        一人でできそうなら入塾しなくてかまいません！
      </div>
    </div>
  );
};
