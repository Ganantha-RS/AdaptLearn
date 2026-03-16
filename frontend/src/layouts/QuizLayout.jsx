import { Outlet } from 'react-router-dom';

const QuizLayout = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="p-6 flex flex-col items-center">
        <h1 className="text-xl font-bold text-primary mb-4">AdaptLearn</h1>
        {/* Progress Bar Dinamis (Bisa dikirim via context nanti) */}
        <div className="w-full max-w-md bg-gray-100 h-2 rounded-full overflow-hidden">
          <div className="bg-primary h-full transition-all duration-500" style={{ width: '40%' }}></div>
        </div>
      </header>

      {/* Area Soal/Konten */}
      <main className="flex-1 flex flex-col px-6 pb-10">
        <div className="max-w-xl mx-auto w-full">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default QuizLayout;