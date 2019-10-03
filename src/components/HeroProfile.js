import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'
import AbilityButtonGroup from '../container/AbilityButtonGroup'

const StyleBox = styled.div`
//  border:1px solid #000;
 height:500px;
 width:100%;
`
const StyleCol = styled(Col)`
//  border:1px solid #000;

`

export default function HeroProfileContent () {
  return (
    <StyleBox>
      <Container>
        {/* Stack the columns on mobile by making one full-width and the other half-width */}
        <Row>
          <StyleCol xs={12} md={6}>
            <AbilityButtonGroup/>
          </StyleCol>
          <StyleCol xs={12} md={6}>11ee312</StyleCol>
        </Row>
      </Container>
    </StyleBox>
  )
}
