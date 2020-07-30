
import React from 'react'
import CardWrapper from './cardWrapper';
import CardContainer from './cardContainer';

const AboutText = () => (
  <CardWrapper>
    <CardContainer >
      <p>
        Bienvenue sur WebApe ! <br/>
        Afin de vous aider au mieux dans vos projets, je possède tout un catalogue de compétences :</p>
          <ul>
            <li>design</li>
            <li>développement web front et back</li>
            <li>et des connaissances marketing</li>
          </ul>
        <p>
        Je construit les sites avec React et ses différents frameworks, notamment Gatsby, Nextjs et Frontity.
        Afin de compléter les offres que je propose, je me forme en ce moment au stack MERN.
      </p>
    </CardContainer>
  </CardWrapper>
)

export default AboutText;

