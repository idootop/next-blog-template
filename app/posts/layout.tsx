import { MDXPage } from '@/src/components/MDXPage';

import { getPost } from './getPosts';
import styles from './styles.module.css';

export default function Layout({ children }: any) {
  const { title, date } = getPost(children.props.childProp.segment) ?? {};
  return (
    <MDXPage>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.date}>{date}</p>
      {children}
    </MDXPage>
  );
}
