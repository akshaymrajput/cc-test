import React, { useState, useEffect } from "react";
import {
    Chart,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import "./Population.css";

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

const Population = () => {
    const [populationData, setPopulationData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(
                "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
            );
            const data = await response.json();
            console.log(data.data);
            setPopulationData(data.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const getRandomColor = () => {
        return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
            Math.random() * 256
        )}, ${Math.floor(Math.random() * 256)})`;
    };

    const getChartData = () => {
        const years = populationData.map((item) => item.Year);
        const populations = populationData.map((item) => item.Population);
        const backgroundColors = populationData.map(() => getRandomColor());

        const datasets = years.map((year, index) => {
            return {
                label: year,
                data: [populations[index]],
                backgroundColor: [backgroundColors[index]],
            };
        });

        console.log(datasets);

        return {
            labels: years,
            datasets: [
                {
                    label: "Population",
                    data: populations,
                    backgroundColor: backgroundColors,
                    borderWidth: 1,
                    hoverBorderColor: "rgba(0, 0, 0)",
                },
            ],
        };
    };

    const options = {
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: "Population of United States",
            },
        },
        responsive: true,
        scales: {
            x: {
                title: {
                    display: true,
                    text: "Year",
                },
                ticks: {
                    font: {
                        size: 10,
                    },
                },
            },
            y: {
                beginAtZero: false,
                title: {
                    display: true,
                    text: "Population",
                },
                ticks: {
                    font: {
                        size: 10,
                    },
                },
            },
        },
    };

    return (
        <div className="graph-container">
            <h2 className="graph-label">Population Graph</h2>
            <div className="canvas-container">
                <Bar options={options} data={getChartData()} />
            </div>
        </div>
    );
};

export default Population;
