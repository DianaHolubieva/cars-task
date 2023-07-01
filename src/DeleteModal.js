import React from 'react';

const DeleteModal = ({ car }) => {
    return (
        <div>
            <h2>Delete Car</h2>
            <p>Are you sure ?</p>
            <button>Delete</button>
            <button>Cancel</button>
        </div>
    );
};

export default DeleteModal;