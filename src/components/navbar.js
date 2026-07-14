import { Component } from "react";
import "./navbarStyles.css";
import { MenuItems } from "./menuItems.js";
import { Link } from "react-router-dom";


class Navbar extends Component{
    state = {clicked: false};
    handleClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }
    render(){
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo">BeyondAtlas</h1>
                <div className="menu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fa-solid fa-times" : "fa-solid fa-bars "}></i>
                </div>
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu "}>
                    {MenuItems.map((item, index) => {
                        return (
                        <li key={index}>
                         <Link className={item.cName} 
                         to={item.url}>
                           <i className={item.icon}></i>{item.title}</Link>
                        </li>
                        );
                    })}
                    <button>Sign Up</button>
                    
                </ul>
            </nav>
        );
    }

}

export default Navbar;