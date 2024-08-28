import Image from "next/image";
import styles from "../molecules/workCard.module.scss";
import Link from "next/link";

export interface workData {
  workData: {
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
      workCont?: string;
      worsTag: {
        fields: {
          worksTagSlug?: string;
          worksTagName?: string;
        };
      }[];
    };
  };
  index: number;
  count?: any;
  tags?: any;
}

const WorkCard = (props: workData) => {
  const { workData, index, tags } = props;

  return (
    <div className={`${styles.works_li}`}>
      <Link
        href={{
          pathname: `/works/${workData.fields.workTtl}`,
          query: { tag: tags },
        }}
      >
        <a className={styles.works_a}>
          <div className={styles.close_inner}>
            <div className={styles.works_img}>
              <div className={styles.img_inner}>
                <Image
                  src={`https:${workData.fields.workThumb.fields.file.url}`}
                  layout="fill"
                  alt={workData.fields.workThumb.fields.title}
                />
              </div>
            </div>
          </div>
          <div className={styles.open_inner}>
            <div className={styles.company_name}>
              <p>{workData.fields.workSubTtl}</p>
              <h6>{workData.fields.workTtl}</h6>
            </div>
          </div>
          <div className={styles.cap_mark}>
            {index % 2 != 0 ? (
              <Image
                src="/img/red_cap.png"
                layout="responsive"
                width={110}
                height={110}
                alt="赤い装飾"
              />
            ) : (
              <Image
                src="/img/yellow_cap.png"
                layout="responsive"
                width={110}
                height={110}
                alt="黄色い装飾"
              />
            )}
          </div>
        </a>
      </Link>
    </div>
  );
};

export default WorkCard;
