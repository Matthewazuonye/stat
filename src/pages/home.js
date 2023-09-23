import { Link } from "react-router-dom"
import Nav from "../components/nav"
const Home = () => {
    return (
        <div className="home">
            <Nav />
            <div className="home-con">
                <div className="card-one">
                    <div className="text-con">
                        <h1 className="header">Total Cryptocurrencies</h1>
                        <p className="number">50</p>
                        <h1 className="header">Total Marketcap</h1>
                        <p className="number">830.6B</p>
                        <h1 className="header">Total Market</h1>
                        <p className="number">34.6k</p>
                    </div>
                </div>
                <div className="card-two">
                    <div className="text-con">
                        <h1 className="header">Total Exchanges</h1>
                        <p className="number">184</p>
                        <h1 className="header">Total 24hours Volume</h1>
                        <button className="btn"><Link to={"crypto"} className="seemore">See More</Link></button>
                        {/* <Link className="seemore" to={"crypto"}>See More</Link> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home