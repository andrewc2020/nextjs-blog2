import Layout from '@/components/layout'
import Head from 'next/head'

import utilStyles from '../../styles/utils.module.css'

import { getAllPostIds, getPostData } from '../../lib/posts'
import { staticProps, postProps} from '../../lib/types'


const folder: string = 'posts2'

export async function getStaticProps({ params }: staticProps) {
  const postData = await getPostData(params.id, folder)
  return {
    props: {
      postData
    }
  }
}

export async function getStaticPaths() {
    const paths = getAllPostIds(folder)
    return {
      paths,
      fallback: false
    }
  }

  export default function Post({ postData }: postProps) {
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