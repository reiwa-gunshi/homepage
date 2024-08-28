import {
  GetStaticPaths,
  GetStaticProps,
  NextPage,
  InferGetStaticPropsType,
} from "next";
import BackGround from "../../components/molecules/BackGround";
import styles from "../../styles/post.module.scss";
import { createClient, EntryCollection } from "contentful";
import BackBtn from "../../components/atoms/backBtn";
import Image from "next/image";
import Cont from "../../components/molecules/Cont";
import Toc from "../../components/molecules/Toc";
import Animation from "../../components/templates/Animation";
import Head from "next/head";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export interface cat {
  fields: {
    worksTagName?: string;
  };
}

const WorksPost: NextPage<Props> = ({ post }) => {
  const description =
    "株式会社令和の軍師の数ある実績のひとつです。他にも多くの実績があるので、覗いてください";
  return (
    <>
      <Head>
        <title>
          {post.fields.seoTtl ? post.fields.seoTtl : post.fields.workTtl}
        </title>
        <meta
          name="description"
          content={
            post.fields.seoDescription
              ? post.fields.seoDescription
              : description
          }
          key="description"
        />
        <meta
          property="og:title"
          content={
            post.fields.seoTtl ? post.fields.seoTtl : post.fields.workTtl
          }
          key="og_title"
        />
        <meta
          property="og:description"
          content={
            post.fields.seoDescription
              ? post.fields.seoDescription
              : description
          }
          key="og_description"
        />
      </Head>
      <Animation />
      <div className={`${styles.works_post} ${styles.post}`}>
        <div className={styles.post_top}>
          <div className={styles.post_img}>
            <div className={styles.img_inner}>
              <div className={styles.img_box}>
                <Image
                  width={1920}
                  height={720}
                  layout="responsive"
                  src={`https:${post.fields.workThumb.fields.file.url}`}
                  alt="ブログのサムネの大画面"
                />
              </div>

              <div className={styles.black_filter}></div>
              <div className={styles.post_top_ttl}>
                <div className={styles.works_top_ttl}>
                  <p>{post.fields.workSubTtl}</p>
                  <h6>{post.fields.workTtl}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.white_bg}>
          <div className={styles.container}>
            <div className={styles.post_inner}>
              <ul className={styles.post_tag}>
                {post.fields.workTag?.map((cat_tags: cat, d: number) => {
                  return <li key={d}>#{cat_tags.fields.worksTagName}</li>;
                })}
              </ul>
              <h1>{post.fields.workTtl}</h1>
              <Toc tocPost={post.fields.workCont}></Toc>
              <div className={styles.post_cont}>
                <Cont postCont={post.fields.workCont}></Cont>
              </div>
              <hr />
            </div>
            <BackBtn customLink="/works/" />
          </div>
        </div>
      </div>
    </>
  );
};

export default WorksPost;

const client = createClient({
  space: "tcl09h8ynjdr",
  accessToken: "wZp-S0batwO9VGGsLbqqTx75MGllGVXEzusAWaCRVdc",
});

type Params = {
  [param: string]: any;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res: EntryCollection<any> = await client.getEntries({
    content_type: "works",
  });

  const paths = res.items.map((item) => {
    return {
      params: { workTtl: item.fields.workTtl },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: Params) => {
  const { items } = await client.getEntries<any>({
    content_type: "works",
    "fields.workTtl": params.workTtl,
  });
  return {
    props: { post: items[0] },
  };
};
