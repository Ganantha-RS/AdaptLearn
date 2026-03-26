import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import logoAdaptLearn from "@/assets/logo-adaptlearn.webp";

const AssessmentLevel = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);

  const options = [r
    { id: "a", text: "Lorem Ipsum Dolor Sit Amet,\nofnsodfnoadfnoadfnaofdfdsdfsafsafasfasf" },
    { id: "b", text: "Lorem Ipsum Dolor Sit Amet,\nofnsodfnoadfnoadfnaofdfdsdfsafsafasfasf" },
    { id: "c", text: "Lorem Ipsum Dolor Sit Amet,\nofnsodfnoadfnoadfnaofdfdsdfsafsafasfasf" },
    { id: "d", text: "Lorem Ipsum Dolor Sit Amet,\nofnsodfnoadfnoadfnaofdfdsdfsafsafasfasf" },
  ];

  return (
    <div className="flex items-center justify-center w-full max-w-4xl mx-auto animate-in fade-in duration-500">
      <Card className="w-full bg-white rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.03)] border-none px-8 py-10 md:px-14 md:py-16 space-y-10">
        <div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <img src={logoAdaptLearn} alt="Logo" className="w-10 h-10 object-contain" />
              <span className="text-xl font-black text-primary">AdaptLearn</span>
            </div>
            <span className="text-text-secondary font-bold text-sm">Question 1 of 10</span>
          </div>
          <div className="mt-8">
            <div className="flex justify-between text-[11px] font-black text-text-secondary mb-2 uppercase tracking-widest">
              <span>COURSE PROGRESS</span>
              <span className="text-primary font-black">10%</span>
            </div>
            <div className="w-full h-2 bg-background-alt rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary rounded-full transition-all duration-500" 
                style={{ width: "10%" }}
              />
            </div>
          </div>
        </div>

        {/* Question */}
        <h2 className="text-2xl font-black text-text-primary leading-tight">
          What is the purpose of a RESTful API?
        </h2>

        {/* Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {options.map((option) => (
            <button
              key={option.id}
              onClick={() => setSelected(option.id)}
              className={`flex items-center gap-5 p-6 rounded-2xl border-2 text-left transition-all min-h-[100px] w-full group
                ${
                  selected === option.id
                    ? "border-primary bg-background-alt/30 shadow-lg shadow-primary/5"
                    : "border-slate-50 hover:border-primary/20 bg-white"
                }`}
            >
              <div
                className={`shrink-0 w-7 h-7 rounded-full border-2 flex items-center justify-center bg-white transition-colors
                  ${
                    selected === option.id
                      ? "border-primary"
                      : "border-slate-200 group-hover:border-primary/30"
                  }`}
              >
                {selected === option.id && <div className="w-3 h-3 bg-primary rounded-full" />}
              </div>
              <span className="text-text-primary text-[15px] font-bold leading-relaxed whitespace-pre-wrap break-all flex-1">
                {option.text}
              </span>
            </button>
          ))}
        </div>

        <div className="flex justify-between items-center pt-10 border-t border-background-alt">
          <button
            onClick={() => navigate("/quiz-style")}
            className="text-text-secondary text-sm font-black uppercase tracking-widest hover:text-text-primary transition flex items-center gap-2"
          >
            ← Previous
          </button>

          <Button
            onClick={() => navigate("/analyzing")}
            disabled={!selected}
            className={`h-14 px-10 rounded-2xl text-white font-black text-sm transition-all shadow-lg
              ${
                selected
                  ? "bg-text-secondary hover:bg-text-primary shadow-text-secondary/20"
                  : "bg-slate-200 cursor-not-allowed opacity-50"
              }`}
          >
            Next Question
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default AssessmentLevel;