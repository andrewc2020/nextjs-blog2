import Layout, { siteTitle } from '../components/layout'
import Mailto from '../components/mailto'
export default function Profile() {

    
    return <Layout Profile> <h1>Mon profil</h1><h2>Mon expérience</h2><Mailto email="someone@somewhere.com" subject="Salut" body="Salut Glyn,">Contactez moi</Mailto> </Layout>
  }