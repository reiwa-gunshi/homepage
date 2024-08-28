import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import { useRouter } from 'next/router';
import styles from '../molecules/Cont.module.scss';
import { Link as Scroll } from 'react-scroll';

const crypto = require('crypto');

const Toc = (props: any) => {
  const { tocPost } = props;

  const headingTypes = [BLOCKS.HEADING_2];

  const headings = tocPost.content.filter((item: any) => headingTypes.includes(item.nodeType));

  const document: any = {
    nodeType: 'document',
    content: headings,
  };

  const renderOption_2 = {
    renderNode: {
      [BLOCKS.HEADING_2]: (node: any, children: any) => {
        // H2タグのテキストをハッシュ化してidに利用
        const anchor = crypto.createHash('md5').update(node.content[0].value).digest('hex');
        return (
          <li>
            <Scroll to={anchor} smooth={true} duration={500}>
              {children}
            </Scroll>
          </li>
        );
      },
    },
  };

  return (
    <>
      {(() => {
        if (document.content.length != 0) {
          console.log(document);
          return (
            <nav className={styles.toc}>
              <p className={styles.toc__title}>Outline</p>
              <ul>{documentToReactComponents(document, renderOption_2)}</ul>
            </nav>
          );
        }
      })()}
    </>
  );
};

export default Toc;
