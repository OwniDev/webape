import React from 'react'
import styled from 'styled-components'
import SendRoundedIcon from '@material-ui/icons/SendRounded';


import colors from '../components/colors/colors'

const MailWrapper = styled.div`
border: 1px solid ${colors.turquoise};
background-color: ${colors.turquoise};;
border-radius:10px;
padding:8px 8px;
transition: 0.5s ease-in;
cursor:pointer;
a{
  display:block;
  height:30px;
  color:white;
  text-decoration:none;
  > * {
    display:inline;
  }
  p{
    margin:0px;
    line-height:1.2em;
  }
}
 svg{
    height:30px;
    width:auto;
    fill:white;
    align-self:stretch;
    transition: 0.5s ease-in;
    margin-right:20px;
    vertical-align:middle;
  }
  :hover{
    background-color: white;
    transition: 0.5s ease-out;
    svg{
      fill:${colors.turquoise};
       transition: 0.5s ease-out;
    }
    a{
      color:${colors.turquoise};
    }
  }

  @media screen and (max-width:600px){
    width:auto;
    a{
      p{
        display:none;
      }
    }
    svg{
      margin-right:0px;
      }
  }

`
const MailingButton = (props) => (
  <MailWrapper>
    <a href={`mailto:auxane@webape.dev?subject=${props.subject}`} title="Demander un devis">
    <SendRoundedIcon alt="Contact Icon" title="Contact"/>
    <p>Demander un devis</p>
    </a>
  </MailWrapper>
)

export default MailingButton