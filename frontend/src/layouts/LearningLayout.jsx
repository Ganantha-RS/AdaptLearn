import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Bell } from 'lucide-react';
import { useState, useEffect } from 'react';
import logo from '../assets/logo-adaptlearn.webp';

const LearningLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [nextMaterial, setNextMaterial] = useState(null);
  const [previousMaterial, setPreviousMaterial] = useState(null);
  const [loading, setLoading] = useState(false);

  const getCurrentMaterialId = () => {
    const path = location.pathname;
    const match = path.match(/\/belajar\/(materi|video)\/([^/]+)/);
    return match ? match[2] : null;
  };

  const getUserProfile = () => {
    const userStr = localStorage.getItem("userProfile") || sessionStorage.getItem("userProfile");
    return userStr ? JSON.parse(userStr) : null;
  };

  useEffect(() => {
    const fetchNavigationMaterials = async () => {
      const currentId = getCurrentMaterialId();
      if (!currentId) return;

      const userProfile = getUserProfile();
      
      try {
        setLoading(true);
        
        // Fetch next material
        const nextUrl = `http://localhost:5000/api/recommendations/next/${currentId}${
          userProfile ? `?user_id=${userProfile.id}` : ''
        }`;
        const nextResponse = await fetch(nextUrl);
        const nextData = await nextResponse.json();
        
        if (nextData.success && nextData.data) {
          setNextMaterial(nextData.data);
        } else {
          setNextMaterial(null);
        }

        // Fetch previous material
        const prevUrl = `http://localhost:5000/api/recommendations/previous/${currentId}${
          userProfile ? `?user_id=${userProfile.id}` : ''
        }`;
        const prevResponse = await fetch(prevUrl);
        const prevData = await prevResponse.json();
        
        console.log("Previous material response:", prevData);
        
        if (prevData.success && prevData.data) {
          setPreviousMaterial(prevData.data);
        } else {
          setPreviousMaterial(null);
        }
      } catch (error) {
        console.error("Error fetching navigation materials:", error);
        setNextMaterial(null);
        setPreviousMaterial(null);
      } finally {
        setLoading(false);
      }
    };

    fetchNavigationMaterials();
  }, [location.pathname]);

  // Listen for markAsDone event from child pages to refresh next/prev navigation
  useEffect(() => {
    const handleRefresh = () => fetchNavigationMaterials();
    window.addEventListener("materialMarkedAsDone", handleRefresh);
    return () => window.removeEventListener("materialMarkedAsDone", handleRefresh);
  }, [location.pathname]);

  const handleNextLesson = () => {
    if (!nextMaterial) {
      alert("Tidak ada materi selanjutnya. Anda sudah menyelesaikan semua materi!");
      navigate("/dashboard");
      return;
    }

    if (nextMaterial.format === 'Video' || nextMaterial.format === 'video') {
      if (nextMaterial.external_id) {
        navigate(`/belajar/video/${nextMaterial.external_id}`, { state: { video: nextMaterial } });
      } else {
        navigate(`/belajar/video/${nextMaterial.id}`);
      }
    } else {
      navigate(`/belajar/materi/${nextMaterial.id}`);
    }
  };

  const handlePreviousLesson = () => {
    if (!previousMaterial) return;

    if (previousMaterial.format === 'Video' || previousMaterial.format === 'video') {
      if (previousMaterial.external_id) {
        navigate(`/belajar/video/${previousMaterial.external_id}`, { state: { video: previousMaterial } });
      } else {
        navigate(`/belajar/video/${previousMaterial.id}`);
      }
    } else {
      navigate(`/belajar/materi/${previousMaterial.id}`);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      {/* Header Like Dashboard Layout */}
      <nav className="h-16 border-b border-background-alt flex items-center justify-between px-4 md:px-6 sticky top-0 bg-white z-50">
        <div className="flex items-center gap-2">
          <Link to="/dashboard" className="flex items-center gap-2">
            <img src={logo} alt="AdaptLearn Logo" className="h-8 w-auto" />
            <span className="text-xl font-bold text-gray-900">
              Adapt<span className="text-primary">Learn</span>
            </span>
          </Link>
        </div>

        <div className="hidden md:flex bg-background-alt text-text-primary px-4 py-1.5 rounded-full font-bold text-sm items-center">
          Visual Learner
        </div>

        <div className="flex items-center gap-4">
          <button className="text-text-secondary hover:text-primary transition-colors">
            <Bell size={20} />
          </button>
          <div className="w-8 h-8 rounded-full bg-primary-light"></div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <div className="w-full bg-white mt-auto border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-6 flex justify-between items-center">
          {previousMaterial ? (
            <button 
              onClick={handlePreviousLesson}
              className="flex items-center gap-2 px-6 py-3 font-bold text-primary hover:text-gray-400 transition-all bg-transparent border-none shadow-none outline-none"
            >
              <ArrowLeft size={20} strokeWidth={2.5} /> Previous
            </button>
          ) : (
            <div className="w-32"></div>
          )}
          <div className="text-sm text-gray-500">
            {nextMaterial ? (
              <span className="font-medium">
                Selanjutnya: <span className="text-gray-900">{nextMaterial.title}</span>
              </span>
            ) : loading ? (
              <span>Memuat...</span>
            ) : (
              <span>Tidak ada materi selanjutnya</span>
            )}
          </div>
          <button 
            onClick={handleNextLesson}
            disabled={!nextMaterial || loading}
            className={`flex items-center gap-2 px-6 py-3 font-bold text-base transition-all bg-transparent border-none shadow-none outline-none ${
              nextMaterial && !loading
                ? 'text-primary'
                : 'text-gray-400 cursor-not-allowed'
            }`}
          >
            Next Lesson <ArrowRight size={20} strokeWidth={2.5} />
          </button>
        </div>
      </div>

      {/* Copyright Footer */}
      <footer className="w-full py-8 text-center text-xs font-bold text-gray-900 bg-[#fffbf0]">
        2026 AdaptLearn. All Rights Reserved
      </footer>
    </div>
  );
};

export default LearningLayout;