import axios from 'axios'

const listHero = axios.create({
  baseURL: 'http://hahow-recruit.herokuapp.com/heroes'
})


