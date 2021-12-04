
import Layout from '../components/layout'
import { getPostData } from '../lib/posts'
import { postProps } from '../lib/types'
import { imageKitLoader, MyImage } from '../components/nextimage'






const id: string = 'profile'
const folder: string = 'profile'
export async function getStaticProps(){

  const postData = await getPostData(id,folder)
 

  if(!postData){
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }
  return {
    props: { postData }
    
  }

}




export default function Profile({postData}:postProps) {
  
    
    return <Layout home={false}> <h2>{ postData.title }</h2><article><div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} /></article></Layout>
}