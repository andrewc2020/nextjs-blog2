import Layout from '../../components/layout'
import Head from 'next/head'

import utilStyles from '../../styles/utils.module.css'

import { getAllPosts2Ids, getPosts2Data } from '../../lib/posts2'

export async function getStaticProps({ params }) {
  const postData = await getPosts2Data(params.id)
  return {
    props: {
      postData
    }
  }
}

export async function getStaticPaths() {
    const paths = getAllPosts2Ids()
    return {
      paths,
      fallback: false
    }
  }

  export default function Post({ postData }) {
    return (
      <Layout home={false}>
        <Head>
          <title>{postData.title}</title>
        </Head>
        <article>
          <h1 className={utilStyles.headingMd}>{postData.title}</h1>
          <div className={ `${utilStyles.lightText} ${utilStyles.hidden}`}>
            {postData.index}
          </div>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
      </Layout>
    )
  }