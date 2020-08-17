import React from 'react'
import CardContainer from './cardContainer';

const ContactText = () => (
    <CardContainer >
      <p style={{textAlign:'center'}}>Pour toute demande, envoyez un e-mail à</p>
      <a href="mailto:auxane@webape.dev"><h3 style={{textAlign:'center'}}>auxane@webape.dev</h3></a>
    </CardContainer>
)

export default ContactText;