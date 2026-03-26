import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const QuizResult = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center w-full max-w-3xl mx-auto animate-in fade-in zoom-in-95 duration-700">
      <Card className="w-full bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border-none px-10 py-12 md:px-20 md:py-20 flex flex-col items-center text-center">
        
        <div className="border border-primary/20 bg-primary/5 text-primary px-6 py-2 rounded-full text-[11px] font-black tracking-widest uppercase mb-10">
          HASIL ANALISA
        </div>
        
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
           <span className="text-3xl text-primary">📄</span>
        </div>
        
        <h1 className="text-4xl text-text-primary font-black mb-2 tracking-tight">
          Text Enjoyer
        </h1>
        <p className="text-text-secondary text-[16px] font-bold mb-10">
          Beginner Level
        </p>

        <p className="text-[15px] text-text-primary/70 leading-loose mb-12 max-w-[520px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel metus 
          efficitur ex tincidunt gravida tristique vitae velit. In vitae lacus elementum, 
          varius ipsum in, tincidunt augue.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 w-full">
          <Button 
            className="bg-primary hover:bg-primary-dark text-white h-16 flex-[1.5] rounded-full font-black text-[15px] transition-all shadow-xl shadow-primary/25"
          >
            LIHAT REKOMENDASI MATERI <span className="ml-2 font-normal text-2xl">→</span>
          </Button>
          
          <button 
            onClick={() => navigate("/welcome")}
            className="bg-white hover:bg-slate-50 text-text-secondary h-16 flex-1 rounded-full border-2 border-slate-100/60 text-[15px] font-black uppercase transition-all"
          >
            ULANGI KUIS
          </button>
        </div>

      </Card>
    </div>
  );
};

export default QuizResult;