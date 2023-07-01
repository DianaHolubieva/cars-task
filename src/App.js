import React from 'react';
import CarTable from './CarTable';
import AddModal from './AddModal';
import EditModal from './EditModal';
import DeleteModal from './DeleteModal';

const App = () => {
  return (
      <div>
        <h1>Car List</h1>
        <CarTable />
        <AddModal />
        <EditModal />
        <DeleteModal />
      </div>
  );
};

export default App;