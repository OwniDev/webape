import styled from 'styled-components'
import colors from './colors/colors'

const CardWrapper = styled.div`
  max-width:1000px;
  width:100%;
 /* height:40%; */
  box-sizing:border-box;
  display:flex;
  flex-direction: ${props => props.reverse ? 'row-reverse' : 'row'};
  justify-content:space-evenly;

  background: #FFFFFF;
  box-shadow:  ${colors.boxShadow};
  border-radius: 10px;

  padding:20px 0px;
  margin:20px auto;
    > * {
      margin: 0px 20px;
      width: ${props => props.elements === '2' ? 'calc(50% - 20px)' : props => props.elements === '3' ? 'calc(30% - 20px)' : 'auto'};
    }
    @media screen AND (max-width:1024px){
      flex-direction:column;
      width: 100%;
      > * {
        width:90%;
        margin: 10px auto;
      }
      height: auto;
    }

`
export default CardWrapper;