
import Layout from '../components/layout'
import { getPostData } from '../lib/posts'




interface Data{
  
  data: Post
}

interface Post{
  id: string,
  title:string,
  index: number,
  contentHtml: any
}
const id: string = 'profile'
const folder: string = 'profile'
export async function getStaticProps(){

  const data = await getPostData(id,folder)

  if(!data){
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }
  return {
    props: { data },
  }

}




export default function Profile({data}: Data) {

    
    return <Layout home={false}> <h2>{ data.title }</h2><article><div dangerouslySetInnerHTML={{ __html: data.contentHtml }} /></article></Layout>
}