import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const VisualLearningPage = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 lg:px-8 flex flex-col items-center">
      <div className="w-full mt-10 mb-10">
        <div className="w-full aspect-video bg-[#dbdbdb] rounded-[16px] lg:rounded-[24px]">
          {/* Video Gooes Here */}
        </div>
      </div>

      <h1 className="text-3xl lg:text-5xl font-extrabold text-[#000000] mb-6 text-center leading-tight tracking-tight">
        Langkah Membuat Website
      </h1>

      <p className="text-[#000000] text-sm lg:text-base leading-relaxed text-center max-w-2xl lg:max-w-3xl mb-12 font-medium">
        Lorem ipsum dolor sir amet Lorem ipsum dolor sir amet Lorem ipsum dolor sir amet Lorem ipsum dolor sir amet Lorem ipsum dolor sir amet Lorem ipsum dolor sir amet Lorem ipsum dolor sir amet
      </p>

      <div className="mb-16 lg:mb-24">
        <Button className="bg-[#ef5a1a] hover:bg-[#d44d15] text-white px-8 lg:px-12 py-6 rounded-[14px] gap-2 lg:gap-3 text-base lg:text-lg font-bold shadow-sm transition-transform hover:scale-105 active:scale-95">
          <CheckCircle size={20} className="stroke-[2.5px]" /> 
          Mark as Done
        </Button>
      </div>
    </div>
  );
};

export default VisualLearningPage;
