import React, { useState, useMemo } from 'react'
import './HomePage.css'

export const HomePage = () => {
  const [query, setQuery] = useState('')
  const games = [
    'The Legend of Zelda',
    'Super Mario Odyssey',
    'Hollow Knight',
    'Celeste',
    'Minecraft',
    'Stardew Valley',
    'Elden Ring',
  ]

  const filteredGames = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return games
    return games.filter(g => g.toLowerCase().includes(q))
  }, [query])

  const handleSubmit = (e) => {
    e.preventDefault()
    // En un escenario real: navegar, disparar acción global o fetch.
    // Aquí mantenemos el filtrado local.
  }

  return (
    <div className="homepage-container">
      <h1>HomePage</h1>
      <nav>
        <div className="nav-inner">
          <ul>
            <li><a href="">inicio</a></li>
            <li><a href="">juegos</a></li>
            <li><a href="">reseñas</a></li>
          </ul>
          <form className="header-search" role="search" onSubmit={handleSubmit}>
            <input
              className="search-input"
              type="search"
              placeholder="Buscar juegos..."
              aria-label="Buscar"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className="search-button" type="submit">Buscar</button>
          </form>
        </div>
      </nav>
      
      <div className="page-content">
        <h2>Resultados</h2>
        <ul className="results">
          {filteredGames.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
