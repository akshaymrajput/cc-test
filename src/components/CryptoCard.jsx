import React from "react";
import "./CryptoCard.css";

const CryptoCard = ({ currency, rate, symbol }) => {
    return (
        <div className="crypto-card">
            <h2>{currency}</h2>
            <p>
                <span
                    className="currency-symbol"
                    dangerouslySetInnerHTML={{ __html: symbol }}
                ></span>
                {rate}
            </p>
        </div>
    );
};

export default CryptoCard;
