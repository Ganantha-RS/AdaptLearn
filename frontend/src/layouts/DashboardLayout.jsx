import { Outlet, Link } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Top Nav */}
      <nav className="h-16 border-b flex items-center justify-between px-6 sticky top-0 bg-white z-50">
        <h1 className="text-xl font-bold text-primary">AdaptLearn</h1>
        <div className="w-8 h-8 rounded-full bg-gray-200"></div>
      </nav>

      {/* Content Area */}
      <main className="flex-1 pb-20"> 
        <Outlet />
      </main>

      {/* Bottom Nav */}
      <nav className="fixed bottom-0 w-full bg-white border-t h-16 flex items-center justify-around px-4">
        <Link to="/dashboard" className="flex flex-col items-center text-primary">
          <span className="text-xs mt-1 font-medium">Beranda</span>
        </Link>
        <Link to="/materi" className="flex flex-col items-center text-gray-400">
          <span className="text-xs mt-1 font-medium">Materi</span>
        </Link>
        <Link to="/profile" className="flex flex-col items-center text-gray-400">
          <span className="text-xs mt-1 font-medium">Profil</span>
        </Link>
      </nav>
    </div>
  );
};

export default DashboardLayout;