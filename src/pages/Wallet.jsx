import React, { useState } from "react";
import Web3 from "web3";
import "./Wallet.css";

const Wallet = () => {
    const [connected, setConnected] = useState(false);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const connectWallet = async () => {
        try {
            setLoading(true);
            if (window.ethereum) {
                await window.ethereum.request({
                    method: "eth_requestAccounts",
                });
                const web3 = new Web3(window.ethereum);

                const accounts = await web3.eth.getAccounts();
                const selectedAccount = accounts[0];
                setMessage(`Wallet connected: ${selectedAccount}`);
                setConnected(true);
            } else {
                setMessage(
                    "MetaMask not detected. Please install MetaMask Extension to connect your wallet."
                );
            }
        } catch (error) {
            console.error("Error connecting wallet:", error);
            setMessage("Failed to connect wallet. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="wallet-container">
            <h1 className="wallet-header">Wallet</h1>
            <div className="wallet-content">
                {!connected && (
                    <button
                        className="wallet-button"
                        onClick={connectWallet}
                        disabled={loading}
                    >
                        {loading ? "Connecting..." : "Connect Wallet"}
                    </button>
                )}
                {connected && <p className="wallet-message">{message}</p>}
            </div>
        </div>
    );
};

export default Wallet;
