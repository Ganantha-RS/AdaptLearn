import { useNavigate } from "react-router-dom";

const WelcomeScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFF6F2] p-6">
      
      {/* Card */}
      <div className="flex flex-col md:flex-row bg-white rounded-3xl shadow-xl overflow-hidden max-w-4xl w-full">
        
        {/* Image Section */}
        <div className="md:w-1/2 h-64 md:h-auto">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="Learning"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="md:w-1/2 p-8 flex flex-col justify-center space-y-5">
          
          <p className="text-sm text-orange-400 font-semibold">
            QUIZ ADAPTIVE LEARNING
          </p>

          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 leading-tight">
            Let's Personalize Your Journey
          </h2>

          <p className="text-gray-500 text-sm md:text-base leading-relaxed">
            Answer a few questions so we can tailor the learning experience to
            match your strengths.
          </p>

          {/* FIXED: button + text sejajar */}
          <div className="mt-4 flex items-center gap-4">
            <button
              onClick={() => navigate("/quiz-style")}
              className="px-6 py-3 bg-orange-400 hover:bg-orange-500 text-white font-semibold rounded-full shadow-md transition-all duration-300"
            >
              Get Started →
            </button>

            <p className="text-sm text-gray-400 leading-none">
              Takes only 2 minutes
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;