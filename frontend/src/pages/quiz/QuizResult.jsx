import React from 'react';
import { FileText } from 'lucide-react'; 

const QuizResult = () => {
  return (
    // Background putih bersih, tanpa label atas
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-5 font-sans">
      
      {/* Container utama - Border biru & garis putus-putus SUDAH DIHAPUS */}
      <div className="w-full max-w-[360px] flex flex-col items-center text-center">
        
        {/* Label Kapsul Oranye */}
        <span className="bg-[#fff3e0] text-[#e67e22] px-6 py-1.5 rounded-full text-[11px] font-bold tracking-[2px] mb-6 border border-[#ffe0b2]">
          HASIL ANALISA
        </span>
        
        {/* Ikon */}
        <div className="text-[#2c3e50] mb-4">
          <FileText size={48} strokeWidth={1.5} />
        </div>
        
        {/* Judul & Level */}
        <h1 className="text-3xl text-[#2c3e50] font-bold mb-1">
          Text Enjoyer
        </h1>
        <p className="text-[#95a5a6] text-sm mb-6">
          Beginner Level
        </p>

        {/* Deskripsi */}
        <p className="text-[13px] text-[#7f8c8d] leading-relaxed mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Maecenas vel metus efficitur ex tincidunt gravida tristique vitae velit. 
        </p>

        {/* Tombol Utama */}
        <button className="bg-[#f39c12] hover:bg-[#e67e22] text-white py-4 px-5 w-full rounded-xl font-bold text-[12px] transition-all shadow-md active:scale-95">
          LIHAT REKOMENDASI MATERI
        </button>
        
        {/* Tombol Ulangi */}
        <button className="mt-6 text-[#bdc3c7] hover:text-[#95a5a6] text-[11px] tracking-widest uppercase font-medium transition-colors">
          ULANGI KUIS
        </button>
      </div>
    </div>
  );
};

export default QuizResult;