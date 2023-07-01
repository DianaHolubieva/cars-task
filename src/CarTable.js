import React, { useEffect, useState } from 'react';

const CarTable = ({ cars }) => {
    const [selectedActions, setSelectedActions] = useState({});

    const handleActionChange = (carId, action) => {
        setSelectedActions((prevSelectedActions) => ({
            ...prevSelectedActions,
            [carId]: action,
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
            {cars.map((car) => (
                <tr key={car.id}>
                    <td>{car.car}</td>
                    <td>{car.car_model}</td>
                    <td>{car.car_vin}</td>
                    <td>{car.car_color}</td>
                    <td>{car.car_model_year}</td>
                    <td>{car.price}</td>
                    <td>{car.availability}</td>
                    <td>
                        <select
                            value={selectedActions[car.id] || ''}
                            onChange={(e) => handleActionChange(car.id, e.target.value)}
                        >
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