import styles from "../../styles/Home.module.scss";
import Image from "next/image";
import RectBtn from "../atoms/rectBtn";
import { useInView } from "react-intersection-observer";
import animation from "../../hooks/animation.module.scss";
import { useEffect } from "react";

const Mission = () => {
  const [missionRef, inView] = useInView({
    threshold: [0.25],
    triggerOnce: true,
  });

  return (
    <>
      <div className={styles.mission}>
        <div
          className={`${
            inView
              ? animation.RectLeftSlideAnime
              : animation.RectLeftSlideAnimeStart
          }
         ${styles.yellow_rect}`}
        ></div>
        <div className={styles.mesh_img_inner}>
          <Image
            width={1512}
            height={1512}
            layout="responsive"
            className={styles.mesh}
            src="/svg/mesh_bg.svg"
            alt="背景のメッシュ素材"
          />
        </div>

        <div className={styles.container}>
          <div className={styles.inner}>
            <div className={styles.tommy_img}>
              <div
                className={`${
                  inView ? animation.fadeInUp : animation.fadeInUpStart
                } ${styles.img_inner}`}
              >
                <Image src="/img/tommy_img.png" layout="fill" alt="諸富稜" />
              </div>
            </div>
            <div ref={missionRef}></div>

            <div className={styles.mission_ttl}>
              <div
                className={`${
                  inView
                    ? animation.ParentRectLeftSlideAnime
                    : animation.ParentRectLeftSlideAnimeStart
                } ${styles.ttl_back}`}
              ></div>
              <img
                style={{ animationDelay: "1.5s" }}
                className={`${
                  inView ? animation.fadeInUp : animation.fadeInUpStart
                }`}
                src="./svg/OurMission.svg"
                alt="Our Mission"
              />
              <div
                className={`${
                  inView ? animation.fadeInUp : animation.fadeInUpStart
                } ${styles.five_people_img}`}
              >
                <Image
                  width={2133}
                  height={1440}
                  src="/img/5people.png"
                  layout="fill"
                  alt="５人の写真"
                />
              </div>
              <div className={styles.mission_detail}>
                <h4
                  style={{ animationDelay: "1.5s" }}
                  className={`${
                    inView ? animation.fadeInUp : animation.fadeInUpStart
                  }`}
                >
                  企業の長期利益を最大化
                </h4>

                <p
                  style={{ animationDelay: "1.0s"}}
                  className={`${
                    inView ? animation.fadeInUp : animation.fadeInUpStart
                  }`}
                >
                  令和の軍師と共に、他社が真似できない、
                  <br />
                  新たな商品・サービスを開発しませんか？
                  <br />
                  <br />
                  ブランディング＆プロモーションも同様。
                  <br />
                  <br />
                  独自のアイデア・戦略を提案することで、
                  <br />
                  競合他社と圧倒的な差別化を実現します。
                  <br />
                  <br />
                  消費者から選ばれ続ける仕組みを構築し、
                  <br />
                  貴社の利益を長期に渡り、最大化します。
                </p>
                <div
                  style={{ animationDelay: "1.5s" }}
                  className={`${
                    inView ? animation.fadeInUp : animation.fadeInUpStart
                  }`}
                >
                  <RectBtn
                    txt="about us"
                    bg_color="radial-gradient(closest-side at 50% 50%, #FFD700 0%, #FFD800 32%, #847000 100%) 0% 0% no-repeat padding-box"
                    url="/aboutus/"
                  ></RectBtn>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mission;
