import React from "react";
import { NavLink } from "react-router-dom";

function Home(props) {
    return (
        <div className="center">
            <div className="flex">
                <div className="grid-item">
                    <h1>Grow Your Business With</h1>
                    <h1 style={{ color: 'rgb(147, 214, 45)' }}>REACT</h1>
                    <h3>We are here to get the best website!!!</h3>
                    <NavLink to='/services'>GET STARTED</NavLink>
                </div>
                <div className="grid-item">
                    <img src={props.img} alt="An Image of a person Programming..." className="img" />
                </div>
            </div>
        </div>
    )
}
export default Home;