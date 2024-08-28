import styles from "../layouts/footer.module.scss";
import RectBtn from "../atoms/rectBtn";
import Link from "next/link";
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
              <p className={styles.sub}>令和の軍師の全てがこの１冊に</p>
              <p>『軍師の書』</p>
            </div>
            <div className={styles.btn}>
              <Link href="https://movedoor.sharepoint.com/:b:/s/sharefolder/EacbABEPDXNMnu59_AZ8YEIBjz6Svi9ISFq67s0iXFlsHw?e=RrkyI7">
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
              return (
                <li key={footer_map_index}>
                  <Link href={items.path}>
                    <a>{items.name}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <img
          className={styles.footer_logo}
          src="/svg/footer_logo.svg"
          alt="MOVEDOORロゴ"
        />
        <div className={styles.copyright}>
          <p>Copyright © 2023 movedoor All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
