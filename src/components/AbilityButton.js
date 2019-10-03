import React from 'react'
import { Button } from 'react-bootstrap'
import styled from 'styled-components'

const StyleButton = styled(Button)`
   width:50px;
   height:50px;
   font-weight:bold;
   font-family:"Courier New";
   font-size:1rem;
`
const StyleNumber = styled.span`
   width:50px;
   height:50px;
   font-weight:bold;
   font-family:"Courier New";
   font-size:1.2rem;
`

export default function AbilityButtonContent () {
  return (
    <div>
      <StyleButton variant="primary">+</StyleButton>
      <StyleNumber>10</StyleNumber>
      <StyleButton variant="secondary">-</StyleButton>
    </div>
  )
}
