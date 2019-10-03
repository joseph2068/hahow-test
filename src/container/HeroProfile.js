import React from 'react'
import styled from 'styled-components'
import HeroProfileContent from '../components/HeroProfile'
import { ContextStore } from '../App'

const StyleCardList = styled.div`
 height:500px;
 width:100%;
`

export default function HeroProfile () {
  const value = React.useContext(ContextStore)
  console.log('value',value)
  return (
    <React.Fragment>
      {}
    </React.Fragment>
  )
}
