export const StudentsIntroduction = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="bg-[#F1F1F1] w-[970px] h-[970px] px-[50px] py-[40px]">
        <div className="flex justify-center text-[#C00911] text-[2.5rem] font-[700] font-yakunoto">
          2024年度 合格実績
        </div>
        <div className="my-[32px] w-full">
          <div className='bg-[url("https://static.takeda.tv/images/2024/top/success07.webp")] w-[88px] h-[88px] bg-cover rounded-full'></div>
        </div>
        <div className="w-[calc(100% - 40px)] mx-[20px] flex relative">
          <div
            className="absolute top-[9px] left-[9px] w-[293px] h-[293px] z-0"
            style={{ background: 'linear-gradient(0deg, #691015, #97151b 20%, #d9030a)' }}
          ></div>
          <img
            src="https://static.takeda.tv/images/2024/top/success07.webp"
            alt=""
            className="w-[290px] h-[290px] z-10"
          />
          <div className="ml-[40px]">
            <div className="text-[1.75rem] font-bold mb-[20px]">慶應義塾大学 文学部・商学部</div>
            <div>
              <div>
                商業高校で一般入試が多い高校ではなかったのですが、早慶を目指すと決めて入塾しました。2年生で入塾して、最初の方は個別指導がある日だけ頑張ればいいかなと思っていたのですが、それを見透かした校舎長から自習室に通うように言われて、勉強時間が大幅に伸びて、成績も伸びていきました。
              </div>
              <div>
                順調に武田塾のルートを進めていきまましたが、最難関のところではつまづいてしまいました。でもなんとか立ち向かい、ワンランク上の大学の過去問に取り組んだりして克服をしていきました。
              </div>
              <div>
                自分のルールを作ってしまう生徒もいると思うのですが、先生方は何人も受験生を見ているプロなので、プロの指導を素直に受け入れて勉強習慣を確立することが大事だと思います。武田塾では計画やルートを提供してくれるので、あとは自分が努力するだけの環境だと感じました。
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#FFFFFF] w-full h-[280px] mt-[20px] py-[16px] px-[25px]">
          <div className="h-[235px]">
            <div className="text-[1.3rem] font-bold text-center leading-9">
              東京大学 / 京都大学 / 北海道大学 / 東北大学 / 名古屋大学 / 大阪大学 / 九州大学 /<br /> 早稲田大学 /
              慶應義塾大学 / 上智大学 / 同志社大学
            </div>
            <div className="text-[1.1rem] my-[8px] text-center leading-8">
              一橋大学 / 筑波大学 / 東京工業大学 / 横浜国立大学 / 千葉大学 / 神戸大学 / 金沢大学 / 岡山大学 / <br />
              広島大学 / 明治大学 / 青山学院大学 / 立教大学 / 中央大学 / 法政大学 / 関西大学 / 関西学院大学 /
              <br />
              立命館大学
            </div>
            <div className="text-[#C0262D] text-center mt-[40px] text-[1.25rem] font-black cursor-pointer underline hover:no-underline">
              その他の合格実績はこちら
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
