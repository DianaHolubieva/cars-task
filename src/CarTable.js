import React, { useEffect, useState } from 'react';
import { getDataFromAPI } from './api.js';

const apiUrl = 'https://myfakeapi.com/api/cars/';
getDataFromAPI(apiUrl)
    .then(data => {
        console.log('Data:', data);
    })
    .catch(error => {
        console.log('Error:', error);
    });

const CarTable = ({ cars }) => {
    const [selectedActions, setSelectedActions] = useState({});

    const handleActionChange = (carsId, action) => {
        setSelectedActions((prevSelectedActions) => ({
            ...prevSelectedActions,
            [carsId]: action,
        }));
    };

    useEffect(() => {
        const storedSelectedActions = localStorage.getItem('selectedActions');
        if (storedSelectedActions) {
            setSelectedActions(JSON.parse(storedSelectedActions));
        }
    }, []);

    return (
        <table>
            <thead>
            <tr>
                <th>Company</th>
                <th>Model</th>
                <th>VIN</th>
                <th>Color</th>
                <th>Year</th>
                <th>Price</th>
                <th>Availability</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {cars.map((cars) => (
                <tr key={cars.id}>
                    <td>{cars.car}</td>
                    <td>{cars.car_model}</td>
                    <td>{cars.car_vin}</td>
                    <td>{cars.car_color}</td>
                    <td>{cars.car_model_year}</td>
                    <td>{cars.price}</td>
                    <td>{cars.availability}</td>
                    <td>
                        <select value={selectedActions[cars.id] || ''} onChange={(e) => handleActionChange(cars.id, e.target.value)}>
                            <option value="">Choose an action</option>
                            <option value="edit">Edit</option>
                            <option value="delete">Delete</option>
                        </select>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default CarTable;