import Head from "next/head";
import BackGround from "../components/molecules/BackGround";
import styles from "../styles/aboutUs.module.scss";
import animeStyles from "../hooks/animation.module.css";
import Image from "next/image";
import type { NextPage } from "next";
import Animation from "../components/templates/Animation";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  childFadeInUpContainer,
  childFadeInUpItems,
  childFadeContainer,
  childFadeItems,
} from "../hooks/variants";

const aboutUs: NextPage = () => {
  const description =
    '令和の軍師のMISSIONは"広報PRで事業成長を実現する"というものです。クライアントの集客・採用・ブランディングを勝利に導きます。また学生起業した道のりやワッと驚くミッションまで令和の軍師の歴史を入れています。';
  const title = "ABOUT US -私たちについて-";
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
                <motion.span>Our mission</motion.span>
              </motion.h2>
              <motion.p
                variants={childFadeInUpItems}
                className={styles.sub_ttl}
              >
                企業の長期利益を最大化
              </motion.p>
              <motion.p variants={childFadeItems} className={styles.detail}>
                令和の軍師と共に、他社が真似できない、新たな商品・サービスを開発しませんか？ブランディング＆プロモーションも同様。独自のアイデア・戦略を提案することで、競合他社と圧倒的な差別化を実現します。消費者から選ばれ続ける仕組みを構築し、貴社の利益を長期に渡り、最大化します。
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
                    src="/img/senkusha.png"
                    alt="先駆者"
                  />
                </motion.div>
              </div>
            </section>
          </motion.div>
          {/* 私たちのミッション終わり */}

          {/* 私たちのビジョン */}

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
                  height={640}
                  src="/img/vision.png"
                  alt="時代を壊す"
                />
              </motion.div>
            </section>

            <section className={styles.vision_inner}>
              <motion.h2 variants={childFadeInUpItems}>Our vision</motion.h2>
              <motion.p
                variants={childFadeInUpItems}
                className={styles.sub_ttl}
              >
                日本の閉塞感を打破する
              </motion.p>
              <motion.p variants={childFadeItems} className={styles.detail}>
                失われた３０年。少子高齢化に人口減少。いまの若者は日本に閉塞感を感じている。日本が衰退するなら、挑戦には意味が無い。上手くはずが無い。　—　本当にそうだろうか？　我々は強く訴える。次世代を歩む我々が、社会に挑戦と変化を生み出す。業界に新しい価値を生む、先駆者を創る。その積み重ねが次の挑戦に勇気を与える。先駆者に影響され、次の挑戦が生まれる。これが、令和の軍師の存在意義だ。さぁ、日本の閉塞感を打破しよう。
              </motion.p>
            </section>
          </motion.div>

          {/* 私たちのビジョン　終わり */}

          {/* 令和の軍師コンセプト */}

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
                <motion.span>Our CONCEPT</motion.span>
              </motion.h2>
              <motion.p
                variants={childFadeInUpItems}
                className={styles.sub_ttl}
              >
                事業を成功に導く軍師
              </motion.p>
              <motion.p variants={childFadeItems} className={styles.detail}>
                戦いに勝利し、歴史に名を残した将軍たち、その成功の陰に、必ず軍師あり。世はＩＴ戦国時代だ。企業の戦を勝利に導く、令和時代の軍師となる。そんな熱い想いから、「令和の軍師」と名付けた。コンセプトを体現する和のビジュアルに仕上げた。古風ではなく、令和に相応しい和のデザインだ。ロゴは社名であるドアを家紋に組み込む。服装は着物、本社は築百年の古民家、ここまで徹底する。
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
                    src="/img/ourconcept.png"
                    alt="傘を持つ諸富稜"
                  />
                </motion.div>
              </div>
            </section>
          </motion.div>

          {/* 令和の軍師コンセプト終わり */}

          {/* 創業秘話 */}

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
              <motion.h2 variants={childFadeInUpItems}>OUR STORY</motion.h2>
              <motion.p
                variants={childFadeInUpItems}
                className={styles.sub_ttl}
              >
                創業秘話
              </motion.p>
              <motion.p variants={childFadeItems} className={styles.detail}>
                2018年、関西学院大学に通う学生５人が業を起こす。当時は映像とデザインを専門とした「制作会社」だった。しかし、信用も実績も無い学生が仕事やお金を得ることは、あまりに難しいことだった。さらに、大学卒業と同時にコロナ禍に直面する。それでも何度も壁を乗り越え、ゼロから実績を重ね、無我夢中で制作に没頭する。一方で、顧客の事業成長に貢献する実感が持てずにいた。
                ひとつの制作物では、事業成長を実現できない。そんな中で新たな答えに辿り着く。戦略・制作・発信の全てを担うこと。そして、「令和の軍師」として成長と変化を売る広報ＰＲ会社を目指し始める。
              </motion.p>
            </section>
          </motion.div>

          {/* 創業秘話　終わり */}

          {/* デジタルによる変化 */}
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
                <motion.span>Next generation</motion.span>
              </motion.h2>
              <motion.p variants={childFadeItems} className={styles.detail}>
                デジタル技術の発展や進化は、社会全体を急速に変化させていくものであると認識しています。それに伴い、弊社自身も様々な社会ニーズに対応する企業へと変わっていかなといけない。高解像度やVRなど新たな映像技術の活用、ソーシャルメディアを中心としたマーケティング戦略の変革、データ分析を通じたターゲットマーケティングの向上、これらに十分対応できる企業に成長することが社会の競争環境における優位性を確立する必須の方法であると考える。
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
                    src="/img/ourconcept.png"
                    alt="傘を持つ諸富稜"
                  />
                </motion.div>
              </div>
            </section>
          </motion.div>

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
                    <td>ボランティア</td>
                    <td>
                      古民家再生／学生の居場所づくり／農村地域活性化／里山体験の観光事業
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

export default aboutUs;
