import React , { useState, useEffect } from 'react'
import styled from 'styled-components'
import HeroListContent from '../components/HeroList'
import {getListHero} from '../api/api'

const StyleListContent = styled.div`
    border:1px solid #000;
`


export default function HeroList () {
  const [hero, setHero] = useState([])

  useEffect(() => {
    getListHero().then(
      res => setHero(res.data)
    )
  }, [])
  return (
    <HeroListContent heroData={hero}>

    </HeroListContent>
  )
}
