import React from 'react';
import Home from 'features/Home';
import Login from 'features/Login';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/">
          <Route path="home" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route
            index
            element={
              <>
                Hello. Click the link below:
                <div>
                  <Link to="home">Home</Link>
                </div>
                <div>
                  <Link to="login">Login</Link>
                </div>
              </>
            }
           />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
