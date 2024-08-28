import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/bestWorks.module.scss";
import { useState, useEffect, useRef } from "react";
import { createClient } from "contentful";
import WorkCard from "../components/molecules/workCard";
import BackGround from "../components/molecules/BackGround";
import { getWindowSize } from "../hooks/GetWindowSize";
import { useRouter } from "next/router";
import type { NextRouter } from "next/router";
import { count } from "console";
import { motion, Variant } from "framer-motion";
import Animation from "../components/templates/Animation";
import _, { stubArray } from "lodash";
import {
  childFadeInUpWorksContainer,
  childFadeInUpWorksItems,
} from "../hooks/variants";
import Cont from "../components/molecules/Cont";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";
import Link from "next/link";

export interface workData_type {
  fields: {
    workTtl: string;
    workSubTtl: string;
    workThumb: {
      fields: {
        title?: string;
        file: {
          url: string;
        };
      };
    };
    bestworksimg: {
      fields: {
        title?: string;
        file: {
          url: string;
        };
      };
    };
    workCont?: string;
    worsTag: {
      fields: {
        worksTagSlug: string;
        worksTagName: string;
      };
    }[];
  };
}

type Props = {
  workData: workData_type[];
  workTag: { fields: { worksTagSlug?: string; worksTagName?: string } }[];
};

const BestWorks: NextPage<Props> = ({ workData }: Props) => {
  //恒例のタイトルとディスクリプション変換
  const description = "令和の軍師によって手がけた数々の作品です。";
  const title = "BestWorks -ベスト実績事例-";

  //表示するために格納する投稿リスト
  const [listPosts, setListPost] = useState<workData_type[]>(workData);

  //ローディング表示
  const [loadingSwitch, setLoadingSwitch] = useState<boolean>(false);

  //ページ番号の変数
  const [pageNumber, setPageNumber] = useState(2);

  //投稿数の一度に取得する数
  const limit = 3;

  useEffect(() => {
    const handleScroll = _.throttle(() => {
      const elements_container: any = document.getElementById("bestWorks");
      if (
        window.innerHeight + window.pageYOffset >=
          elements_container.offsetHeight &&
        !loadingSwitch
      ) {
        console.log("NO1");
        setPageNumber(pageNumber + 1);
        setLoadingSwitch(true);
        getPost();
      }
    }, 200);

    // getPost関数を定義
    const getPost = async () => {
      console.log("NO2");
      try {
        const client = createClient({
          space: "tcl09h8ynjdr",
          accessToken: "wZp-S0batwO9VGGsLbqqTx75MGllGVXEzusAWaCRVdc",
        });

        const res_work: any = await client.getEntries({
          content_type: "works",
          "fields.bestworks": "true",
          order: "-fields.order",
          limit: limit,
          skip: limit * (pageNumber - 1),
        });

        // 取得した投稿がある場合、ローディングスイッチをfalseにし、投稿を追加する
        if (res_work?.items?.length > 0) {
          setListPost([...listPosts, ...res_work.items]);
          setLoadingSwitch(false);
        } else {
          // 全ての投稿を取得した場合、スクロールイベントを削除する
          window.removeEventListener("scroll", handleScroll);
        }
      } catch (error) {
        console.log("error", error);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loadingSwitch, pageNumber]);

  const container = useRef(null);

  const renderOption: any = {
    renderNode: {
      [BLOCKS.EMBEDDED_ENTRY]: (node: any) => {
        const node_type = node.data.target.sys.contentType.sys.id;
      },
    },
    renderText: (text: any) => {
      return text
        .split("\n")
        .reduce((children: any, textSegment: any, index: number) => {
          return [...children, index > 0 && <br key={index} />, textSegment];
        }, []);
    },
  };

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
      <BackGround opacity={0.5}>
        <div className={styles.bestWorks} id="bestWorks">
          <div className={styles.white_bg}>
            <div className={styles.container}>
              <div className={styles.allLink}>
                <Link href="/works/">
                  <a>
                    <p>全ての実績を見る</p>
                  </a>
                </Link>
              </div>
              <div className={styles.ttl}>
                <h2>
                  Works - <span>Best Branding</span>
                </h2>
                <hr />
              </div>

              <motion.div
                variants={childFadeInUpWorksContainer}
                initial="hidden"
                animate="show"
                className={styles.bestWork_cont}
              >
                <ul
                  className={styles.bestWork_ul}
                  ref={container}
                  //onScroll={onScroll}
                >
                  {listPosts.map((items: any, work_index: number) => {
                    return (
                      <>
                        <motion.li
                          key={work_index}
                          variants={{
                            hidden: { opacity: 0, y: 50 },
                            show: {
                              opacity: 1,
                              y: 0,
                              transition: { delay: (work_index % limit) * 0.2 },
                            },
                          }}
                          className={styles.post}
                        >
                          <p className={styles.genre}>
                            {items.fields.workSubTtl}
                          </p>
                          <h3>{items.fields.workTtl}</h3>
                          <div className={styles.bestworksimg}>
                            <Image
                              src={`https:${items.fields.bestworksimg.fields.file.url}`}
                              layout="responsive"
                              width={
                                items.fields.bestworksimg.fields.file.details
                                  .image.width
                              }
                              height={
                                items.fields.bestworksimg.fields.file.details
                                  .image.height
                              }
                              objectFit="contain"
                              alt={items.fields.bestworksimg.fields.title}
                            />
                          </div>
                          <h4>{items.fields.bestworksConcept}</h4>
                          <p>{items.fields.bestworksdetail}</p>
                          <ul className={styles.bestWorksTag}>
                            {items.fields.worsTag.map((tag: any) => {
                              return <li>#{tag.fields.worksTagName}</li>;
                            })}
                          </ul>
                          <div className={styles.post_cont}>
                            {documentToReactComponents(
                              items.fields.bestworksRichtext,
                              renderOption
                            )}
                          </div>
                        </motion.li>
                      </>
                    );
                  })}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </BackGround>
    </>
  );
};

export default BestWorks;

export const getStaticProps: GetStaticProps = async () => {
  const client = createClient({
    space: "tcl09h8ynjdr",
    accessToken: "wZp-S0batwO9VGGsLbqqTx75MGllGVXEzusAWaCRVdc",
  });

  const res_work = await client.getEntries({
    content_type: "works",
    "fields.bestworks": "true",
    order: "-fields.order",
    limit: 3,
    skip: 0,
  });

  return {
    props: { workData: res_work.items },
  };
};
