import { AppConfig } from 'blockstack'

export const appConfig = new AppConfig(['store_write', 'publish_data'])
export const ANIMALS = [
  {
    id: 'guitar',
    name: 'Playing Guitar',
    superpower: 'Play some sweet tunes.'
  },
  {
    id: 'knit',
    name: 'Knitting',
    superpower: 'Hobby for knitting.'
  },
  {
    id: 'photo',
    name: 'Photography',
    superpower: 'Capturing the scenary.'
  }]

export const TERRITORIES = [
  {
    id: 'Happy',
    name: 'Happy',
    superpower: 'Happy'
  },
  {
    id: 'sad',
    name: 'sad',
    superpower: 'sad'
  }
]

export const ME_FILENAME = 'me.json'
export const SUBJECTS_FILENAME = 'subjects.json'
export const EXPLORER_URL = 'https://explorer.blockstack.org'


export const OTHER_KINGDOMS = [
  {
    app: 'https://animal-kingdom-1.firebaseapp.com',
    ruler: 'larry.id'
  },
  {
    app: 'http://localhost:3001',
    ruler: 'larz.id'
  },
  {
    app: 'https://decentralised-islands.netlify.com',
    ruler: 'yannael_leborgne.id'
  },
  {
      app: 'https://thirsty-jang-0c0a17.netlify.com',
      ruler: 'ma1222042.id.blockstack'
  }
]
