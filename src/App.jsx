import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loginpage from './Components/loginpage/loginpage';
import ClippedDrawer from './Components/pages/Dashboard';
import ProtectedRoute from './Components/pages/ProtectedRoute';
import Profilepage from './Components/pages/Profilepage';
import Template from './Components/pages/Template';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/dasboard" element={<ClippedDrawer />}>
            <Route path="profile" element={<Profilepage />} />
            <Route path="template" element={<Template />} />
          </Route>
        </Route>
        
        <Route path="/" element={<Loginpage />} />
      </Routes>
    </Router>
  );
};

export default App;
