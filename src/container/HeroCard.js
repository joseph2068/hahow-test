import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const StyleCard = styled.div`
    width:25%;
    height:200px;
    border:1px solid;
`

export default function HeroCard ({ match, id, name, image }) {
  console.log('hero card', match, id, name, image)
  return (
  //   <div>
  //     {heroIdData.length > 0 ? heroIdData.map((item, index) => (
    <StyleCard>
      <NavLink to={`/heroes/${id}`}><img src={image}/></NavLink>
      <p>{name}</p>
      {/* <div>
          <h1>Users</h1>
          <p>{params.heroId}</p>
        </div> */}
    </StyleCard>)
//       ) : <StyleCard />}
//   </div>
//   )
}
