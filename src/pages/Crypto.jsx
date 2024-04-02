import React, { useEffect, useState } from "react";
import "./Crypto.css";
import CryptoCard from "../components/CryptoCard";

const Crypto = () => {
    const [cryptoData, setCryptoData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "https://api.coindesk.com/v1/bpi/currentprice.json"
                );
                const data = await response.json();
                setCryptoData(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="crypto-container">
            {cryptoData && (
                <>
                    <div className="cards-container">
                        <h1>{cryptoData.chartName}</h1>
                        <div className="crypto-cards">
                            {Object.keys(cryptoData.bpi).map((currency) => (
                                <CryptoCard
                                    key={currency}
                                    currency={currency}
                                    rate={cryptoData.bpi[currency].rate}
                                    symbol={cryptoData.bpi[currency].symbol}
                                />
                            ))}
                        </div>
                    </div>
                    <p className="disclaimer">{cryptoData.disclaimer}</p>
                </>
            )}
        </div>
    );
};

export default Crypto;
