// src/layouts/LearningLayout.jsx
import { Outlet, useNavigate } from 'react-router-dom';

const LearningLayout = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navbar dengan Tombol Kembali */}
      <nav className="h-14 border-b flex items-center px-4 sticky top-0 bg-white z-50">
        <button 
          onClick={() => navigate('/dashboard')}
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          ← <span className="ml-2 font-medium">Keluar</span>
        </button>
      </nav>

      {/* Isi Materi */}
      <main className="flex-1 p-6 pb-24">
        <Outlet />
      </main>

      {/* Footer Navigasi Materi */}
      <div className="fixed bottom-0 w-full p-4 bg-white border-t flex gap-4">
        <button className="flex-1 py-3 border border-primary text-primary rounded-xl font-semibold">
          Sebelumnya
        </button>
        <button className="flex-[2] py-3 bg-primary text-white rounded-xl font-semibold shadow-lg shadow-primary/20">
          Materi Selanjutnya
        </button>
      </div>
    </div>
  );
};

export default LearningLayout;