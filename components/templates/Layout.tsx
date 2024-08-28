import { ReactNode } from "react";
import Footer from "../layouts/footer";
import Header from "../layouts/header";
import { nav_type } from "../../lib/type";

type Props = {
  children: ReactNode;
};

const nav_items: nav_type[] = [
  { name: "TOP PAGE", path: "/", yomikana: "トップページ" },
  { name: "WORKS", path: "/bestworks/", yomikana: "実績紹介" },
  { name: "volunteer", path: "/volunteer/", yomikana: "ボランティア" },
  { name: "About us", path: "/aboutus/", yomikana: "私たちについて" },
  { name: "Blog", path: "/blog/", yomikana: "総大将ブログ" },
  { name: "Members", path: "/members/", yomikana: "メンバー" },
  { name: "Contact", path: "/contact/", yomikana: "お問合せ" },
];

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header nav_items={nav_items}></Header>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-MSJ9S5R"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
      {children}
      <Footer nav_items={nav_items}></Footer>
    </>
  );
};

export default Layout;
