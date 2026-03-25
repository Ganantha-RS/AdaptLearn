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
    <div className="min-h-screen flex items-center justify-center bg-[#FFF6F2] p-6">
      
      {/* Card */}
      <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-8 flex flex-col items-center text-center space-y-6">

        {/* Loader */}
        <div className="relative">
          <div className="w-24 h-24 border-4 border-orange-200 rounded-full animate-ping absolute" />
          <div className="w-24 h-24 border-4 border-orange-400 border-t-transparent rounded-full animate-spin" />
          <div className="absolute inset-0 flex items-center justify-center text-2xl">
            🧠
          </div>
        </div>

        {/* Text */}
        <div className="space-y-2">
          <h2 className="text-lg font-bold text-gray-800 animate-pulse">
            Menganalisis Profilmu...
          </h2>
          <p className="text-sm text-gray-500 max-w-xs">
            Kami sedang menyusun rekomendasi materi yang paling pas buat kamu.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-1.5 bg-orange-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-orange-400 animate-[loading_3s_ease-in-out_infinite]"
            style={{ width: "100%" }}
          />
        </div>

      </div>
    </div>
  );
};

export default AnalysisLoading;