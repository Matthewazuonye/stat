import axios from "axios"
import Nav from "../components/nav"
import { useEffect, useState } from "react";
import Loader from "../components/loader";
import { Link } from "react-router-dom";
const Crypto = () => {
    const [list, setlist] = useState([])
    const [isLoading, setisLoading] = useState(true)
    const getDta = () => {

        const options = {
            method: 'GET',
            url: 'https://coinranking1.p.rapidapi.com/coins',
            params: {
                referenceCurrencyUuid: 'yhjMzLPhuIDl',
                timePeriod: '24h',
                'tiers[0]': '1',
                orderBy: 'marketCap',
                orderDirection: 'desc',
                limit: '50',
                offset: '0'
            },
            headers: {
                'X-RapidAPI-Key': '1a03298b85msh39a69812cdc9afdp1c3244jsn3de5118653fd',
                'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
            }
        };
        axios.request(options).then(function (response) {
            console.log(response.data.data.coins)
            setisLoading(false)
            setlist(response.data.data.coins)
        }).catch(function (error) {
            console.log(error);
        })
    }
    useEffect(() => {
        getDta()
    }, [])
    return (
        <div className="crypto-page">
            <Nav />
            {
                isLoading ?
                    <Loader />
                    :
                    list?.map((item) => {
                        return (
                            <div className="coin-con">
                                <div className="coin-card">
                                    <p className="rank">{item.rank}.</p>
                                    <Link className="link" to={`/detail/${item.uuid}`}>
                                        <h1 key={item.name} className="coin-name">{item.name}</h1>
                                    </Link>
                                    {/* <p>{item.name}</p> */}
                                </div>
                                <img className="image" src={item.iconUrl} alt="" />
                                <div className="price-card">
                                    <div className="price-con">
                                        <p className="price-tag">Price:</p>
                                        <p className="price">${item.price}</p>
                                    </div>
                                </div>
                                <div className="price-con">
                                    <p className="price-tag">Market:</p>
                                    <p className="price">${item.marketCap}</p>
                                </div>
                                <div className="price-con">
                                    <p className="price-tag">Dailychange:</p>
                                    <p className="price">${item.change}</p>
                                </div>
                            </div>
                        )
                    })
            }
        </div>
    )
}
export default Crypto