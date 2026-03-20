import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import logo from '../assets/logo-adaptlearn.webp';


const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="p-4 pl-14 pr-14 bg-muted shadow-sm flex justify-between">
        <h1 className="font-bold text-primary text-xl">            
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="AdaptLearn Logo" className="h-8 w-auto" />
            <span className="text-xl font-bold text-gray-900">
              Adapt<span className="text-primary">Learn</span>
            </span>
          </Link>
        </h1>
        <div className="space-x-4 pt-1 items-center font-bold">
          <a href="/">Home</a>
          <a href="/">Fitur</a>
          <a href="/">Contact</a>
        </div>
        <div className=''>
          <a href="/login" className="bg-primary text-white px-4 py-2 rounded">Login</a>
          <a href="/registrasi" className="bg-primary text-white px-4 py-2 rounded">Mulai Gratis</a>
        </div>
      </nav>
      
      <main className="flex-grow">
        {/* Halaman Landing/Login */}
        <Outlet /> 
      </main>

      <footer className="p-8 bg-slate-800 text-white text-center">
        <p>&copy; 2026 AdaptLearn Team CC26-PS091</p>
      </footer>
    </div>
  );
};

export default MainLayout;