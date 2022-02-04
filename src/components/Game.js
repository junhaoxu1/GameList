const Game = ({ game, onDelete, onUpdate }) => {
    return (
    <div className="border border-secondary mt-2">
        <div className={`game`}>
            <img className="img-thumbnail border border-dark" src={game.image} alt="" />
            <h3>Game:</h3>
            <h5>{game.name}{" "}</h5>
            <h5>Genre: {game.genre}</h5>
            <h5>Score: {game.score}/5</h5>
            <div className="d-grid gap-2" 
                onClick={() => onDelete(game.id)}>
                    <button className="btn btn-danger">Delete Game</button>
            </div>
        </div>
    </div>
    )
}

export default Game