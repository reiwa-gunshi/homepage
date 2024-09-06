import styles from "../layouts/footer.module.scss";
import RectBtn from "../atoms/rectBtn";
import Link from "next/link";
import React from 'react';
import Image from "next/image";
import { nav_type } from "../../lib/type";

const Footer = (props: { nav_items: nav_type[] }) => {
  const { nav_items } = props;
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.pamphlet}>
          <div className={styles.grid}>
            <div className={styles.pamphlet_ttl}>
              <p className={styles.sub}>弊社サービス説明資料はこちら</p>
              <p>『軍師プラン』</p>
            </div>
            <div className={styles.btn}>
              <Link href="https://movedoor.sharepoint.com/:b:/s/sharefolder/EffWkIlgPQ5Ki3Z_3p5KfXwBDcoqwtgrEajhlZan9ThVOg?e=0tYG6Q">
                <a>
                  <div className={styles.rect_btn}>
                    <div className={styles.inner}>download</div>
                  </div>
                </a>
              </Link>
            </div>
            <div className={styles.img}>
              <Image
                width={300}
                height={250}
                layout="responsive"
                src="/img/Pamphlet.png"
                alt="軍師の書"
              />
            </div>
          </div>
        </div>
        <div className={styles.footer_nav}>
        <ul className={styles.footer_ul}>
          {nav_items.map((items, footer_map_index) => {
            if (footer_map_index % 3 === 0) {
              return (
                <React.Fragment key={footer_map_index}>
                  {nav_items.slice(footer_map_index, footer_map_index + 3).map((item, index) => (
                    <li key={footer_map_index + index}>
                      <Link href={item.path}>
                        <a>{item.name}</a>
                      </Link>
                    </li>
                  ))}
                  <br />
                </React.Fragment>
              );
            }
            return null;
          })}
        </ul>
      </div>
        <img
          className={styles.footer_logo}
          src="/svg/footer_logo.svg"
          alt="令和の軍師ロゴ"
        />
        <div className={styles.copyright}>
          <p>Copyright © 2023 reiwanogunshi All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
