import styles from "../layouts/footer.module.scss";
import RectBtn from "../atoms/rectBtn";
import Link from "next/link";
import React from 'react';
import Image from "next/image";
import { nav_type } from "../../lib/type";
import { useState, useEffect } from 'react';

const chunkArray = (array: any, chunkSize: any) => {
  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};

const Footer = (props: { nav_items: nav_type[] }) => {
  const { nav_items } = props;

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const chunkedNavItems = chunkArray(nav_items, 2);

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
              <Link href="https://movedoor.sharepoint.com/:b:/s/sharefolder/ET79mo8YuA1Kk6GJKUxj6GoBfFTlXFiJdh1aai-dq4cNbg?e=V8Jie4">
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
            {isMobile ? nav_items.map((item, index) => (
              <li key={index}>
                <Link href={item.path}>
                  <a>{item.name}</a>
                </Link>
              </li>
            )) : chunkedNavItems.map((chunk, chunkIndex) => (
              <div key={chunkIndex}>
                {chunk.map((item: any, index: any) => (
                  <div key={index}>
                    <li key={index}>
                      <Link href={item.path}>
                        <a>{item.name}</a>
                      </Link>
                    </li>
                    <li key={index}><br/></li>
                  </div>
                ))}
              </div>
            ))}
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
