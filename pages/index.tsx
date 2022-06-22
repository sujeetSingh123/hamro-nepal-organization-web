import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout/Layout';
import { IBlogCard } from '../components/Blogs/blog-card';
import { BlogLists } from '../components/Blogs/blogs-lists';

const blogsLists: IBlogCard[] = [
  {
    slug: 'asd',
    src: 'https://c.ndtvimg.com/2021-12/nie2c78g_president-ram-nath-kovind-ima-passing-out-parade-twitter_625x300_11_December_21.jpg?im=Resize=(1230,900)',
    title: 'asdasd',
  },
  {
    slug: 'asd',
    src: 'https://c.ndtvimg.com/2021-12/nie2c78g_president-ram-nath-kovind-ima-passing-out-parade-twitter_625x300_11_December_21.jpg?im=Resize=(1230,900)',
    title: 'asdasd',
  },
  {
    slug: 'asd',
    src: 'https://c.ndtvimg.com/2021-12/nie2c78g_president-ram-nath-kovind-ima-passing-out-parade-twitter_625x300_11_December_21.jpg?im=Resize=(1230,900)',
    title: 'asdasd',
  },
];

const Home: NextPage = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Hamro Nepal </title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <section>
          <BlogLists blogsLists={blogsLists} />
        </section>
      </div>
    </Layout>
  );
};

export default Home;
