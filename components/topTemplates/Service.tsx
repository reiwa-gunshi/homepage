import { getWindowSize } from "../../hooks/GetWindowSize";
import styles from "../../styles/Home.module.scss";
import Image from "next/image";
import { workTag } from "../../lib/type";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import animation from "../../hooks/animation.module.scss";

const Service = ({ workTag }: workTag) => {
  const { width } = getWindowSize();

  const [worksRef, inView] = useInView({
    threshold: [0.25],
    triggerOnce: true,
  });

  const [ScrollRef, SecondInView] = useInView({
    threshold: [0.25],
    triggerOnce: true,
  });

  const [SkillRef, ThirdInView] = useInView({
    threshold: [0.25],
    triggerOnce: true,
  });

  const threePoint = [
    {
      ttl: "事業戦略",
      contents:
        "3C分析により、独自の価値（競合は提供できず、御社だけが提供できる価値）を発掘。あるいは、独自の価値を新しく発想する。",
    },
    {
      ttl: "コンセプト",
      contents:
        "何十もの案から、独自の価値が伝わる強烈なブランドコンセプトを策定する。企業理念（ミッション・ビジョン）の策定まで可能。",
    },
    {
      ttl: "クリエイティブ",
      contents:
        "コンセプトや理念を伝えるツール（動画・サイト・資料など）を作成。同じ世界観でデザインを統一し、ブランドイメージを構築する。",
    },
    {
      ttl: "プロモーション",
      contents:
        "貴社にベストな宣伝方法をオーダーメイドで考案・実行する。紙面広告から最新SNSまで専門家が揃い、全ての宣伝施策に精通。",
    },
  ];

  return (
    <>
      <div className={styles.service}>
        <div className={styles.container}>
          <div className={styles.service_img_inner}>
            <Image
              width={368}
              height={1408}
              layout="responsive"
              className={styles.mesh}
              src="/svg/service_bg_word.svg"
              alt="Service"
            />
          </div>

          <div className={styles.strong_img_inner}>
            <Image
              width={254}
              height={146}
              layout="responsive"
              src="/svg/strongPoint.svg"
              alt="STRONGPOINT"
            />
          </div>
        </div>

        <div className={styles.inner}>
          <div className={styles.service_detail}>
            <div ref={worksRef} className={styles.serviceFirstZoon}>
              <div
                className={`${
                  inView ? animation.fadeInUp : animation.fadeInUpStart
                } ${styles.strength_img_inner}`}
              >
                <Image
                  width={150}
                  height={525}
                  layout="responsive"
                  className={styles.mesh}
                  src="/svg/cool_ttl.svg"
                  alt="日本一若いブランディング会社"
                />
              </div>

              <div className={styles.service_content_p}>
                <p>
                  ブランディング会社の役割は選ばれる仕組みづくり。事業戦略・コンセプト策定・デザイン・プロモーションを駆使し、競合と圧倒的に差別化。その結果、顧客に確実に選ばれる存在に導き、売上を飛躍させる。また、戦略だけでなく、動画・デザイン・サイト等、制作の品質まで責任を持つ。トータルで担うからこそ、合計費用や担当者負担を半減し、費用対効果を最大化する。
                </p>
              </div>

              <div className={styles.competitor_chart}>
                <div className={styles.chart}>
                  <div className={styles.chart_base}>
                    <Image
                      width={615}
                      height={491}
                      layout="responsive"
                      src="/img/chart_base.png"
                      alt="ベースの表"
                    />
                  </div>
                  <div
                    className={`${styles.chart_red} ${styles.chartAbsolute}`}
                  >
                    <Image
                      width={615}
                      height={491}
                      style={{ animationDelay: "0.5s" }}
                      className={`${
                        inView ? animation.scaleUp : animation.scaleUpStart
                      }`}
                      layout="responsive"
                      src="/img/chart_red.png"
                      alt="赤いの表"
                    />
                  </div>
                  <div
                    className={`${styles.chart_green} ${styles.chartAbsolute}`}
                  >
                    <Image
                      width={615}
                      height={491}
                      style={{ animationDelay: "1s" }}
                      className={`${
                        inView ? animation.scaleUp : animation.scaleUpStart
                      }`}
                      layout="responsive"
                      src="/img/chart_green.png"
                      alt="緑の表"
                    />
                  </div>
                  <div
                    className={`${styles.chart_yellow} ${styles.chartAbsolute}`}
                  >
                    <Image
                      width={615}
                      height={491}
                      style={{ animationDelay: "1.5s" }}
                      className={`${
                        inView ? animation.scaleUp : animation.scaleUpStart
                      }`}
                      layout="responsive"
                      src="/img/chart_yellow.png"
                      alt="黄色の表"
                    />
                  </div>
                  <div
                    className={`${styles.chart_line} ${styles.chartAbsolute}`}
                  >
                    <Image
                      width={615}
                      height={491}
                      layout="responsive"
                      src="/img/chart_line.png"
                      alt="ベースの線"
                    />
                  </div>
                </div>
                <div className={styles.competitor}>
                  <div className={styles.Competitor_mycompany}>
                    <Image
                      width={88}
                      height={32}
                      layout="responsive"
                      src="/img/Competitor_mycompany.png"
                      alt="弊社の強み"
                    />
                  </div>

                  <div className={styles.Competitor_big}>
                    <Image
                      width={216}
                      height={24}
                      layout="responsive"
                      src="/img/Competitor_big.png"
                      alt="マーケ・コンサル"
                    />
                  </div>

                  <div className={styles.Competitor_nomal}>
                    <Image
                      width={120}
                      height={24}
                      layout="responsive"
                      src="/img/Competitor_nomal.png"
                      alt="制作会社"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.serviceSecondZoon}>
              <div ref={ScrollRef} className={styles.three_point}>
                <div className={styles.cont}>
                  {threePoint.map((one: any, index: number) => {
                    return (
                      <div className={styles.japaneseScrollBase} key={index}>
                        <div
                          style={{ animationDelay: index * 0.2 + "s" }}
                          className={`${styles.japaneseScroll_main} ${
                            SecondInView
                              ? animation.scrollFromLeft
                              : animation.scrollFromLeftStart
                          }`}
                        >
                          <picture>
                            <source
                              media="(max-width: 768px)"
                              srcSet="/svg/japaneseScroll_main_sp.png"
                            />
                            <source
                              media="(min-width: 769px)"
                              srcSet="/svg/japaneseScroll_main.png"
                            />
                            <img src="fallback-image.jpg" alt="巻物の巻" />
                          </picture>
                        </div>

                        <div className={styles.ScrollBase}>
                          <div
                            style={{ animationDelay: index * 0.2 + "s" }}
                            className={`${styles.ScrollBase_cont} ${
                              SecondInView
                                ? animation.overFlowAnime
                                : animation.overFlowAnimeStart
                            }`}
                          >
                            <div className={styles.japaneseScrollCont}>
                              <Image
                                width={1500}
                                height={478}
                                layout="responsive"
                                src="/svg/japaneseScrollBase.png"
                                alt="巻物のベース"
                              />
                            </div>
                            <div className={styles.japaneseScrollCont_txt}>
                              <h4>{one.ttl}</h4>
                              <p>{one.contents}</p>
                            </div>
                          </div>
                          <div className={styles.scroll_line}>
                            <Image
                              width={120}
                              height={200}
                              layout="responsive"
                              src="/svg/scroll_line.png"
                              alt="巻物の線"
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className={styles.service_intro} ref={SkillRef}>
                <h5
                  className={`${
                    ThirdInView ? animation.fadeInUp : animation.fadeInUpStart
                  } ${styles.ttl}`}
                >
                  <Image
                    width={80}
                    height={391}
                    layout="responsive"
                    src="/svg/skill_word.svg"
                    alt="スキル文字"
                  />
                </h5>
                <ul>
                  {workTag.map((items: any, index: number) => {
                    console.log(items);
                    return (
                      <li
                        key={index}
                        style={{ animationDelay: index * 0.2 + "s" }}
                        className={
                          ThirdInView
                            ? animation.fadeInUp
                            : animation.fadeInUpStart
                        }
                      >
                        <Link
                          href={{
                            pathname: `/works/`,
                            query: { tag: items.fields.worksTagName },
                          }}
                        >
                          <a>
                            <div className={styles.icon_img}>
                              <div className={styles.iconInner}>
                                <Image
                                  src={
                                    "https:" + items.fields.icon.fields.file.url
                                  }
                                  layout="fill"
                                  alt="アイコン名前"
                                />
                              </div>
                            </div>
                            <p>{items.fields.worksTagName}</p>
                          </a>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.yoshimoto_img}>
            <div className={styles.img_inner}>
              <Image
                src="/img/yoshimoto_img.png"
                layout="fill"
                alt="吉本晋也"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
