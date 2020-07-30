import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Centered from '../components/centered'
import PageTitle from '../components/pageTitle';
import ProjectCard from '../components/projectCard';

import HastysTexts from '../components/images/hastystext'
import Heliotrope from '../components/images/heliotrope'

const PastProjects = () => (
  <Layout>
     <SEO title="Projects" />
     <Centered>
        <PageTitle title="Projets en cours" />
        <ProjectCard 
        img={<HastysTexts/>}
        link="https://hastystexts.netlify.app/"
        description="Simulateur d'une conversation de groupe entre plusieurs personnages. Le portable appartient au personnage central, les bulles s'ajustent selon le personnage sélectionné."
        extra="Designer - Développeur"
        reverse
       />
        <ProjectCard 
        img={<Heliotrope/>}
        link="https://auxanen.github.io/Heliotrope/"
        description="Découvrez la page d'accueil d'Héliotrope. Un fleuriste proposant divers atelier et activités autour de l'art floral. Site démo, écrit sans frameworks."
        extra="Designer - Développeur"
        />
     </Centered>
  </Layout>
)

export default PastProjects
