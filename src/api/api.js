import axios from 'axios'

const listHero = axios.create({
  baseURL: 'http://hahow-recruit.herokuapp.com/heroes'
})


const singleHero = axios.create({
  baseURL: 'http://hahow-recruit.herokuapp.com/heroes/'
})

// get List Heroes
export const getListHero = () => listHero.get('/')

// get single Hero
export const getSingleHero = (heroId) => singleHero.get(`/${heroId}`)

// get Profile of Hero
export const getProfileHero = (heroId) => singleHero.get(`/${heroId}/profile`)

// patch Hero's Profile
export const patchProfileHero = (heroId,data) => singleHero.patch(`/${heroId}/profile`,data)

