import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './views/home';
import NovoProduto from './views/novo-produto';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/novo-produto" element={<NovoProduto />} />
      </Routes>
    </Router>
  );
}

export default App;
