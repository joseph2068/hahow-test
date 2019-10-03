import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'
import HeroCard from '../container/HeroCard'

const StyleListContent = styled.div`
    border:1px solid #000;
    height:auto;
    display:flex;
`
const heroData = [
  {
    id: '1',
    name: 'Daredevil',
    image: 'http://i.annihil.us/u/prod/marvel/i/mg/6/90/537ba6d49472b/standard_xlarge.jpg'
  },
  {
    id: '2',
    name: 'Thor',
    image: 'http://x.annihil.us/u/prod/marvel/i/mg/5/a0/537bc7036ab02/standard_xlarge.jpg'
  },
  {
    id: '3',
    name: 'Iron Man',
    image: 'http://i.annihil.us/u/prod/marvel/i/mg/6/a0/55b6a25e654e6/standard_xlarge.jpg'
  },
  {
    id: '4',
    name: 'Hulk',
    image: 'http://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0/standard_xlarge.jpg'
  }
]

export default function HeroListContent () {
  return (
    <StyleListContent>
      {heroData.length > 0 ? heroData.map((item , index)=> (<HeroCard key={item.id} {...item} />)) : null}
    </StyleListContent>
  )
}
