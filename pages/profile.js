import Layout, { siteTitle } from '../components/layout'
import Mailto from '../components/mailto'





export default function Profile() {

    
    return 
  <Layout Profile> <h1>Mon profil</h1><article><p>Double nationalité Britannique et Française, domicilié en Bretagne au Conquet.</p>
    <p>Co fondateur de ENGLISH APART à Brest en 1985, Méthode pédagogique de l’enseignement
    de la langue anglaise basée sur des mises en situation et adaptée aux adultes dans le cadre de
    la formation continue.
    Co dirigeant de l’établissement ENGLISH APART, formateur en langue anglaise et coach
    auprès des professionnels SCIENTIFIQUES, COMMERCIAUX et TECHNIQUES.

    Expérience dans des domaines pluri disciplinaires :
    Contrôle aérien, Groupes électrogènes, Energies renouvelables, Domaine médical :
    immunologie, cardiologie, ophtalmologie, Recherche scientifique : données scientifiques,
    biologie, géologie, Carénage de bateaux, Industrie automobile : générateurs de gaz (inflators)
    ...</p>

    <h2>Depuis 2021</h2>
    <p>Auto Entrepreneur

    Facilitateur et Consultant en langue anglaise

    Accompagnateur de projets professionnels, préparation de congrès internationaux en langue
    anglaise
    Mises en forme et corrections de publications scientifiques, commerciales et techniques.
    Accueil des Collaborateurs et Clients en Anglais (animation autour de repas d’affaires)
    Cours d’anglais en visio ou en présentiel.
    Stage en HOMESTAY au Conquet.</p></article><Mailto email="someone@somewhere.com" subject="Salut" body="Salut Glyn,">Contactez moi</Mailto>
  </Layout>
}