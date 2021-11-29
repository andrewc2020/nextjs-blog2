
import Layout from '../components/layout'
import { getProfileData } from '../lib/profile'




interface Data{
  
  data: Post
}

interface Post{
  id: string,
  title:string,
  index: number,
  contentHtml: any
}


export async function getStaticProps(){

  const data = await getProfileData("profile")

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