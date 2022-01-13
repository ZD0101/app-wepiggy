import React, {useState} from 'react';
import "./CoinsList.css"
import Coin from "./Coin";
import Input from "@mui/icons-material/Input";
import Grid from "./Grid";

function CoinsList(props) {

    const [searchTerm, setSearchTerm] = useState('')

    let coins = [
        {
            name: "Ethereum",
            ticker: "ETH",
            image: "https://www.pngall.com/wp-content/uploads/10/Ethereum-Logo-PNG-File.png",
            depositMarket: "21.122",
            depositTotalAPY: "0.4",
            borrowMarket: "2.997",
            borrowTotalAPY: "0.47"
        },
        {
            name: "Avalanche",
            ticker: "AVAX",
            image: "https://www.pngall.com/wp-content/uploads/10/Ethereum-Logo-PNG-File.png",
            depositMarket: "21.122",
            depositTotalAPY: "0.4",
            borrowMarket: "2.997",
            borrowTotalAPY: "0.47"
        },
        {
            name: "Terra",
            ticker: "LUNA",
            image: "https://www.pngall.com/wp-content/uploads/10/Ethereum-Logo-PNG-File.png",
            depositMarket: "21.122",
            depositTotalAPY: "0.4",
            borrowMarket: "2.997",
            borrowTotalAPY: "0.47"
        },
        {
            name: "Cake",
            ticker: "CAKE",
            image: "https://www.pngall.com/wp-content/uploads/10/Ethereum-Logo-PNG-File.png",
            depositMarket: "21.122",
            depositTotalAPY: "0.4",
            borrowMarket: "2.997",
            borrowTotalAPY: "0.47"
        },
        {
            name: "USDT",
            ticker: "USDT",
            image: "https://www.pngall.com/wp-content/uploads/10/Ethereum-Logo-PNG-File.png",
            depositMarket: "21.122",
            depositTotalAPY: "0.4",
            borrowMarket: "2.997",
            borrowTotalAPY: "0.47"
        },
        {
            name: "USDC",
            ticker: "USDC",
            image: "https://www.pngall.com/wp-content/uploads/10/Ethereum-Logo-PNG-File.png",
            depositMarket: "21.122",
            depositTotalAPY: "0.4",
            borrowMarket: "2.997",
            borrowTotalAPY: "0.47"
        },
        {
            name: "USDC",
            ticker: "USDC",
            image: "https://www.pngall.com/wp-content/uploads/10/Ethereum-Logo-PNG-File.png",
            depositMarket: "21.122",
            depositTotalAPY: "0.4",
            borrowMarket: "2.997",
            borrowTotalAPY: "0.47"
        },
        {
            name: "USDC",
            ticker: "USDC",
            image: "https://www.pngall.com/wp-content/uploads/10/Ethereum-Logo-PNG-File.png",
            depositMarket: "21.122",
            depositTotalAPY: "0.4",
            borrowMarket: "2.997",
            borrowTotalAPY: "0.47"
        }
    ]

    function filterCoins(event) {
        coins = coins.filter(c => c.name.includes(event.target.value))
        console.log(coins)
    }

    return (
        <div className="CoinsList">
            <div className="SearchAction">
                <h1>Markets</h1>
                <input className="SearchBox" type="text" placeholder="Search token name"
                       onChange={event => setSearchTerm(event.target.value)}/>
            </div>
            <div>
                {coins.filter(c => c.name.toLowerCase().includes(searchTerm)).map(c => (
                    <Coin key={c.name}
                          name={c.name}
                          ticker={c.ticker}
                          image={c.image}
                          depositMarket={c.depositMarket}
                          depositTotalAPY={c.depositTotalAPY}
                          borrowMarket={c.borrowMarket}
                          borrowTotalAPY={c.borrowTotalAPY}
                    />
                ))}
            </div>
        </div>
    );
}

export default CoinsList;
