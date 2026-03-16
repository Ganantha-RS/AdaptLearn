import { useNavigate } from "react-router-dom";

const StyleIdentification = () => {
  const navigate = useNavigate();

  const options = [
    {
      id: "a",
      text: "Melihat gambar, diagram, atau video penjelasan",
      icon: "🖼️",
    },
    { id: "b", text: "Mendengarkan penjelasan lisan atau rekaman", icon: "🎧" },
    {
      id: "c",
      text: "Membaca teks panjang dan mencatat detailnya",
      icon: "📝",
    },
    { id: "d", text: "Mencoba langsung (praktek) atau simulasi", icon: "🛠️" },
  ];

  return (
    <div className="space-y-8 pt-6 animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="space-y-2">
        <span className="text-primary font-bold text-sm tracking-wider uppercase">
          Pertanyaan 1 dari 5
        </span>
        <h2 className="text-2xl font-bold text-text-primary leading-tight">
          Bagaimana cara kamu paling mudah memahami materi baru?
        </h2>
      </div>

      <div className="grid gap-4">
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => navigate("/quiz-level")}
            className="group flex items-center p-5 bg-white border-2 border-slate-100 rounded-2xl text-left transition-all duration-300 hover:border-primary hover:shadow-md hover:shadow-primary/10 active:scale-[0.98] cursor-pointer"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-background rounded-xl text-2xl mr-4 group-hover:bg-primary/10 transition-colors">
              {option.icon}
            </div>
            <p className="flex-1 text-text-primary font-medium">
              {option.text}
            </p>
          </button>
        ))}
      </div>

      <div className="flex justify-between items-center pt-4">
        <button
          onClick={() => navigate("/welcome")}
          className="text-text-secondary font-semibold hover:text-text-primary transition-colors"
        >
          Kembali
        </button>
        <div className="flex space-x-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${i === 1 ? "bg-primary" : "bg-slate-200"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StyleIdentification;
