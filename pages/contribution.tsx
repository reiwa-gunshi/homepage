import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/contribution.module.scss";
import { useRef } from "react";
import BackGround from "../components/molecules/BackGround";
import { motion } from "framer-motion";
import Animation from "../components/templates/Animation";
import { childFadeInUpWorksContainer } from "../hooks/variants";
import { contribution_type } from "../lib/type";

const ContributionPost: contribution_type[] = [
  {
    ttl: "古民家オフィス",
    img_path: "/img/kominkaOffice_img.png",
    img_width: 960,
    img_height: 742,
    detail:
      "兵庫県三田市。自然と街が両立するローカルエリアです。弊社オフィスは三田駅徒歩２分にある築100年の古民家。大学４年生（学生起業）の最中に出会いました。なんと10年以上も空き家です。荷物やホコリ、汚れだらけで足の踏み場も無い場所でした。空き家は盗難の危険性もあり、地域イメージを悪化させます。人通りの多い駅前であれば尚更。また、後述する地域活性化の拠点を創るには、興味や関心を集める必要があります。そこで、数百人の参加者を集めて、大清掃イベントやリノベーションイベントを何度も企画しました。さらに、場の活用法を考えるアイデア会議を繰り返し、地域の熱量が集まる立派な空間に再生しました。",
  },
  {
    ttl: "学生支援",
    img_path: "/img/studentSupport_img.png",
    img_width: 960,
    img_height: 742,
    detail:
      "一度きりの大学生活、大学の中だけでなく、地域や社会を舞台に挑戦して欲しい。色んな大人との出会いの中で、生き方の選択肢や価値観を広げて欲しい。そんな想いで、弊社オフィスに学生の活動拠点を設置。学生の活動支援や交流づくりをリードする、新たな学生団体を設立しました。学生の多様なプロジェクトを生み出し、活動を支えながら、地域課題を解決する団体です。行政とも連携して「学生のまちづくり」で地域を活性化。当然、コロナ禍も学生に必要な出会いや挑戦は絶やさない。そのためにオンラインを駆使した会議を開催し、支援を続けてきました。今後も学生や若者に優しい街づくりの一旦を担っていきます。",
  },
  {
    ttl: "子ども食堂",
    img_path: "/img/childRestrant_img.png",
    img_width: 960,
    img_height: 742,
    detail:
      "両親が共働きで、１人でご飯を食べている。母子家庭で、栄養満点の料理が食べられない。そんな子どものために、弊社オフィスにて子ども食堂が定期開催されています。子どもたちに無償で食事を提供する取り組みです。いつも頑張っている親御さんも、たまには安心して子どもを預けて、身体と心を休めて欲しいという想いも。この活動は、地域の大学生と地域住民の協力で成り立っています。子どもたちと年齢が近い大学生はやはり大人気。お姉ちゃん・お兄ちゃんと呼べる存在と出会い、触れ合えることは、子どもの人格形成にとって非常に大切です。大学生と子どもたちの交流、お遊びから学習支援まで幅広く手掛けています。",
  },
];

const Contribution: NextPage = () => {
  //恒例のタイトルとディスクリプション変換
  const description = "株式会社令和の軍師が行っている社会貢献です。";
  const title = "Contribution -社会貢献-";

  const container = useRef(null);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} key="description" />
        <meta property="og:title" content={title} key="og_title" />
        <meta
          property="og:description"
          content={description}
          key="og_description"
        />
      </Head>

      <Animation />
      <BackGround opacity={0.5}>
        <div className={styles.bestWorks} id="bestWorks">
          <div className={styles.white_bg}>
            <div className={styles.container}>
              <div className={styles.ttl}>
                <h2>Contribution</h2>
                <hr />
                <p>社会貢献</p>
              </div>
              <motion.div
                variants={childFadeInUpWorksContainer}
                initial="hidden"
                animate="show"
                className={styles.bestWork_cont}
              >
                <ul className={styles.bestWork_ul} ref={container}>
                  {ContributionPost.map(
                    (items: any, Contribution_index: number) => {
                      return (
                        <>
                          <motion.li
                            key={Contribution_index}
                            variants={{
                              hidden: { opacity: 0, y: 50 },
                              show: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                  delay: Contribution_index * 0.2,
                                },
                              },
                            }}
                            className={styles.post}
                          >
                            <h3>{items.ttl}</h3>
                            <div className={styles.bestworksimg}>
                              <Image
                                src={items.img_path}
                                layout="responsive"
                                objectFit="contain"
                                width={items.img_width}
                                height={items.img_height}
                                alt={items.ttl}
                              />
                            </div>
                            <p>{items.detail}</p>
                          </motion.li>
                        </>
                      );
                    }
                  )}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </BackGround>
    </>
  );
};

export default Contribution;
