import React from 'react';
import { FileText } from 'lucide-react'; 

const QuizResult = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFF6F2] p-6 font-sans">
      
      {/* Card */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 text-center flex flex-col items-center">
        
        {/* Label */}
        <span className="bg-orange-100 text-orange-500 px-5 py-1 rounded-full text-xs font-bold tracking-widest mb-5 border border-orange-200">
          HASIL ANALISA
        </span>
        
        {/* Icon */}
        <div className="text-orange-400 mb-3">
          <FileText size={44} strokeWidth={1.5} />
        </div>
        
        {/* Title */}
        <h1 className="text-2xl text-gray-800 font-bold mb-1">
          Text Enjoyer
        </h1>
        <p className="text-gray-400 text-sm mb-5">
          Beginner Level
        </p>

        {/* Description */}
        <p className="text-xs text-gray-500 leading-relaxed mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Maecenas vel metus efficitur ex tincidunt gravida tristique vitae velit.
        </p>

        {/* Button */}
        <button className="bg-orange-400 hover:bg-orange-500 text-white py-3 px-4 w-full rounded-xl font-bold text-xs transition-all active:scale-95 shadow-md">
          LIHAT REKOMENDASI MATERI
        </button>
        
        {/* Retry */}
        <button className="mt-5 text-orange-400 hover:text-orange-500 text-xs tracking-widest uppercase font-medium transition-colors">
          ULANGI KUIS
        </button>

      </div>
    </div>
  );
};

export default QuizResult;