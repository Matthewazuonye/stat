import { Link } from "react-router-dom"
import Sidenav from "./sidenav";
import { useState } from "react";

// const hamburger = document.querySelector('.hamburger')
// function activemenu() {
//     hamburger.classList.toggle('active')
// }
// hamburger.addEventListener('click', activemenu) 

const Nav = () => {

    const [open, setopen] = useState(false)
    const handleClick = () => {
        setopen(!open)
    }
    return (
        <div className="nav">
            <Sidenav open={open} />
            <div className="container">
                <h1 className="logo">Cryptocurrencies</h1>
                <div className="hamburger" id="toggle" onClick={handleClick}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <div className="nav-con">
                    <Link className="page" to={"/"}>Home</Link>
                    <Link className="page" to={"/crypto"}>Crypto</Link>
                    <Link className="page" to={"/news"}>News</Link>
                    <Link className="page" to={"/about"}>About</Link>
                </div>
            </div>
        </div>
    )
}
export default Nav