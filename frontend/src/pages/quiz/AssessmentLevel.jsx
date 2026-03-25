import { useNavigate } from "react-router-dom";
import { useState } from "react";

const AssessmentLevel = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);

  const levels = [
    {
      id: "beginner",
      text: "Pemula\nSaya baru mulai belajar",
    },
    {
      id: "intermediate",
      text: "Menengah\nSudah memahami dasar",
    },
    {
      id: "advanced",
      text: "Mahir\nSiap dengan tantangan",
    },
    {
      id: "expert",
      text: "Expert\nIngin materi tingkat tinggi",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFF6F2] p-6">
      
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-lg p-6 space-y-6">

        {/* Header */}
        <div className="space-y-2">
          <span className="text-orange-400 font-bold text-sm tracking-wider uppercase">
            Langkah Terakhir
          </span>
          <h2 className="text-lg font-semibold text-gray-800">
            Pilih level pemahamanmu saat ini
          </h2>
        </div>

        {/* Options GRID 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {levels.map((level) => (
            <button
              key={level.id}
              onClick={() => setSelected(level.id)}
              className={`flex items-start gap-3 p-5 border rounded-xl text-left transition-all whitespace-pre-line
                ${
                  selected === level.id
                    ? "border-orange-400 bg-orange-50"
                    : "border-orange-200 hover:border-orange-400 hover:bg-orange-50"
                }`}
            >
              {/* BULATAN */}
              <div
                className={`w-5 h-5 rounded-full border flex items-center justify-center mt-1
                  ${
                    selected === level.id
                      ? "border-orange-400"
                      : "border-orange-300"
                  }`}
              >
                {selected === level.id && (
                  <div className="w-2.5 h-2.5 bg-orange-400 rounded-full"></div>
                )}
              </div>

              {/* TEXT */}
              <span className="text-gray-800 text-sm font-medium">
                {level.text}
              </span>
            </button>
          ))}
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center pt-2">
          <button
            onClick={() => navigate("/quiz-style")}
            className="text-orange-300 text-sm hover:text-orange-500 transition"
          >
            ← Kembali
          </button>

          <button
            onClick={() => navigate("/analyzing")}
            className={`px-5 py-2 rounded-lg text-white transition
              ${
                selected
                  ? "bg-orange-400 hover:bg-orange-500"
                  : "bg-orange-200 cursor-not-allowed"
              }`}
            disabled={!selected}
          >
            Lanjut
          </button>
        </div>

      </div>
    </div>
  );
};

export default AssessmentLevel;