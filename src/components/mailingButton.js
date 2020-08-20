import React from 'react'
import styled from 'styled-components'

import colors from '../components/colors/colors'

const MailWrapper = styled.div`
border: 1px solid ${colors.turquoise};
background-color: ${colors.turquoise};;
border-radius:10px;
padding:5px 8px;
transition: 0.5s ease-in;
cursor:pointer;
a{
  text-decoration:none;
  color:white;
  > * {
    display:inline;
  }
  p{
    margin:0px;
    line-height:1.2em;
    vertical-align:super;
  }
}
 svg{
    height:30px;
    width:auto;
    fill:white;
    align-self:stretch;
    transition: 0.5s ease-in;
    margin-right:20px;
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M400,163.2V68a20.023,20.023,0,0,0-20-20H132a20.023,20.023,0,0,0-20,20v95.2L16,231.766V496H496V231.766Zm53.679,77.667L400,275.96V202.52ZM144,80H368V296.883l-57.166,37.378-46.578-24.152-50.764,24.507L144,292.425ZM263.744,345.89,464,449.727V464H48V450.043ZM48,271.575,179.144,351.2,48,414.509Zm295.446,79.6L464,272.347V413.681ZM112,202.52V273L58.666,240.615Z" class="ci-primary"/>
    </svg>
    <p>Demander un devis</p>
    </a>
  </MailWrapper>
)

export default MailingButton