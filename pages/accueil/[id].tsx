import Layout from '../../components/layout'
import Head from 'next/head'

import utilStyles from '../../styles/utils.module.css'

import { getAllAccueilIds, getAccueilData } from '../../lib/accueil'

export async function getStaticProps({ params }) {
  const postData = await getAccueilData(params.id)
  return {
    props: {
      postData
    }
  }
}

export async function getStaticPaths() {
    const paths = getAllAccueilIds()
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