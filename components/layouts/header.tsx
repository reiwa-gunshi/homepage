import styles from "../layouts/header.module.scss";
import Link from "next/link";
import { nav_type } from "../../lib/type";
import { useState, useEffect } from "react";

const Header = (props: { nav_items: nav_type[] }) => {
  const { nav_items } = props;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, []);

  return (
    <>
      <header className={styles.header}>
        <div
          className={
            open == true
              ? `${styles.open} ${styles.header_cont}`
              : styles.header_cont
          }
        >
          <div className={styles.nav_cont}>
            <div className={styles.bg_img}>
              <div className={styles.img_inner}></div>
            </div>
            <div className={styles.nav}>
              <ul className={styles.ul}>
                {nav_items.map((items, nav_index: number) => {
                  return (
                    <li key={nav_index} onClick={() => setOpen(!open)}>
                      <Link href={items.path}>
                        <a>
                          <p className={styles.header_items_name}>
                            {items.name}
                          </p>
                          <p className={styles.header_items_yomikana}>
                            {items.yomikana}
                          </p>
                        </a>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className={styles.menu_btn} onClick={() => setOpen(!open)}>
            <img
              className={styles.menu_bg}
              src="/svg/menu_btn_img.svg"
              alt="メニュー背景素材"
            />
            <div className={styles.hamburger}>
              <div />
              <div />
              <div />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
