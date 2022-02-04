import Game from "./Game"

const Games = ({ games, onDelete }) => {
    return (
        <>
            <h1>Your Game List</h1>
            {games.map((game, index) => (
            <Game
                key={index}
                game={game}
                onDelete={onDelete}

            />

            ))}        
        </>
    )
}

export default Games