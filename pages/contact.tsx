import BackGround from "../components/molecules/BackGround";
import styles from "../styles/contact.module.scss";
import Link from "next/link";
import Head from "next/head";
import { useState, useEffect, useRef } from "react";
import { NextPage } from "next";
import Animation from "../components/templates/Animation";

const Contact: NextPage = ({ respost }: any) => {
  const description =
    "MOVEDOORのお問い合わせフォームです.広報の無料相談から受けつけておりますので、ご気軽にお問い合わせください.弊社の最強の軍師がお客様の課題解決を行いに参上します。";
  const title = "CONTACT -お問い合わせ-";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} key="description" />
        <meta property="og:title" content={title} key="og_title" />
        <meta
          property="og:description"
          content={description}
          key="og_description"
        />
      </Head>
      <Animation />
      <BackGround opacity={0.6}>
        <div className={styles.contact}>
          <div className={styles.container}>
            <div>
              <div className={styles.contact_ttl}>
                <h1>contact</h1>
                <hr />
              </div>
              <div className="contactform">
                <iframe
                  width="640"
                  height="1200"
                  src="https://forms.office.com/Pages/ResponsePage.aspx?id=CyGJzk68BUid5SVSV-wkDIHQKLFHbghPh_VSXYmAk8ZUNFlBSlBOOFZFWERJUzhKMzFCQVFZRU5RNS4u&embed=true"
                  style={{
                    border: "none",
                    maxWidth: "100%",
                    maxHeight: "100vh",
                  }}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </BackGround>
    </>
  );
};

export default Contact;
