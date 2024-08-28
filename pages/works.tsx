import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import styles from "../styles/works.module.scss";
import { workData_type } from "../lib/type";
import { useState, useEffect, useRef } from "react";
import { createClient } from "contentful";
import WorkCard from "../components/molecules/workCard";
import BackGround from "../components/molecules/BackGround";
import { getWindowSize } from "../hooks/GetWindowSize";
import { motion } from "framer-motion";
import Animation from "../components/templates/Animation";
import _ from "lodash";
import { childFadeInUpWorksContainer } from "../hooks/variants";
import { useMyContext } from "../contexts/MyContext";
import { useRouter } from "next/router";

type Props = {
  workData: workData_type[];
  workTag: { fields: { worksTagSlug?: string; worksTagName?: string } }[];
};

const Works: NextPage<Props> = ({ workData, workTag }: Props) => {
  //恒例のタイトルとディスクリプション変換
  const description = "令和の軍師が作ってきた世界をお伝えいたしまする。";
  const title = "WORKS -実績事例-";

  const router = useRouter();

  //画面幅の取得
  const { width } = getWindowSize();

  //表示するために格納する投稿リスト
  const {
    listPosts,
    setListPosts,
    pageNumber,
    setPageNumber,
    AllPosts,
    setAllPosts,
    isAllTag,
    setIsAllTag,
    tags,
    setTags,
  } = useMyContext();

  //ローディング表示
  const [loadingSwitch, setLoadingSwitch] = useState<boolean>(false);

  //投稿数の一度に取得する数
  const limit = 18;

  //表示するタグの配列の変数
  const tag_array: any = [];

  //タグの名前だけを表示用に配列に格納する
  workTag.map((tag) => tag_array.push(tag.fields.worksTagName));

  var post_tag_array: string[] = [];

  let counter = Math.floor(listPosts.length);
  let plusNumber: number = 9;

  let count: number = 0;
  let changeCount: number = 9;

  let counterArray: any[] = [];

  const container = useRef(null);

  if (width > 576) {
    counterArray = [
      [1, 1, 3, 2],
      [1, 2, 5, 3],
      [1, 3, 4, 4],
      [3, 1, 7, 2],
      [5, 2, 8, 3],
      [4, 3, 6, 4],
      [7, 1, 10, 2],
      [8, 2, 10, 3],
      [6, 3, 10, 4],
    ];
  } else {
    plusNumber = 9;
    changeCount = 6;
    counter = counter * 1.5;
    counterArray = [
      [1, 1, 3, 2],
      [1, 2, 5, 3],
      [3, 1, 6, 2],
      [5, 2, 7, 3],
      [6, 1, 10, 2],
      [7, 2, 10, 3],
    ];
  }

  let AmariN: number = 0;
  let Con: number = 0;
  let Amari: number = 0;

  // フィルターを設置する
  useEffect(() => {
    // 初回のロード時に、useMyContextに投稿データがあれば、そのデータを使って、レンダリングし、なければ、getStaticPropsから取得した投稿データをレンタリングする
    if (listPosts.length > 0) {
      setListPosts(listPosts);
      setPageNumber(pageNumber + 1);
    } else {
      setListPosts(workData);
    }
  }, [listPosts]);

  useEffect(() => {
    const { query } = router;
    if (query.tag) {
      setTags(Array.isArray(query.tag) ? query.tag : [query.tag]);
    }
  }, [router.query]);

  //タグが変わる、ローディングが入る瞬間に実行する
  useEffect(() => {
    let CopyPosts: any = [];
    //タグ変更された時に、setListPostにタグで絞られたものを代入する
    if (tags.length > 0) {
      setIsAllTag(false);
      AllPosts.map((items: any) => {
        //一コンテンツのタグをpost_tag_arrayに入れる
        post_tag_array.length = 0;

        //投稿コンテンツのタグを"post_tag_array"に一時格納する
        items.fields.worsTag.map((push_tag: any, pushIndex: number) =>
          post_tag_array.push(push_tag.fields.worksTagName)
        );

        //全てのタグでも無く、投稿の出力タグリストとtagsに一致するものだけ出力する
        if (
          post_tag_array.some((tag_value: string) => tags.includes(tag_value))
        ) {
          CopyPosts.push(items);
        }
      });
      setListPosts(CopyPosts);
    } else {
      setListPosts(AllPosts);
      setIsAllTag(true);
    }
  }, [tags]);

  //スクロールにより、下まで到達したときに、残りのものを読み込む
  useEffect(() => {
    //初回のレンダリング時には、実行しない

    const handleScroll = _.throttle(() => {
      const elements_container: any = document.getElementById("works");

      if (
        window.innerHeight + window.pageYOffset >=
          elements_container.offsetHeight &&
        !loadingSwitch
      ) {
        getPost();
        setPageNumber(pageNumber + 1);
        setLoadingSwitch(true);
      }
    }, 200);

    // getPost関数を定義
    const getPost = async () => {
      try {
        const client = createClient({
          space: "tcl09h8ynjdr",
          accessToken: "wZp-S0batwO9VGGsLbqqTx75MGllGVXEzusAWaCRVdc",
        });

        const res_work: any = await client.getEntries({
          content_type: "works",
          order: "-fields.order",
          limit: limit,
          skip: limit * (pageNumber - 1),
        });

        // 取得した投稿がある場合、ローディングスイッチをfalseにし、投稿を追加する
        if (res_work?.items?.length > 0) {
          setListPosts([...listPosts, ...res_work.items]);
          setAllPosts([...AllPosts, ...res_work.items]);
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
  }, [loadingSwitch]);

  useEffect(() => {
    // ここで listPosts が更新されたときの処理を行います。
  }, [listPosts]);

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
        <div className={styles.works} id="works">
          <div className={styles.white_bg}>
            <div className={styles.container}>
              <div className={styles.ttl}>
                <h2>
                  works
                  <span className={isAllTag ? styles.all : styles.tag_size}>
                    - {isAllTag ? "all" : `${tags}`}
                  </span>
                </h2>
                <hr />
              </div>
              <div className={styles.cat}>
                <ul>
                  <li
                    onClick={() => {
                      setIsAllTag(true);
                      setTags([]);
                    }}
                    className={isAllTag ? styles.tag_true : ""}
                  >
                    全て
                  </li>
                  {/* タグの出力 */}
                  {tag_array.map((worksItem: any, tag_index: number) => {
                    return (
                      <li
                        onClick={() => {
                          if (!tags.includes(worksItem)) {
                            setTags([...tags, worksItem]);
                          } else {
                            const selectedTags = [...tags].filter(
                              (selectedTag: string) => selectedTag !== worksItem
                            );
                            setTags(selectedTags);
                          }
                        }}
                        key={tag_index}
                        className={
                          tags.includes(worksItem) ? styles.tag_true : ""
                        }
                      >
                        {worksItem}
                      </li>
                    );
                  })}
                </ul>
              </div>

              <motion.div
                variants={childFadeInUpWorksContainer}
                initial="hidden"
                animate="show"
                className={styles.post}
              >
                <ul
                  className={styles.getTemplate}
                  ref={container}
                  //onScroll={onScroll}
                >
                  {listPosts.map((items: any, work_index: number) => {
                    //gridAreaを導き出すための場所----------
                    Amari = count / changeCount;
                    if (count >= changeCount) {
                      AmariN = 0;
                      AmariN = AmariN + plusNumber * Math.floor(Amari);
                      Con = count - changeCount * Math.floor(Amari);
                    } else {
                      Con = count;
                    }
                    let Counter1: number = counterArray[0][0];
                    let Counter2: number = counterArray[0][1];
                    let Counter3: number = counterArray[0][2];
                    let Counter4: number = counterArray[0][3];
                    //gridAreaを導き出すための場所(終わり)----------

                    Counter1 = counterArray[Con][0] + AmariN;
                    Counter2 = counterArray[Con][1];
                    Counter3 = counterArray[Con][2] + AmariN;
                    Counter4 = counterArray[Con][3];

                    count = count + 1;

                    return (
                      <>
                        <motion.li
                          key={work_index}
                          style={{
                            gridArea:
                              Counter1 +
                              "/" +
                              Counter2 +
                              "/" +
                              Counter3 +
                              "/" +
                              Counter4,
                          }}
                          variants={{
                            hidden: { opacity: 0, y: 50 },
                            show: {
                              opacity: 1,
                              y: 0,
                              transition: { delay: (work_index % limit) * 0.2 },
                            },
                          }}
                        >
                          <WorkCard
                            tags={tags}
                            workData={items}
                            index={count}
                          ></WorkCard>
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

export default Works;

export const getStaticProps: GetStaticProps = async () => {
  const client = createClient({
    space: "tcl09h8ynjdr",
    accessToken: "wZp-S0batwO9VGGsLbqqTx75MGllGVXEzusAWaCRVdc",
  });

  const res_work = await client.getEntries({
    content_type: "works",
    order: "-fields.order",
    limit: 18,
    skip: 0,
  });

  const res_work_cat = await client.getEntries({
    content_type: "worksTag",
    order: "fields.order",
  });

  return {
    props: { workData: res_work.items, workTag: res_work_cat.items },
  };
};
