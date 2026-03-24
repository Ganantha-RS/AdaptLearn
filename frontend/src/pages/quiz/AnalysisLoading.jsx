import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AnalysisLoading = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/quiz-result");
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-8 animate-in fade-in duration-1000">
      <div className="relative">
        <div className="w-32 h-32 border-4 border-primary/20 rounded-full animate-ping absolute" />
        <div className="w-32 h-32 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        <div className="absolute inset-0 flex items-center justify-center text-3xl">
          🧠
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-2xl font-bold text-text-primary animate-pulse">
          Menganalisis Profilmu...
        </h2>
        <p className="text-text-secondary max-w-xs mx-auto">
          Kami sedang menyusun rekomendasi materi yang paling pas buat kamu.
        </p>
      </div>

      <div className="w-full max-w-[200px] h-1.5 bg-slate-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-primary animate-[loading_3s_ease-in-out_infinite]"
          style={{ width: "100%" }}
        />
      </div>
    </div>
  );
};

export default AnalysisLoading;
