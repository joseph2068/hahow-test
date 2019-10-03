import React from 'react'
import logo from './logo.svg'
import HeroListPage from './pages/HeroListPage'
import HeroProfilePage from './pages/HeroProfilePage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import styled from 'styled-components'
import image from './image/bg.jpg'


const StyleContent = styled.div`
    background:url('${image}') no-repeat center center;
    height:100vh;
    background-size:cover;
    opacity:.8
`
export const ContextStore = React.createContext({
  hero: {}
})

function App () {
  return (
    <StyleContent>
      <Router>
        <Switch>
          <Route exact path="/heros" component={HeroListPage} />
          <Route path="/heroes/:heroId" component={HeroProfilePage} />
        </Switch>
      </Router>
    </StyleContent>
  )
}

export default App
