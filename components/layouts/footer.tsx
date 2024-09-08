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
              <Link href="https://movedoor.sharepoint.com/sites/sharefolder/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2Fsharefolder%2FShared%20Documents%2F09%2EMD%E3%83%97%E3%83%AC%E3%82%BC%E3%83%B3%E8%B3%87%E6%96%99%2F%E8%BB%8D%E5%B8%AB%E3%83%95%E3%82%9A%E3%83%A9%E3%83%B3%EF%BC%9A%E3%81%93%E3%82%99%E8%AA%AC%E6%98%8E%E8%B3%87%E6%96%99%2Epdf&parent=%2Fsites%2Fsharefolder%2FShared%20Documents%2F09%2EMD%E3%83%97%E3%83%AC%E3%82%BC%E3%83%B3%E8%B3%87%E6%96%99&p=true&ga=1">
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
