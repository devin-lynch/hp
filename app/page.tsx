'use client'
import React, { useState, useEffect } from 'react'

export default function Home() {

  const [characters, setCharacters] = useState([])

  const fetchCharacters = async () => {
    try {
      let url = 'https://hp-api.onrender.com/api/characters'
      let response = await fetch(url)
      let data = await response.json()
      console.log(data)
      setCharacters(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    // setCharacters(fetchCharacters())
    fetchCharacters()
  }, [])

  const allCharacters = characters.map((character, i) => {
    return (
      <div>
        {character.actor ? <li>'Actor: ' {character.actor}</li>: null}
        {character.house ? <li>'House: ' {character.house} </li>: null}
        {character.patronus ? <li>'Patronus: ' {character.patronus} </li> : null}
        <br></br>
      </div>
    )
  })

  return (
    <main className='text-center'>
      <ul>
        {allCharacters}
      </ul>
    </main>
  )
}
