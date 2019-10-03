import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'
import HeroList from '../container/HeroList'

const StyleContent = styled.div`
    padding-top:20vh;
`
const StyleCardList = styled(Col)`
//  border:1px solid #000
`

export default function HeroListPage ({ match }) {
  console.log('match',match.params)
  return (
    <div>
      <StyleContent>
        <Container>
          {/* Stack the columns on mobile by making one full-width and the other half-width */}
          <Row>
            <Col xs={12} md={1}>
            </Col>
            <StyleCardList xs={12} md={10}>
              <HeroList/>
            </StyleCardList>
            <Col xs={12} md={1}>
            </Col>
          </Row>
        </Container>
      </StyleContent>
    </div>
  )
}
