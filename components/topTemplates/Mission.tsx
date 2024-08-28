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
                  先駆者を創る
                </h4>

                <p
                  style={{ animationDelay: "1.0s" }}
                  className={`${
                    inView ? animation.fadeInUp : animation.fadeInUpStart
                  }`}
                >
                  令和の軍師は、顧客を先駆者に変える。先駆者は、固定観念や常識を打ち破る。
                  <br />
                  新たな挑戦をして、独自の価値を生む。
                  <br />
                  先駆者は、劇的な事業成長を手にする。業界に刺激を与え、業界を発展させる。
                  <br />
                  パラダイムシフトの概念を生んだ学者、トーマス・クーン氏は提唱した。
                  <br />
                  『その引金を引くのは若者・よそ者だ』と。
                  <br />
                  日本一若いブランディング会社としてＺ世代のアイデアと発想力を駆使して、業界に変革を生みだす。
                  <br />
                  さぁ、時代を進めよう。 令和の軍師は、顧客を先駆者に変える。
                  <br />
                  先駆者は、固定観念や枠組みを突破し、業界に新しい価値を生む。
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
