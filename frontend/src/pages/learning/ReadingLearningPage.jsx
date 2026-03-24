import { useState } from "react";
import { CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ReadingLearningPage = () => {
  const [isDone, setIsDone] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      
      {/* Konten Utama */}
      <div className="max-w-2xl mx-auto px-6 py-10">

        {/* Judul */}
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Langkah Membuat Website
        </h1>

        {/* Gambar  */}
        <div className="w-full h-48 bg-gray-200 rounded-xl mb-8">
          gambar
        </div>

        {/* konten */}
        <p className="text-gray-700 text-sm leading-relaxed mb-6">
          Lorem ipsum dolor sir amet Lorem ipsum dolor sir amet Lorem ipsum
          dolor sir amet Lorem ipsum dolor sir amet Lorem ipsum dolor sir amet
          Lorem ipsum dolor sir amet Lorem ipsum dolor sir amet Lorem ipsum
          dolor sir amet Lorem ipsum dolor sir amet Lorem ipsum dolor sir amet
          Lorem ipsum dolor sir amet Lorem ipsum dolor sir amet Lorem ipsum
          dolor sir amet Lorem ipsum dolor sir amet Lorem ipsum dolor sir amet
          Lorem ipsum dolor sir amet Lorem ipsum dolor sir amet
        </p>

        <p className="text-gray-700 text-sm leading-relaxed mb-12">
          Lorem ipsum dolor sir amet Lorem ipsum dolor sir amet Lorem ipsum
          dolor sir amet Lorem ipsum dolor sir amet Lorem ipsum dolor sir amet
          Lorem ipsum dolor sir amet Lorem ipsum dolor sir amet Lorem ipsum
          dolor sir amet Lorem ipsum dolor sir amet Lorem ipsum dolor sir amet
          Lorem ipsum dolor sir amet Lorem ipsum dolor sir amet Lorem ipsum
          dolor sir amet Lorem ipsum dolor sir amet Lorem ipsum dolor sir amet
          Lorem ipsum dolor sir amet Lorem ipsum dolor sir amet
        </p>

        <div className="flex justify-end mb-16">
          <Button
            onClick={() => setIsDone(!isDone)}
            className={'flex items-center gap-2 px-6 py-5 rounded-xl font-bold text-sm bg-orange-600 hover:bg-[#d44d15] text-white transition-transform hover:scale-105 active:scale-95'}
          >
            <CheckCircle size={20} className="stroke-[2.5px]" /> 
            Mark as Done
          </Button>
        </div>

      </div>

    </div>
  );
};

export default ReadingLearningPage;