import { useNavigate } from "react-router-dom";

const AssessmentLevel = () => {
  const navigate = useNavigate();

  const levels = [
    {
      id: "beginner",
      title: "Pemula (Beginner)",
      desc: "Saya baru mulai belajar topik ini",
      icon: "🌱",
    },
    {
      id: "intermediate",
      title: "Menengah (Intermediate)",
      desc: "Saya sudah tahu dasarnya",
      icon: "🌿",
    },
    {
      id: "advanced",
      title: "Mahir (Advanced)",
      desc: "Saya ingin tantangan lebih",
      icon: "🌳",
    },
  ];

  return (
    <div className="space-y-8 pt-6 animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="space-y-2">
        <span className="text-primary font-bold text-sm tracking-wider uppercase">
          Langkah Terakhir
        </span>
        <h2 className="text-2xl font-bold text-text-primary leading-tight">
          Pilih level pemahamanmu saat ini
        </h2>
      </div>

      <div className="space-y-4">
        {levels.map((level) => (
          <button
            key={level.id}
            onClick={() => navigate("/analyzing")}
            className="group w-full flex items-center p-6 bg-white border-2 border-slate-100 rounded-3xl text-left transition-all duration-300 hover:border-primary hover:bg-surface-tint active:scale-[0.98] cursor-pointer"
          >
            <div className="text-4xl mr-6 transform group-hover:scale-110 transition-transform">
              {level.icon}
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-text-primary mb-1">
                {level.title}
              </h3>
              <p className="text-text-secondary text-sm">{level.desc}</p>
            </div>
            <div className="w-8 h-8 rounded-full border-2 border-slate-200 flex items-center justify-center group-hover:border-primary group-hover:bg-primary transition-colors">
              <div className="w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100" />
            </div>
          </button>
        ))}
      </div>

      <button
        onClick={() => navigate("/quiz-style")}
        className="text-text-secondary font-semibold hover:text-text-primary transition-colors mt-4"
      >
        Kembali
      </button>
    </div>
  );
};

export default AssessmentLevel;
