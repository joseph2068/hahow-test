import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'
import HeroCard from '../container/HeroCard'

const StyleListContent = styled.div`
    height:auto;
    display:flex;
`

export default function HeroListContent ({heroData}) {
  return (
    <StyleListContent>
      {heroData.length > 0 ? heroData.map((item , index)=> (<HeroCard key={item.id} {...item} />)) : null}
    </StyleListContent>
  )
}
