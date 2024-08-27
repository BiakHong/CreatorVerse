// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './SideBar'; // Import the Sidebar component
import ViewAllCreators from './components/pages/ShowCreators';
import AddCreator from './components/pages/AddCreator';
import ViewCreator from './components/pages/ViewCreator';
const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
      <div className="content" style={{ flexGrow: 1, padding: '20px' }}>
      <Routes>
      <Route path="/" element={<ViewAllCreators />} />
        <Route path="/add-creator" element={<AddCreator />} />
        <Route path="/edit-creator/:id" element={<AddCreator />} />
        <Route path="/creator/:name" element={<ViewCreator />} />
      </Routes>
      </div>
      </div>
    </Router>
  );
};

export default App;


