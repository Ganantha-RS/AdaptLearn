import { useNavigate } from "react-router-dom";

const WelcomeScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center text-center space-y-8 pt-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="w-64 h-64 bg-surface-tint rounded-3xl flex items-center justify-center border-2 border-primary-light/30 shadow-xl shadow-primary/5">
        <div className="text-6xl">🚀</div>
      </div>

      <div className="space-y-4">
        <h2 className="text-3xl font-extrabold text-text-primary tracking-tight">
          Mulai Petualangan Belajarmu!
        </h2>
        <p className="text-text-secondary text-lg max-w-sm mx-auto leading-relaxed">
          Kami akan membantumu menemukan gaya belajar yang paling cocok dan
          level materi yang tepat untukmu.
        </p>
      </div>

      <div className="w-full pt-4">
        <button
          onClick={() => navigate("/quiz-style")}
          className="w-full py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-2xl shadow-lg shadow-primary/30 transition-all duration-300 transform hover:scale-[1.02] active:scale-95 cursor-pointer"
        >
          Siap, Mulai Sekarang!
        </button>
        <p className="mt-4 text-sm text-text-secondary">
          Hanya butuh waktu sekitar 5-10 menit.
        </p>
      </div>
    </div>
  );
};

export default WelcomeScreen;
