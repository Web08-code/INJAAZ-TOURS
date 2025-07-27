import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';

// Test component to demonstrate router functionality
const TestHome: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Test Router - Home</h1>
      <p className="mb-4">Current path: {location.pathname}</p>
      <div className="space-x-4">
        <Link to="/test-about" className="text-blue-500 hover:underline">
          Go to About (Link)
        </Link>
        <button 
          onClick={() => navigate('/test-contact')}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Go to Contact (Navigate)
        </button>
      </div>
    </div>
  );
};

const TestAbout: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Test Router - About</h1>
      <Link to="/test" className="text-blue-500 hover:underline">
        Back to Home
      </Link>
    </div>
  );
};

const TestContact: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Test Router - Contact</h1>
      <Link to="/test" className="text-blue-500 hover:underline">
        Back to Home
      </Link>
    </div>
  );
};

// Test Router Component
export const TestRouter: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-md p-4">
          <div className="flex space-x-4">
            <Link to="/test" className="text-blue-600 hover:text-blue-800">Home</Link>
            <Link to="/test-about" className="text-blue-600 hover:text-blue-800">About</Link>
            <Link to="/test-contact" className="text-blue-600 hover:text-blue-800">Contact</Link>
          </div>
        </nav>
        
        <Routes>
          <Route path="/test" element={<TestHome />} />
          <Route path="/test-about" element={<TestAbout />} />
          <Route path="/test-contact" element={<TestContact />} />
          <Route path="*" element={
            <div className="p-4">
              <h1 className="text-2xl font-bold text-red-600">404 - Page Not Found</h1>
              <Link to="/test" className="text-blue-500 hover:underline">Go to Home</Link>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
};

export default TestRouter;