import { useState } from "react"

const AddGame = ({ onAdd }) => {
    const [name, setName] = useState("")
    const [genre, setGenre] = useState("")
    const [score, setScore] = useState("")
    const [image, setImage] = useState("")

    const onSubmit = (e) => {

        onAdd({ name, genre, score, image })

        setName(" ")
        setGenre(" ")
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-group">
                <label className="h2">Game Name:</label>
                <input
                className="form-control"
                type="text"
                placeholder="Add Game"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                />
            </div>
            <div className="form-group mt-3">
                <label className="h2">Game Genre:</label>
                <input
                className="form-control"
                type="text"
                placeholder="Add Genres"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                required
                />
            </div>
            <div className="form-group mt-3">
                <label className="h2">Game Score:</label>
                <select 
                className="form-select"
                value={score} 
                onChange = {(e) => setScore(e.target.value)}
                required>
                    <option value="">Add Score</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
            <div className="form-group mt-3">
                <label className="h2">Thumbnail:</label>
                <input
                className="form-control"
                placeholder="Add Image URL"
                onChange={(e) => setImage(e.target.value)}
                required
                />
            </div>
            <div>
                <input type="submit" value="Save Game" className="btn btn-outline-dark mt-3 mb-3"/>
            </div>
        </form>
    )
}

export default AddGame 
