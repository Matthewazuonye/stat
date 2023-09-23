import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/home"
import News from "../pages/news"
import About from "../pages/about"
import Crypto from "../pages/crypto"
import Detail from "../pages/detail"

const Routerpage = () => {

    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="crypto" element={<Crypto />} />
                <Route path="news" element={<News />} />
                <Route path="about" element={<About />} />
                <Route path="detail/:coinId" element={<Detail />} />
            </Routes>
        </BrowserRouter>


    )
}
export default Routerpage