import React from 'react';

const EditModal = ({ car }) => {
    return (
        <div>
            <h2>Edit Car</h2>
            <form>
                <label>
                    Color:
                    <input type="text" defaultValue={car.car_color} />
                </label>
                <label>
                    Price:
                    <input type="number" defaultValue={car.price} />
                </label>
                <label>
                    Availability:
                    <input type="checkbox" defaultChecked={car.availability} />
                </label>
                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default EditModal;