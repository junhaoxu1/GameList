import PropTypes from "prop-types"

const Header = () => {
    return (
        <header>
            <h1>Game List</h1>
        </header>
    )
}

Header.propTypes = {
    title: PropTypes.string,
}


export default Header
