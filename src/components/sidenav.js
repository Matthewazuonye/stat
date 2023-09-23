import { Link } from "react-router-dom"
const Sidenav = ({ open }) => {

    return (
        <div className={open ? "sidenav collapse" : "sidenav"} >
            <div className="side-links">
                <Link className="sidelink" to="/">Home</Link>
                <Link className="sidelink" to="/crypto">Crypto</Link>
                <Link className="sidelink" to="/news">News</Link>
                <Link className="sidelink" to="/about">About</Link>
            </div>
        </div>
    )
}
export default Sidenav