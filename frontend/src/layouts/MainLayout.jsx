import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="p-4 bg-white shadow-sm flex justify-between">
        <h1 className="font-bold text-primary text-xl">AdaptLearn</h1>
        <div className="space-x-4">
          <a href="/">Home</a>
          <a href="/login" className="bg-primary text-white px-4 py-2 rounded">Login</a>
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