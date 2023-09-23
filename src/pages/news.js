import Nav from "../components/nav"
import { Link } from "react-router-dom"

const News = () => {
    return (
        <div className="news-page">
            <Nav />

            <p className="news-text">Do you want to go back <Link className="news-link" to="/">Home?</Link></p>

        </div>
    )
}
export default News