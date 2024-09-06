import { getWindowSize } from "../../hooks/GetWindowSize";
import styles from "../../styles/Home.module.scss";
import Image from "next/image";
import { workTag } from "../../lib/type";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import animation from "../../hooks/animation.module.scss";
import { useEffect, useState } from 'react';
import { point } from "../../lib/type";

const Service = ({ workTag }: workTag) => {
  const { width } = getWindowSize();
  const [threePoint, setThreePoint] = useState<point[]>([]);

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

  useEffect(() => {
    if (width > 768) { // パソコンの場合
      setThreePoint([
        {
          ttl: "商品＆サービス開発",
          contents:
            "新規事業開発から既存事業の改善まで可能。競合に確実に勝てるビジネスを開発すべく、<br />徹底的なマーケティング調査・分析を実施。アイデアだけでなく、実現まで伴走します。",
        },
        {
          ttl: "ブランディング戦略（見せ方）",
          contents:
            "ブランド＆商品のネーミング・コンセプト・訴求内容・キャッチコピーの策定に加えて、<br />必要な制作（各種デザイン・動画）の計画・ビジュアルの方針・テイストを考案します。",
        },
        {
          ttl: "プロモーション戦略（伝え方）",
          contents:
            "ターゲットに宣伝する適切な手法を考案し、具体的な実施案〜効果予測まで提案します。<br />各種ＳＮＳ、ＷＥＢ広告、オフライン広告、メディア等、宣伝手法に精通しております。",
        },
        {
          ttl: "採用戦略策定＆実行",
          contents:
            "職場として独自の魅力を発見・開発します。マーケティング同様、競合他社と差別化し、<br />求職者から選ばれやすい状態を実現します。ＭＶＶに代表される企業理念の策定も可能。",
        },
      ]);
    } else { // スマホの場合
      setThreePoint([
        {
          ttl: "商品＆サービス開発",
          contents:
            "新規事業開発から既存事業の改善まで可能。<br />競合に確実に勝てるビジネスを開発すべく、<br />徹底的なマーケティング調査・分析を実施。<br />アイデアだけでなく、実現まで伴走します。",
        },
        {
          ttl: "ブランディング戦略（見せ方）",
          contents:
            "ブランド＆商品のネーミング、コンセプト<br />訴求内容、キャッチコピーの策定に加えて、<br />必要な制作（各種デザイン・動画）の計画、<br />ビジュアルの方針・テイストを考案します。",
        },
        {
          ttl: "プロモーション戦略（伝え方）",
          contents:
            "ターゲットに宣伝する適切な手法を考案し、<br />具体的な実施案〜効果予測まで提案します。<br />各種ＳＮＳ、ＷＥＢ広告、オフライン広告、<br />メディア等、宣伝手法に精通しております。",
        },
        {
          ttl: "採用戦略策定＆実行",
          contents:
            "職場として独自の魅力を発見・開発します。<br />マーケティング同様、競合他社と差別化し、<br />求職者から選ばれやすい状態を実現します。<br />ＭＶＶに代表される企業理念の策定も可能。",
        },
      ]);
    }
  }, [width]);

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
              src="/svg/service_bg_word.svg"
              alt="Service"
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
                  width={200}
                  height={580}
                  layout="responsive"
                  className={styles.mesh}
                  src="/svg/cool_ttl.svg"
                  alt="軍師プランとは？"
                />
              </div>

              {width > 768 ? (
                <div className={styles.service_content_p}>
                  <p>
                    マーケティングの全てを提案・相談できる
                    <br />
                    マーケティング責任者＝軍師を提供します
                    <br />
                    <br />
                    毎月定額で打ち合わせ＆相談回数は無制限
                    <br />
                    <br />
                    デザイン・映像・広告の制作は別途見積り
                    <br />
                    <br />
                    一方、制作を成功させるディレクションや
                    <br />
                    レクチャーであれば軍師プランで実施可能
                  </p>
                </div>
              ) : (<div className={styles.service_content_p}>
                <p>
                  マーケティングの全てを提案・相談できる
                  <br />
                  マーケティング責任者＝軍師を提供します
                  <br />
                  <br />
                  毎月定額で打ち合わせ＆相談回数は無制限
                  <br />
                  <br />
                  デザイン・映像・広告の制作は別途見積り
                  <br />
                  <br />
                  一方、制作を成功させるディレクションや
                  <br />
                  レクチャーであれば軍師プランで実施可能
                </p>
              </div>
              )}

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
                    className={`${styles.chart_yellow} ${styles.chartAbsolute}`}
                  >
                    <Image
                      width={615}
                      height={491}
                      style={{ animationDelay: "1s" }}
                      className={`${
                        inView ? animation.scaleUp : animation.scaleUpStart
                      }`}
                      layout="responsive"
                      src="/img/chart_yellow.png"
                      alt="黄色の表"
                    />
                  </div>
                  <div
                    className={`${styles.chart_green} ${styles.chartAbsolute}`}
                  >
                    <Image
                      width={615}
                      height={491}
                      style={{ animationDelay: "1.5s" }}
                      className={`${
                        inView ? animation.scaleUp : animation.scaleUpStart
                      }`}
                      layout="responsive"
                      src="/img/chart_green.png"
                      alt="緑の表"
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

                  <div className={styles.Competitor_nomal}>
                    <Image
                      width={216}
                      height={25}
                      layout="responsive"
                      src="/img/Competitor_nomal.png"
                      alt="制作会社"
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
                </div>
              </div>
            </div>

            <div className={styles.serviceSecondZoon}>
              <div className={styles.main_support_contents}>
                <h4>
                  主な支援内容
                </h4>
              </div>
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
                                width={1600}
                                height={478}
                                layout="responsive"
                                src="/svg/japaneseScrollBase.png"
                                alt="巻物のベース"
                              />
                            </div>
                            <div className={styles.japaneseScrollCont_txt}>
                              <h4>{one.ttl}</h4>
                              <p dangerouslySetInnerHTML={{ __html: one.contents }}></p>
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
                        {/* <Link
                          href={{
                            pathname: `/works/`,
                            query: { tag: items.fields.worksTagName },
                          }}
                        > */}
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
                        {/* </Link> */}
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
