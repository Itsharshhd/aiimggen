import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import { logo } from './assets';
import { Home, CreatePost } from './page';

const App = () => (
  <BrowserRouter>
    <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4] h-24">
      <Link to="/">
        <img src={logo} alt="logo" className="w-60 object-contain" />
      </Link>

      <Link to="/create-post" className="font-inter font-medium bg-red-400 text-white px-4 py-2 rounded-md">Create</Link>
    </header>
    <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)] h-full bg-gradient-to-r from-cyan-500 to-blue-500">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </main>
    <footer className='w-full flex justify-center items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4] h-24'>
      <span className='text-red-500'><strong><i>Made By Harsh Dubey</i></strong></span>
    </footer>
  </BrowserRouter>
);

export default App;
