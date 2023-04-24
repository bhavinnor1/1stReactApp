import React from "react";
import { NavLink } from "react-router-dom";

const Home = (props) => {
    return (
        <div className="center">
            <div className="flex">
                <div className="grid-item item1">
                    <h1>Welcome To About Page</h1>
                    <h1 style={{ color: 'rgb(147, 214, 45)' }}>BHAVIN NOR</h1>
                    <h3>We Are Here To Get The Best Responsive Layout!!</h3>
                    <NavLink to="/contact">CONTACT HERE</NavLink>
                </div>
                <div className="grid-item item2">
                    <img src={props.img} alt="An Image of a people Planning..." className="img" />
                </div>
            </div>
        </div>
    )
}
export default Home;