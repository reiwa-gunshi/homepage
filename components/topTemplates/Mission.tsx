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
                  <br />
                  令和の軍師は、競合他社が真似できない、
                  <br />
                  独自性のある商品・サービスを開発する。
                  <br />
                  <br />
                  ブランディング＆プロモーションも同様。
                  <br />
                  <br />
                  新しいアイデアや戦略で実施することで、
                  <br />
                  競合他社と圧倒的な差別化を実現できる。
                  <br />
                  <br />
                  顧客に圧倒的に選ばれる仕組みを構築し、
                  <br />
                  貴社の売上・長期利益を最大化し続ける。
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
