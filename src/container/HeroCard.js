import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { getProfileHero } from '../api/api'
import { ContextStore } from '../App'
import HeroProfile from './HeroProfile'

const StyleCard = styled.div`
    width:25%;
    margin:10px 5px;
    padding:5px 5px 0 5px;
    background: rgba(0,0,0,.8);
    text-align: center;
`

const ImgStyle = styled.img`
  vertical-align: top;
  max-width:100%;
  height:auto;
`
const NameStyle = styled.p`
  color:#fff;
  font-family:"Courier New";
  font-weight:bold;
  padding:20px 0;
  margin-bottom:0;
`
const Application = (data) => {
  console.log('data', data)
  return (
    <ContextStore.Provider value={ { hero: data }} >
      <HeroProfile/>
    </ContextStore.Provider>
  )
}

const getProfile = (id) => {
  getProfileHero(id)
    .then(res => { Application(res.data) })
}

export default function HeroCard ({ match, id, name, image }) {
  console.log('hero card', match, id, name, image)
  return (
    <StyleCard>
      <NavLink onClick={() => getProfile(id)} to={`/heroes/${id}`}>
        <ImgStyle src={image}/>
        <NameStyle>{name}</NameStyle>
      </NavLink>
    </StyleCard>)
}
