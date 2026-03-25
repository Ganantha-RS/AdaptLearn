import { useNavigate } from "react-router-dom";
import { useState } from "react";

const StyleIdentification = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);

  const options = [
    {
      id: "a",
      text: "Belajar dengan visual (gambar, video, diagram)",
      icon: "🎥",
    },
    {
      id: "b",
      text: "Belajar dengan praktik langsung atau membaca",
      icon: "📄",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFF6F2] p-6">
      
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-lg p-6 space-y-6">

        {/* Header */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-gray-400">
            <span className="font-semibold text-orange-400">
              AdaptLearn
            </span>
            <span className="text-orange-400">Question 1 of 5</span>
          </div>

          <div className="w-full h-1 bg-orange-100 rounded-full">
            <div className="w-1/5 h-full bg-orange-400 rounded-full"></div>
          </div>
        </div>

        {/* Question */}
        <h2 className="text-lg font-semibold text-gray-800">
          Bagaimana cara kamu paling mudah memahami materi baru?
        </h2>

        {/* Options (EMOJI ATAS) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {options.map((option) => (
            <button
              key={option.id}
              onClick={() => setSelected(option.id)}
              className={`flex flex-col items-center text-center p-6 border rounded-xl transition-all
                ${
                  selected === option.id
                    ? "border-orange-400 bg-orange-50"
                    : "border-orange-200 hover:border-orange-400 hover:bg-orange-50"
                }`}
            >
              {/* Emoji */}
              <div className="text-3xl mb-3">
                {option.icon}
              </div>

              {/* Text */}
              <span className="text-gray-700 text-sm">
                {option.text}
              </span>
            </button>
          ))}
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center pt-2">
          <button
            onClick={() => navigate("/welcome")}
            className="text-orange-300 text-sm hover:text-orange-500 transition"
          >
            ← Previous
          </button>

          <button
            onClick={() => navigate("/quiz-level")}
            className={`px-5 py-2 rounded-lg text-white transition
              ${
                selected
                  ? "bg-orange-400 hover:bg-orange-500"
                  : "bg-orange-200 cursor-not-allowed"
              }`}
            disabled={!selected}
          >
            Next Question
          </button>
        </div>

      </div>
    </div>
  );
};

export default StyleIdentification;