import React, { useState, useEffect } from 'react'
import { ModalBody } from 'react-bootstrap'
import Games from "../components/Games"

const YourList = () => {
    const [games, setGames] = useState([])
    
    useEffect (() => {
        const getGames = async () => {
          const gamesFromServer = await fetchGames()
          setGames(gamesFromServer)
        }
    
        getGames()
      }, [])
    
      const fetchGames = async () => {
        const res = await fetch("/games")
        const data = await res.json()
    
        console.log(data)
        return data
      }
    
      const deleteGame = async ( id ) => {
        await fetch(`/games/${id}`, {
          method: "DELETE",
        })
      
        setGames(games.filter((game) => 
        game.id !== id))
      }

    return (
        <div className="container">
            {games.length > 0 ? 
            <Games games={games}
            onDelete={deleteGame}/> : "No Games On The List"}
            
        </div>
    )
}

export default YourList
