import Head from "next/head";
import BackGround from "../components/molecules/BackGround";
import styles from "../styles/aboutUs.module.scss";
import animeStyles from "../hooks/animation.module.css";
import Image from "next/image";
import type { NextPage } from "next";
import Animation from "../components/templates/Animation";
import { getWindowSize } from "../hooks/GetWindowSize";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  childFadeInUpContainer,
  childFadeInUpItems,
  childFadeContainer,
  childFadeItems,
} from "../hooks/variants";

const AboutUs: NextPage = () => {
  const description =
    '令和の軍師のMISSIONは"広報PRで事業成長を実現する"というものです。クライアントの集客・採用・ブランディングを勝利に導きます。また学生起業した道のりやワッと驚くミッションまで令和の軍師の歴史を入れています。';
  const title = "ABOUT US -私たちについて-";

  const { width } = getWindowSize();

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
      {/* <Animation /> */}
      <BackGround opacity={0.95}>
        <div className={styles.container}>
          <div className={styles.about_us_ttl}>
            <div className={styles.img_inner}>
              <Image
                objectFit="contain"
                width={1280}
                height={450}
                src="/img/aboutus.png"
                alt="Aboutusタイトル画像"
              />
            </div>
          </div>

          {/* 私たちのミッション */}
          {width > 768 ? (
            <motion.div
              variants={childFadeInUpContainer}
              initial="hidden"
              animate="show"
              className={`${styles.mission} ${styles.rightImage}`}
            >
              <section className={`${styles.mission_inner} ${styles.rightImageInner}`}>
                <motion.h2 variants={childFadeInUpItems}>
                  <motion.span>CONCEPT</motion.span>
                </motion.h2>
                <motion.p variants={childFadeInUpItems} className={styles.sub_ttl}>
                  令和の軍師
                </motion.p>
                <motion.p variants={childFadeItems} className={styles.detail}>
                  企業の戦を勝利に導く、令和時代の軍師となる。そんな熱い想いから「令和の軍師」と名付けた。
                  <br />
                  ホームページや名刺など、全てのビジュアルを軍師に相応しい、先進的な和テイストに仕上げた。
                  <br />
                  ロゴは家紋とドア（変化・挑戦の象徴）を融合。服装は毎日着物、本社は築百年の古民家である。
                </motion.p>
              </section>
              <section>
                <div className={styles.mission_img}>
                  <motion.div variants={childFadeItems} className={styles.img_inner}>
                    <Image
                      width={420}
                      height={420}
                      src="/img/senkusha.png"
                      alt="先駆者"
                    />
                  </motion.div>
                </div>
              </section>
            </motion.div>
          ) : (
            <motion.div
              variants={childFadeInUpContainer}
              initial="hidden"
              animate="show"
              className={`${styles.mission} ${styles.rightImage}`}
            >
              <section className={`${styles.mission_inner} ${styles.rightImageInner}`}>
                <motion.h2 variants={childFadeInUpItems}>
                  <motion.span>CONCEPT</motion.span>
                </motion.h2>
                <motion.p variants={childFadeInUpItems} className={styles.sub_ttl}>
                  令和の軍師
                </motion.p>
                <motion.p variants={childFadeItems} className={styles.detail}>
                  企業の戦を勝利に導く、令和時代の軍師となる。
                  <br />
                  そんな熱い想いから「令和の軍師」と名付けた。
                  <br />
                  ホームページや名刺など、全てのビジュアルを
                  <br />
                  軍師に相応しい先進的な和テイストに仕上げた。
                  <br />
                  ロゴは家紋とドア（変化・挑戦の象徴）を融合。
                  <br />
                  服装は毎日着物、本社は築百年の古民家である。
                </motion.p>
              </section>
              <section>
                <div className={styles.mission_img}>
                  <motion.div variants={childFadeItems} className={styles.img_inner}>
                    <Image
                      width={420}
                      height={420}
                      src="/img/senkusha.png"
                      alt="先駆者"
                    />
                  </motion.div>
                </div>
              </section>
            </motion.div>
          )}
          {/* 私たちのミッション終わり */}

          {/* 私たちのビジョン */}
          {width > 768 ? (
            <motion.div
              variants={childFadeInUpContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.8, margin: "200px" }}
              className={styles.vision}
            >
              <section className={styles.vision_img}>
                <motion.div variants={childFadeItems} className={styles.img_inner}>
                  <Image
                    width={640}
                    height={640}
                    src="/img/ourconcept.png"
                    alt="時代を壊す"
                  />
                </motion.div>
              </section>

              <section className={styles.vision_inner}>
                <motion.h2 variants={childFadeInUpItems}>VISION①</motion.h2>
                <motion.p variants={childFadeInUpItems} className={styles.sub_ttl}>
                  先駆者を創る
                </motion.p>
                <motion.p variants={childFadeItems} className={styles.detail}>
                  先駆者は、世の中の固定観念・常識を打ち破り、他社とは異なる発想で、新しい価値を提供する。
                  <br />
                  そして、事業成長を遂げ、業界に変化を起こす。その引金を引けるのは、きっと若者・よそ者だ。
                  <br />
                  Ｚ世代ならではのクリエイティビティを発揮し、令和の軍師は、クライアントを先駆者に変える。
                </motion.p>
              </section>
            </motion.div>
          ) : (
            <motion.div
              variants={childFadeInUpContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.8, margin: "200px" }}
              className={styles.vision}
            >
              <section className={styles.vision_img}>
                <motion.div variants={childFadeItems} className={styles.img_inner}>
                  <Image
                    width={640}
                    height={640}
                    src="/img/ourconcept.png"
                    alt="時代を壊す"
                  />
                </motion.div>
              </section>

              <section className={styles.vision_inner}>
                <motion.h2 variants={childFadeInUpItems}>VISION①</motion.h2>
                <motion.p variants={childFadeInUpItems} className={styles.sub_ttl}>
                  先駆者を創る
                </motion.p>
                <motion.p variants={childFadeItems} className={styles.detail}>
                  先駆者は、世の中の固定観念・常識を打ち破り、
                  <br />
                  他社とは異なる発想で、新しい価値を提供する。
                  <br />
                  そして、事業成長を遂げ、業界に変化を起こす。
                  <br />
                  その引金を引けるのは、きっと若者・よそ者だ。
                  <br />
                  Ｚ世代ならではのクリエイティビティを発揮し、
                  <br />
                  令和の軍師は、クライアントを先駆者に変える。
                </motion.p>
              </section>
            </motion.div>
          )}
          {/* 私たちのビジョン終わり */}


          {/* 令和の軍師コンセプト */}
          {width > 768 ? (
            <motion.div
              variants={childFadeInUpContainer}
              initial="hidden"
              animate="show"
              className={`${styles.mission} ${styles.rightImage}`}
            >
              <section
                className={`${styles.mission_inner} ${styles.rightImageInner}`}
              >
                <motion.h2 variants={childFadeInUpItems}>
                  <motion.span>VISION②</motion.span>
                </motion.h2>
                <motion.p
                  variants={childFadeInUpItems}
                  className={styles.sub_ttl}
                >
                  日本の閉塞感を打破する
                </motion.p>
                <motion.p variants={childFadeItems} className={styles.detail}>
                  失われた３０年。少子高齢化に加え、人口減少。多くの若者は、日本の未来に不安を感じている。
                  <br />
                  だが、次世代こそが、社会に変化と革新を生む。我々も企業の軍師として、先駆者を創り続ける。
                  <br />
                  先駆者の姿は、必ず次の挑戦者に勇気を与える。先駆者に影響されて、また次の挑戦が生まれる。
                </motion.p>
              </section>
              <section>
                <div className={styles.mission_img}>
                  <motion.div
                    variants={childFadeItems}
                    className={styles.img_inner}
                  >
                    <Image
                      width={420}
                      height={420}
                      src="/img/vision.png"
                      alt="傘を持つ諸富稜"
                    />
                  </motion.div>
                </div>
              </section>
            </motion.div>
          ) : (
            <motion.div
              variants={childFadeInUpContainer}
              initial="hidden"
              animate="show"
              className={`${styles.mission} ${styles.rightImage}`}
            >
              <section
                className={`${styles.mission_inner} ${styles.rightImageInner}`}
              >
                <motion.h2 variants={childFadeInUpItems}>
                  <motion.span>VISION②</motion.span>
                </motion.h2>
                <motion.p
                  variants={childFadeInUpItems}
                  className={styles.sub_ttl}
                >
                  日本の閉塞感を打破する
                </motion.p>
                <motion.p variants={childFadeItems} className={styles.detail}>
                  失われた３０年。少子高齢化に加え、人口減少。
                  <br />
                  多くの若者は、日本の未来に不安を感じている。
                  <br />
                  だが、次世代こそが、社会に変化と革新を生む。
                  <br />
                  我々も企業の軍師として、先駆者を創り続ける。
                  <br />
                  先駆者の姿は、必ず次の挑戦者に勇気を与える。
                  <br />
                  先駆者に影響されて、また次の挑戦が生まれる。
                </motion.p>
              </section>
              <section>
                <div className={styles.mission_img}>
                  <motion.div
                    variants={childFadeItems}
                    className={styles.img_inner}
                  >
                    <Image
                      width={420}
                      height={420}
                      src="/img/vision.png"
                      alt="傘を持つ諸富稜"
                    />
                  </motion.div>
                </div>
              </section>
            </motion.div>
          )}
          {/* 令和の軍師コンセプト終わり */}

          {/* 創業秘話 */}
          {width > 768 ? (
            <motion.div
              variants={childFadeInUpContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.8, margin: "200px" }}
              className={styles.vision}
            >
              <section className={styles.vision_img}>
                <motion.div
                  variants={childFadeItems}
                  className={styles.img_inner}
                >
                  <Image
                    width={640}
                    height={480}
                    src="/img/story_img.png"
                    alt="創業秘話の画像"
                  />
                </motion.div>
              </section>

              <section className={styles.vision_inner}>
                <motion.h2 variants={childFadeInUpItems}>VISION③</motion.h2>
                <motion.p
                  variants={childFadeInUpItems}
                  className={styles.sub_ttl}
                >
                  若者に挑戦する勇気を
                </motion.p>
                <motion.p variants={childFadeItems} className={styles.detail}>
                  自分が学生起業する時、かなりの反対を受けた。どうせ上手くいかないと、何十人にも言われた。
                  <br />
                  挑戦したいのに、怖くて一歩目が踏み出せない。そんな若者の葛藤、迷いが痛いほど理解できる。
                  <br />
                  だからこそ、自分のような若者が挑戦し続けて、必ず成功して、若者に挑戦する勇気を与えたい。
                </motion.p>
              </section>
            </motion.div>
          ) : (
            <motion.div
              variants={childFadeInUpContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.8, margin: "200px" }}
              className={styles.vision}
            >
              <section className={styles.vision_img}>
                <motion.div
                  variants={childFadeItems}
                  className={styles.img_inner}
                >
                  <Image
                    width={640}
                    height={480}
                    src="/img/story_img.png"
                    alt="創業秘話の画像"
                  />
                </motion.div>
              </section>

              <section className={styles.vision_inner}>
                <motion.h2 variants={childFadeInUpItems}>VISION③</motion.h2>
                <motion.p
                  variants={childFadeInUpItems}
                  className={styles.sub_ttl}
                >
                  若者に挑戦する勇気を
                </motion.p>
                <motion.p variants={childFadeItems} className={styles.detail}>
                  自分が学生起業する時、かなりの反対を受けた。
                  <br />
                  どうせ上手くいかないと、何十人にも言われた。
                  <br />
                  挑戦したいのに、怖くて一歩目が踏み出せない。
                  <br />
                  そんな若者の葛藤、迷いが痛いほど理解できる。
                  <br />
                  だからこそ、自分のような若者が挑戦し続けて、
                  <br />
                  必ず成功して、若者に挑戦する勇気を与えたい。
                </motion.p>
              </section>
            </motion.div>
          )}

          {/* 創業秘話　終わり */}

          {/* デジタルによる変化 */}
          {width > 768 ? (
            <motion.div
              variants={childFadeInUpContainer}
              initial="hidden"
              animate="show"
              className={`${styles.mission} ${styles.rightImage}`}
            >
              <section
                className={`${styles.mission_inner} ${styles.rightImageInner}`}
              >
                <motion.h2 variants={childFadeInUpItems}>
                  <motion.span>STORY</motion.span>
                </motion.h2>
                <motion.p variants={childFadeItems} className={styles.detail}>
                  ２０歳で学生起業し、７年経営を続けています。設立時はデザイン＆動画の制作事業が中心です。
                  <br />
                  その後、宣伝→ブランディング→事業開発まで、専門分野を拡大しました。成長に伴い肩書きも
                  <br />
                  制作会社→広報ＰＲ会社→ブランディング会社→今のマーケティング会社と変化してきました。
                </motion.p>
              </section>
              <section>
                <div className={styles.mission_img}>
                  <motion.div
                    variants={childFadeItems}
                    className={styles.img_inner}
                  >
                    <Image
                      width={420}
                      height={420}
                      src="/img/mono_tommy.png"
                      alt="傘を持つ諸富稜"
                    />
                  </motion.div>
                </div>
              </section>
            </motion.div>
          ) : (
            <motion.div
              variants={childFadeInUpContainer}
              initial="hidden"
              animate="show"
              className={`${styles.mission} ${styles.rightImage}`}
            >
              <section
                className={`${styles.mission_inner} ${styles.rightImageInner}`}
              >
                <motion.h2 variants={childFadeInUpItems}>
                  <motion.span>STORY</motion.span>
                </motion.h2>
                <motion.p variants={childFadeItems} className={styles.detail}>
                  ２０歳で学生起業し、７年経営を続けています。
                  <br />
                  設立時はデザイン＆動画の制作事業が中心です。
                  <br />
                  その後、宣伝→ブランディング→事業開発まで
                  <br />
                  専門分野を拡大しました。成長に伴い肩書きも
                  <br />
                  制作会社→広報ＰＲ会社→ブランディング会社、
                  <br />
                  →今のマーケティング会社と変化してきました。
                </motion.p>
              </section>
              <section>
                <div className={styles.mission_img}>
                  <motion.div
                    variants={childFadeItems}
                    className={styles.img_inner}
                  >
                    <Image
                      width={420}
                      height={420}
                      src="/img/mono_tommy.png"
                      alt="傘を持つ諸富稜"
                    />
                  </motion.div>
                </div>
              </section>
            </motion.div>
          )}

          {/* デジタルによる変化 */}

          {/* 宣言内容 */}

          <motion.div
            variants={childFadeInUpContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.8, margin: "200px" }}
            className={styles.declaration}
          >
            <section>
              <div className={styles.declaration__item}>
                <Image
                  width={200}
                  height={200}
                  src="/img/security_action_hitotsuboshi-large_color.png"
                  alt="SECURITY ACTIONロゴマーク"
                />
                <p>一つ星を宣言しました</p>
              </div>
            </section>
          </motion.div>

          {/* 宣言内容 */}

          {/* 会社概要　始まり */}
          <motion.div
            variants={childFadeContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.8, margin: "200px" }}
            className={styles.info}
          >
            <motion.h3 variants={childFadeItems}>information</motion.h3>
            <motion.div variants={childFadeItems} className={styles.table}>
              <table>
                <tbody>
                  <tr>
                    <td>会社名</td>
                    <td>
                      株式会社令和の軍師<br></br>
                      （旧 株式会社MOVEDOOR）
                    </td>
                  </tr>
                  <tr>
                    <td>沿革</td>
                    <td>
                      2018　スタジオMOVEDOOR 創業 <br />
                      2022　株式会社MOVEDOOR 設立
                      <br />
                      2023　株式会社令和の軍師 社名変更
                      <br />
                    </td>
                  </tr>
                  <tr>
                    <td>所在地</td>
                    <td>
                      本社：兵庫県三田市中町7-39<br></br>
                      支社：東京都新宿区西落合2-16-5-202
                    </td>
                  </tr>
                  <tr>
                    <td>資本金</td>
                    <td>5,000,000円</td>
                  </tr>
                  <tr>
                    <td>代表者</td>
                    <td>代表取締役 諸富稜（もろとみりょう）</td>
                  </tr>
                  <tr>
                    <td>事業内容</td>
                    <td>
                      事業戦略立案／マーケティングコンサルティング／映像制作／WEBサイト制作／オンラインショップ制作／ロゴ制作／SNS施策／写真撮影／紙面デザイン／グッズ制作／SEO＆MEO施策／メディア活用／ブランディング／WEB広告／YouTube／インフルエンサー起用／トータルデザイン　
                    </td>
                  </tr>
                  <tr>
                    <td>取引銀行</td>
                    <td>池田泉州銀行</td>
                  </tr>
                  <tr>
                    <td>社会貢献</td>
                    <td>
                    古民家再生／学生活動の相談支援／学生起業の相談支援／学生の活動拠点／元 三田市地域再生協働員／元 三田市民祭り検討委員／元 三田市観光ビジョン委員／三田学園中学等での講演／関西学院大学等での授業・メンター就任など。
                    </td>
                  </tr>
                </tbody>
              </table>
            </motion.div>
          </motion.div>
          {/* 会社概要　終わり */}
        </div>
      </BackGround>
    </>
  );
};

export default AboutUs;
