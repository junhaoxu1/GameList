import React, { useState } from "react"
import Header from "../components/Header"
import AddGame from "../components/AddGame"


const AddGameToList = () => {
const [games, setGames] = useState([])

const addGame = async (game) => {
    const res = await fetch("/games", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(game)
    })
    
    const data = await res.json()

    setGames([...games, data])
  }


    return (
    <div className="container">
        {<AddGame onAdd={addGame}/>}
    </div>
    )
}

export default AddGameToList
