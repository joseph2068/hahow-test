import React from 'react'
import AbilityButton from '../container/AbilityButton'
import styled from 'styled-components'

const StyleButtonGroup = styled.div`
  display:flex;
  align-items:center;
`

export default function AbilityButtonGroupContent () {
  return (
    <StyleButtonGroup>
      <span>STR</span>
      <AbilityButton/>
    </StyleButtonGroup>
  )
}
