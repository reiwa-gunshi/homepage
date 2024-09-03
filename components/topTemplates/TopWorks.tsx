import RectBtn from "../atoms/rectBtn";
import styles from "../../styles/Home.module.scss";
import { getWindowSize } from "../../hooks/GetWindowSize";
import animation from "../../hooks/animation.module.scss";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { workData } from "../../lib/type";
import Link from "next/link";
import { useEffect, useState } from 'react';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TopWorks = ({ workData }: workData) => {
  const { width } = getWindowSize();

  const [missionRef, inView] = useInView({
    threshold: [0.25],
    triggerOnce: true,
  });

  const firstItem = workData[0]; // workDataの最初の要素を取得

  return (
    <>
      <div ref={missionRef} className={`${styles.works} top_work`}>
        <div className={styles.container}>
          <div className={styles.cat_ttl}>
            <img
              className={`${
                inView ? animation.fadeInUp : animation.fadeInUpStart
              }`}
              src="./svg/works_ttl.svg"
              alt="WOKS文字"
            />
            <p
              style={{ animationDelay: "0.5s" }}
              className={`${
                inView ? animation.fadeInUp : animation.fadeInUpStart
              }`}
            >
              実績紹介
            </p>
          </div>
          <div className={styles.achievements}>
            <img
              width={3584}
              height={2018}
              src="/img/achievements_red.png"
              alt="主な実績"
            />
          </div>
          <div className={styles.inner}>
            <ul
              style={{ animationDelay: "1s" }}
              className={`${
                inView ? animation.fadeInUp : animation.fadeInUpStart
              }`}
            >
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={width > 786 ? 3 : 1.7}
                centeredSlides={true}
                centerInsufficientSlides={true}
                loop={true}
                navigation
                className="myswiper"
              >
                {workData.map((items, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <li>
                        <Link
                          href={{ pathname: `/works/${items.fields.workTtl}` }}
                        >
                          <a>
                            <div className={styles.close_inner}>
                              <div className={styles.works_bg}>
                                <div className={styles.img_inner}>
                                  {index % 2 != 0 ? (
                                    <Image
                                      src="/img/works_red_bg.jpg"
                                      layout="fill"
                                      alt="ワークス背景素材"
                                    />
                                  ) : (
                                    <Image
                                      src="/img/works_yellow_bg.jpg"
                                      layout="fill"
                                      alt="ワークス背景素材"
                                    />
                                  )}
                                </div>
                              </div>
                              <div className={styles.works_img}>
                                <div className={styles.img_inner}>
                                  <Image
                                    src={
                                      "https:" +
                                      items.fields.workThumb.fields.file.url
                                    }
                                    layout="fill"
                                    alt="ワークス背景素材"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className={styles.open_inner}>
                              <div className={styles.company_name}>
                                <p>{items.fields.workSubTtl}</p>
                                <h6>{items.fields.workTtl}</h6>
                              </div>
                            </div>
                          </a>
                        </Link>
                      </li>
                    </SwiperSlide>
                  );
                })}
                <div className={styles.swiper_button_next}></div>
              </Swiper>
            </ul>
          </div>
          <div className={styles.center}>
            <RectBtn
              url="/bestworks/"
              bg_color="#DDDDDD 0% 0% no-repeat padding-box"
            ></RectBtn>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media screen and (max-width: 576px) {
          .swiper-slide-active li a div.open_inner {
            opacity: 1;
            height: inherit;
            width: inherit;
          }
        }
      `}</style>
    </>
  );
};

export default TopWorks;
