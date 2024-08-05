import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import Navbar from './components/Navbar';
import AdminPanel from './components/AdminPanel';
import ProductList from './components/ProductList';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Navbar />
        <div className="bg-gray-900 text-white min-h-screen">
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/admin" element={<AdminPanel />} />
          </Routes>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;