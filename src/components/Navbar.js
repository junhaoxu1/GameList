import React, { useState } from 'react'
import { NavLink } from "react-router-dom"

const Navbar = () => {
    const {isOpen, setOpen} = useState(false)
    return (
        <nav
            className="navbar is-dark"
            role="navigation"
            aria-label="main navigation"
            >
            <div className="container navbar navbar-dark bg-light border border-dark">
                <div className={`navbar-menu ${isOpen && "is-active"}`}>
                    <div className="navbar-start">
                        <NavLink className="{({isActive}) => 'list-group-item' + (isActive ?' demo' : '')} navbar-item btn btn-primary" to="/">
                            Home
                        </NavLink>

                        <NavLink
                            className="{({isActive}) => 'list-group-item' + (isActive ?' demo' : '')}
                            navbar-item btn btn-primary m-3"
                            to="/YourList"
                        >
                            Your List
                        </NavLink>

                        <NavLink
                            className="{({isActive}) => 'list-group-item' + (isActive ?' demo' : '')}
                            navbar-item btn btn-primary"
                            to="/AddGameToList"
                        >
                            Add Game
                        </NavLink>
                        <div className="navbar-end">
                            <div className="navbar-item">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default Navbar

