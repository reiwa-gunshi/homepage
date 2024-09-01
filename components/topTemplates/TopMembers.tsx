import RectBtn from "../atoms/rectBtn";
import styles from "../../styles/Home.module.scss";
import { getWindowSize } from "../../hooks/GetWindowSize";
import Link from "next/link";
import animation from "../../hooks/animation.module.scss";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination } from "swiper";
import { memberType } from "../../lib/type";

import { motion } from "framer-motion";

import {
  childFadeInUpContainer,
  childFadeInUpItems,
} from "../../hooks/variants";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TopMembers = ({ memberData }: memberType) => {
  const { width } = getWindowSize();

  const [memberRef, inView] = useInView({
    threshold: [0.25],
    triggerOnce: true,
  });

  return (
    <>
      <div ref={memberRef} className={`${styles.member} top_member`}>
        <div className={styles.yellow_bg}></div>
        <div
          className={`${
            inView ? animation.fadeInUp : animation.fadeInUpStart
          } ${styles.misaki_img}`}
        >
          <Image
            width={852}
            height={852}
            src="/img/misaki_pc.png"
            layout="fill"
            alt="三崎龍人"
          />
        </div>

        <div ref={memberRef} className={styles.container}>
          <div className={styles.cat_ttl}>
            <img
              style={{ animationDelay: "0.5s" }}
              className={`${
                inView ? animation.fadeInUp : animation.fadeInUpStart
              }${styles.img_inner}`}
              src="./svg/top_marketer.svg"
              alt="TOP MARKETERの文字"
            />
          </div>
          <div className={styles.inner}>
            <motion.ul
              variants={childFadeInUpContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.8, margin: "200px" }}
            >
              {width <= 786 ? (
                <Swiper
                  modules={[Navigation, Pagination]}
                  spaceBetween={30}
                  slidesPerView={1}
                  speed={200}
                  centeredSlides={true}
                  centerInsufficientSlides={true}
                  loop={true}
                  navigation
                  className="myswiper"
                >
                  {memberData.map((items, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <li>
                          <Link href={`/member/${items.fields.slug}`}>
                            <a className="top_member_a">
                              <div className={styles.close_inner}>
                                <div className={styles.member_name}>
                                  <p>{items.fields.topOneword}</p>
                                  <h6>{items.fields.name}</h6>
                                </div>
                              </div>

                              <div className={styles.open_door}>
                                <div
                                  className={`${styles.door_back} door_back`}
                                >
                                  <img src="./svg/logo.svg" alt="MEMBER文字" />
                                </div>
                              </div>

                              <div className={styles.open_inner}>
                                <div className={styles.member_bg}>
                                  <div className={styles.img_inner}>
                                    <Image
                                      src={
                                        "https:" +
                                        items.fields.topthumbImg.fields.file.url
                                      }
                                      layout="fill"
                                      alt={items.fields.name}
                                    />
                                  </div>
                                </div>
                              </div>
                            </a>
                          </Link>
                        </li>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              ) : (
                <>
                  {memberData.map((items, index) => {
                    return (
                      <motion.li variants={childFadeInUpItems} key={index}>
                        <Link href={`/member/${items.fields.slug}`}>
                          <a className="top_member_a">
                            <div className={styles.close_inner}>
                              <div className={styles.member_name}>
                                <img src="./svg/logo.svg" alt="MEMBER文字" />
                                <p>{items.fields.topOneword}</p>
                                <h6>{items.fields.name}</h6>
                              </div>
                              <div className={styles.door_back}></div>
                            </div>
                            <div className={styles.open_inner}>
                              <div className={styles.member_bg}>
                                <div className={styles.img_inner}>
                                  <Image
                                    src={
                                      "https:" +
                                      items.fields.topthumbImg.fields.file.url
                                    }
                                    layout="fill"
                                    alt={items.fields.name}
                                  />
                                </div>
                              </div>
                            </div>
                          </a>
                        </Link>
                      </motion.li>
                    );
                  })}
                </>
              )}
            </motion.ul>
          </div>
          <div
            style={{ animationDelay: "1.5s" }}
            className={`${
              inView ? animation.fadeInUp : animation.fadeInUpStart
            } ${styles.center}`}
          >
            <RectBtn
              url="/members/"
              bg_color="#DDDDDD 0% 0% no-repeat padding-box"
            ></RectBtn>
          </div>
        </div>
        <div className={styles.yellow_div}>
          <div className={styles.yellow_bg}></div>
          <div className={styles.triangle_area}>
            <img
              className={styles.triangle_svg}
              src="./svg/triangle.svg"
              alt="背景三角"
            />
          </div>
          <div className={styles.keiji_img}>
            <div
              style={{ animationDelay: "1.5s" }}
              className={`${
                inView ? animation.fadeInUp : animation.fadeInUpStart
              } ${styles.img_inner}`}
            >
              {(() => {
                if (width >= 576) {
                  return (
                    <Image
                      src="/img/keiji_pc.png"
                      layout="fill"
                      alt="高橋圭司"
                    />
                  );
                } else {
                  return (
                    <Image
                      src="/img/keiji_sp.png"
                      layout="fill"
                      alt="高橋圭司"
                    />
                  );
                }
              })()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopMembers;
