import React from 'react'
import styled from 'styled-components'

const IconWrapper = styled.img`
  width: 30px;
  height: 30px;
`

const Icon = (props) => (
  <IconWrapper {...props} />
)

export default Icon;