import React from 'react'; // Import React
import { Route, Routes, BrowserRouter } from 'react-router-dom'; // Import React Router
import './App.css';
import Post from './Post';
import Header from './Header';
import Layout from './Layout';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>

        <Route index element={<IndexPage />}/>
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
