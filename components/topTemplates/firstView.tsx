import styles from "../../styles/Home.module.scss";
import Image from "next/image";

const FirstView = () => {
  return (
    <>
      {/* ファーストビュー */}
      <div className={styles.first_view} style={{ height: "100vh" }}>
        <div className={styles.container}>
          <div className={styles.h1_ttl}>
            <div className={`${styles.slice_items} ${styles.sildeAnime}`}>
              <div className={styles.top_slice}>
                <div className={styles.animeBack}>
                  <img
                    style={{ backgroundColor: "#e0bd00" }}
                    src="./svg/reiwanogunshi.svg"
                    alt="令和の軍師ロゴ"
                  />
                </div>
              </div>
              <div className={styles.bottom_slice}>
                <div className={styles.animeBack}>
                  <img
                    style={{ backgroundColor: "#fff" }}
                    src="./svg/reiwanogunshi.svg"
                    alt="令和の軍師ロゴ"
                  />
                </div>
              </div>
            </div>

            <div className={styles.h1_sub_ttl}>
              <div className={`${styles.sub_ttl_inner} ${styles.animeBack}`}>
                <h2>PUBLIC RELATIONS / DESIGN / MOVIE</h2>
              </div>
            </div>
          </div>
          <div className={styles.scroll}>
            <Image
              src="/svg/scroll_btn.svg"
              layout="responsive"
              width={24}
              height={100}
              alt="スクロールボタン"
            />
          </div>
        </div>
      </div>
      {/* ファーストビュー 終わり*/}
    </>
  );
};

export default FirstView;
