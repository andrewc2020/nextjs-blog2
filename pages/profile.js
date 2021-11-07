
import Layout from '../components/layout'
import { getProfileData } from '../lib/profile'
import Layout, { siteTitle } from '../components/layout'






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




export default function Profile({data}) {

    
    return <Layout Profile> <h2>{ data.title }</h2><article><div dangerouslySetInnerHTML={{ __html: data.contentHtml }} /></article></Layout>
}