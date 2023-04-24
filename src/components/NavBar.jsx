import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(props) {
    let a = false;
    const expand = () => {
        console.log(document.getElementsByClassName('height-0')[0].clientHeight);
        if (a) {
            document.getElementsByClassName('height-0')[0].style = "opacity:0;transform: translateY(0px);pointer-events: none;";
            a = false;
        }
        else {
            document.getElementsByClassName('height-0')[0].style = "opacity:1;transform: translateY(10px);pointer-events:auto";
            a = true;
        }
    }
    const resizeFn = () => {
        if (window.innerWidth > 800) {
            document.getElementsByClassName('height-0')[0].style = "opacity:1;transform: translateY(0px);pointer-events: auto;";
            a = false;
        }
    }
    window.onresize = resizeFn;
    return (
        <div className="navbar">
            <div className="container">
                <div className="logo">React App</div>
                <div className="height-0">
                    <div className="ylinks">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/services">Service</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                    </div>
                </div>
                <div className="none">
                    <button onClick={expand}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </button>
                </div>
                <div>
                    <button onClick={props.changeMode}>
                        <svg className="twenty-four-px gray" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M11.1 12.08c-2.33-4.51-.5-8.48.53-10.07C6.27 2.2 1.98 6.59 1.98 12c0 .14.02.28.02.42.62-.27 1.29-.42 2-.42 1.66 0 3.18.83 4.1 2.15 1.67.48 2.9 2.02 2.9 3.85 0 1.52-.87 2.83-2.12 3.51.98.32 2.03.5 3.11.5 3.5 0 6.58-1.8 8.37-4.52-2.36.23-6.98-.97-9.26-5.41z"></path>
                            <path d="M7 16h-.18C6.4 14.84 5.3 14 4 14c-1.66 0-3 1.34-3 3s1.34 3 3 3h3c1.1 0 2-.9 2-2s-.9-2-2-2z"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default NavBar;