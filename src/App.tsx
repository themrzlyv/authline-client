import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route index element={<h4>home page</h4>} />
          <Route path="/about" element={<h4>about page</h4>} />
          <Route path="/contact" element={<h4>contact page</h4>} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
