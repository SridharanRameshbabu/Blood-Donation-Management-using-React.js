import React, { useEffect, useState } from 'react';
import Navbar from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';
import "bootstrap/dist/css/bootstrap.min.css";
import './Bloodbankdashboard.css';

const bloodStocksTemplate = [
    { type: "A+", source: "https://cdn.creazilla.com/icons/3271077/a-blood-type-icon-md.png" },
    { type: "B+", source: "https://cdn.creazilla.com/icons/3271083/b-blood-type-icon-md.png" },
    { type: "O+", source: "https://cdn.creazilla.com/icons/3271074/0-blood-type-icon-sm.png" },
    { type: "O-", source: "https://cdn.creazilla.com/icons/3271076/0-blood-type-icon-md.png" },
    { type: "AB+", source: "https://cdn.creazilla.com/icons/3271075/ab-blood-type-icon-md.png" },
    { type: "AB-", source: "https://cdn.creazilla.com/icons/3271079/ab-blood-type-icon-md.png" },
];

const Bloodbankdashboard = () => {
    const [stockData, setStockData] = useState({});

    useEffect(() => {
        const storedStock = JSON.parse(localStorage.getItem("bloodStock")) || [];

        const groupedData = {};

        storedStock.forEach(entry => {
            const { bloodType, quantity, updateDate } = entry;

            if (!groupedData[bloodType]) {
                groupedData[bloodType] = {
                    totalQuantity: 0,
                    latestUpdate: updateDate
                };
            }

            groupedData[bloodType].totalQuantity += quantity;

            // Update latest date if the current one is newer
            if (new Date(updateDate) > new Date(groupedData[bloodType].latestUpdate)) {
                groupedData[bloodType].latestUpdate = updateDate;
            }
        });

        setStockData(groupedData);
    }, []);

    return (
        <div>
            <Navbar />
            <div className="d-flex">
                <div style={{ width: '80px', minHeight: '100vh' }}>
                    <Sidebar />
                </div>

                <div className="flex-grow-1 p-3">
                    <h1 className="text-center mb-4" style={{ paddingTop: '60px' }}>Blood Stocks</h1>
                    <div className="container">
                        <div className="row g-4">
                            {bloodStocksTemplate.map((stock, index) => {
                                const data = stockData[stock.type];
                                return (
                                    <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
                                        <div className="card shadow-sm p-3 text-center h-100 bg-light">
                                            <img
                                                src={stock.source}
                                                alt={stock.type}
                                                className="img-fluid mx-auto"
                                                style={{ width: '100px' }}
                                            />
                                            <h5 className="mt-2">{stock.type}</h5>
                                            <p className="mb-1">
                                                <strong>Quantity:</strong> {data ? `${data.totalQuantity} ml` : '0 ml'}
                                            </p>
                                            <p className="mb-1">
                                                <strong>Blood Type:</strong> {data ? 'Available' : 'Not Available'}
                                            </p>
                                            <p className="mb-0">
                                                <strong>Last Updated:</strong> {data ? data.latestUpdate : 'N/A'}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bloodbankdashboard;
