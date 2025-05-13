import { BlueImageButton } from '@/components/Bluebutton';
import { Navi } from '@/components/Navi';
import { StudentsIntroduction } from '@/components/StudentsIntroduction';
import { Header } from '@/components/Header';
import { StudyMethodCard } from '@/components/StudyMethodCard';
import { RegionFilterButton } from '@/components/RegionFilterButton';
import { AccordionItem } from '@/components/AccordionItem';
import { CourseLink } from '@/components/CourseLink';

export default function Home() {
  return (
    <div>
      <Header />
      <Navi />
      <div className="w-full h-[620px] mb-[32px] z-0">
        <div className='bg-[url("https://static.takeda.tv/images/2025/index/index-mv_pc.webp")] w-full h-full bg-cover'></div>
      </div>
      <StudentsIntroduction />
      <div className="w-[calc(100% - 710px)] mx-[355px]">
        <div className="text-[5rem] text-[#EB6278] font-black text-center font-yakunoto my-[40px]">
          参考書ルート
          <br /> 無料配布中!
        </div>
        <div className="flex justify-center">
          <img src="https://static.takeda.tv/images/2025/page/new_curriculum/newcurriculum.webp" alt="" />
        </div>
        <div className="my-[60px]">
          <div className="text-[5rem] text-[#A11219] font-black text-center font-yakunoto my-[40px]">
            授業を受けずに
            <br />
            難関大合格!!
          </div>
        </div>
        <div className="w-full flex justify-center px-4 my-8">
          <iframe
            className="w-full max-w-[970px] aspect-video rounded"
            src="https://www.youtube.com/embed/4nh8EeTufOM"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="text-[1.5rem] text-center my-[50px] font-bold">
          武田塾は日本初の授業をしない塾です。
          <br />
          圧倒的に成績が上がる勉強法を提供しています！
        </div>
        <div className="w-full flex justify-center mb-[60px]">
          <BlueImageButton headingText="武田塾の勉強法を" subText="もっと詳しく知る" />
        </div>
      </div>
      <div
        className="w-full h-[1200px] flex items-center justify-center"
        style={{ background: 'linear-gradient(0deg, #691015, #97151b 10%, #d9030a, #97151b 90%, #691015)' }}
      >
        <div className='bg-[url("https://static.takeda.tv/images/2023/top/polka_dot.webp")] bg-white bg-cover w-[87.5%] h-[calc(100%-160px)]'>
          <div className=" font-yakunoto font-bold leading-none mt-[44px]">
            <div className="flex justify-center items-end text-[46px]">
              <div className="text-[90px] text-[#BD0C12]">合格</div>
              <div className="mb-[12px]">を</div>
              <div className="text-[90px] text-[#BD0C12]">可能</div>
              <div className="mb-[12px]">にする</div>
            </div>
            <div className="text-center text-[128px] text-[#95141A]">タケダの勉強法</div>
          </div>
          <div className="my-[60px]">
            <div className="w-full flex justify-center">
              <StudyMethodCard
                title="授業をしない!"
                subTitle="授業ではやらない「やってみる、できる」をしっかりやる!"
                text="偏差値を上げるためには「わかる・やってみる・できる」の3ステップが必要です。しかし高校や予備校の授業では「わかる」までしかやってくれません。「できる」ようになるのに必要なもの、それが「自学自習」なのです。"
              />
              <StudyMethodCard
                title="一冊を完璧に!"
                subTitle="自分にあった参考書を完璧にすることが最強最速の勉強法!"
                text="学力を急激に上げるには、自分のレベルに合った参考書を一冊ずつ完璧にする。これが最強です。予備校の授業では1週間に1章ずつしか進まない英文法でも、参考書なら8倍の速さで進めることができます。"
              />
            </div>
            <div className="w-full flex justify-center">
              <StudyMethodCard
                title="自学自習の徹底管理!"
                subTitle="「できる」ようになるまで徹底的に管理・サポートします!"
                text="毎日の宿題を明確に電子指導報告書で指定しますので、自習時間に何をすればいいか悩む必要がありません。毎週のテストでしっかり内容が身についているか確認します。"
              />
              <StudyMethodCard
                title="特訓カリキュラム!"
                subTitle="完全オーダーメイドの超個別カリキュラムで順当合格!"
                text="武田塾では塾生一人ひとりに対してじっくりカウンセリングを行い、現在の成績・偏差値と得意科目・苦手科目を分析した上で、志望校合格までに必要な教科ごとの参考書とその順番を全て洗い出し、特訓カリキュラムを作成します。"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F1F1F1] w-full">
        <div className="py-[40px] mx-[370px] w-[calc(100%-740px)]">
          <div className="mb-[40px] text-[40px] font-yakunoto font-black text-[#B30C14] text-center">校舎を選ぶ</div>
          <div className="mx-[49px]">
            <div className="flex justify-between gap-2">
              <RegionFilterButton label="北海道・東北" />
              <RegionFilterButton label="関東" />
              <RegionFilterButton label="甲信越" />
              <RegionFilterButton label="北陸" />
              <RegionFilterButton label="東海" />
            </div>
            <div className="flex justify-between gap-2 my-4">
              <RegionFilterButton label="近畿" />
              <RegionFilterButton label="中国" />
              <RegionFilterButton label="四国" />
              <RegionFilterButton label="九州・沖縄" />
              <RegionFilterButton
                label={
                  <>
                    オンライン
                    <br />
                    生配信
                  </>
                }
              />
            </div>
            <div className="mt-6">
              <div className="text-white bg-[#3D3A39] text-center w-full h-[66px] text-[32px] font-yakunoto font-bold flex flex-col justify-center">
                関東
              </div>
              <div className="bg-[#FFFFFF] px-[80px] pt-[20px] pb-[60px]">
                <AccordionItem label="東京都" />
                <AccordionItem label="神奈川県" />
                <AccordionItem label="埼玉県" />
                <AccordionItem label="千葉県" />
                <AccordionItem label="茨城県" />
                <AccordionItem label="栃木県" />
                <AccordionItem label="群馬県" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[30px] mb-[80px] mx-[355px]">
        <div className="bg-[#F1F1F1] h-[1089px] w-full">
          <div class="text-[#BB0C10] font-yakunoto text-[2.5rem] font-bold mb-[0.75em] text-center pt-[40px]">
            コース案内
          </div>
          <div class="font-yakunoto text-[2rem] font-extrabold text-center">大学受験</div>
          <div className="flex mx-[50px] justify-between mt-[30px]">
            <CourseLink
              label="高校一年生"
              contents="学習の難易度が大幅に上がる高校1年生。部活との両立をしながら、わずかな時間でもっとも効率のよい勉強方法とスケジュールで高校生活を楽しみながら、難関大学合格を目指そう！"
              text="高校1年生向けコース詳細"
              color="bg-[#1c3d76] text-[#1c3d76]"
            />
            <CourseLink
              label="高校2年生"
              contents="部活や学校生活を充実させながら、現役での大学合格に向けた準備が大切！英語や数学といった主要科目の基礎を完成させるなら武田塾の自学自習システムを使おう！"
              text="高校2年生向けコース詳細"
              color="bg-[#C0262D] text-[#C0262D]"
            />
          </div>
          <div className="flex mx-[50px] justify-between mt-[40px]">
            <CourseLink
              label="高校3年生"
              contents="いよいよ受験生となり、受験勉強も本格化。高1・高2で勉強をおろそかにしていたなら、武田塾のノウハウをフルに活かした勉強法がもっともおすすめ。効率が最も良い自学自習で1年で遅れを取り戻そう。"
              text="高校3年生向けコース詳細"
              color="bg-[#1E6048] text-[#1E6048]"
            />
            <CourseLink
              label="既卒生"
              contents="納得のいく1年をどう過ごせるかはあなた次第。現役で全落ちから第一志望へ逆転合格への実績がある武田塾は「すべてのスケジュールを明確に提示」しています。現役時の失敗を取り返すなら今がチャンス！"
              text="既卒生向けコース詳細"
              color="bg-[#5F3B86] text-[#5F3B86]"
            />
          </div>
          <div class="font-yakunoto text-[2rem] font-black text-center mt-[40px]">高校・中高一貫校受験</div>
          <div className="flex mx-[50px] justify-between mt-[40px]">
            <CourseLink
              label="小中学生"
              contents="早いタイミングから勉強のやり方を身につけると、高校や大学受験において大きく活かすことができます。机に向かう時間を増やして、参考書を用いて自学自習する時こそが学力を伸ばすタイミングなのです。"
              text="小学生・中学生向けコース詳細"
              color="bg-[#333397] text-[#333397]"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#f1f1f1] w-full h-[1010px] relative">
        <div
          className='bg-[url("https://static.takeda.tv/images/2023/top/top_ano.webp")] bg-no-repeat w-[500px] relative'
          style={{ backgroundSize: '100% auto', height: 'calc(100% + 50px)', left: '250px', top: '-50px' }}
        ></div>
      </div>
    </div>
  );
}
