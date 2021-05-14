import Head from 'next/head'
import Link from "next/link";
import { getSortedPostsData } from "../lib/posts";
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Date from "../components/date";


export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}

export default function Home({ allPostsData }) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>
                    Hi, I'm Brian Wang'ombe, a fullstack web developer with 4+ years experience. Check out some of the{' '}
                    previous projects that I've done <Link href="/posts/first-post"><a>here</a></Link>.
                </p>
                <p>
                    For hiring send an email to <a href="https://gmail.com">hire@nxoo.dev</a>.
                </p>
                <p><a href="/posts">blog</a> | <a href="https://github.com/nxoo">Github ←</a></p>
            </section>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({ id, date, title }) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href={`/posts/${id}`}>
                                <a>{title}</a>
                            </Link>
                            <br />
                            <small className={utilStyles.lightText}>
                                <Date dateString={date} />
                            </small>
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    )
}


