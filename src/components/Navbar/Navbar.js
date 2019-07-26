import React from "react";

const Navbar = (props) => {
        return (
            <div>
                <ul className="nav justify-content-center">
                    <button type="button" className="btn btn-sm btn-outline-secondary">Restart Clicky Game</button>
                    <button type="button" className="btn btn-sm btn-info">Click an image to start!</button>
                    {/* takes in the score props from this.state in App.js  */}
                    <span class="navbar-text">Score: {props.currentScore} | Top Score: {props.topScore}</span>
                </ul>
            </div>
        )
    
}

export default Navbar;