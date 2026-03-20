import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Landing = () => {
  return (
    <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
                <div className="inline-flex bg-orange-50 border border-orange-400 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Platform Belajar Adaptif
                </div>
                
                <h1 className="font-bold text-5xl md:text-6xl text-gray-900 leading-tight mb-6">
                Belajar Dengan<br />
                <span className="text-primary">Cara Kamu</span><br />
                Sendiri
                </h1>
                
                <p className="text-gray-600 text-lg mb-8 max-w-md">
                AdaptLearn mengenali gaya belajarmu lewat kuis singkat, lalu merekomendasikan materi dalam format yang paling cocok
                </p>
                
                <Button className="bg-primary hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg">
                Mulai Gratis Sekarang 🚀
                </Button>
            </div>
            
            {/* Right Image */}
            <div className="relative">
                <div className="relative z-10 rounded-full overflow-hidden border-8 border-orange-100 shadow-2xl">
                <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600" 
                    alt="Students learning together"
                    className="w-full h-auto"
                />
                </div>
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-200 rounded-full -z-10 blur-3xl opacity-60"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-yellow-200 rounded-full -z-10 blur-3xl opacity-60"></div>
                <div className="absolute top-1/2 right-1/4 w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[50px] border-b-orange-400 opacity-80"></div>
            </div>
            </div>
        </section>

        {/* Orange Section*/}
        <section className="bg-primary py-20">
            <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
                Kamu Pernah Ngerasain Ini?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <Card className="bg-white/50 backdrop-blur-md rounded-2xl shadow-lg border border-white/50">
                <CardContent className="p-8">
                    <div className="text-6xl mb-4">😴</div>
                    <p className="text-gray-900 font-medium">
                    Banyak materi tapi gak cocok sama gaya belajarmu
                    </p>
                </CardContent>
                </Card>
                
                <Card className="bg-white/50 backdrop-blur-md rounded-2xl shadow-lg border border-white/30">
                <CardContent className="p-8">
                    <div className="text-6xl mb-4">😵</div>
                    <p className="text-gray-900 font-medium">
                    Bingung mulai dari mana karena terlalu banyak pilihan
                    </p>
                </CardContent>
                </Card>
                
                <Card className="bg-white/50 backdrop-blur-md rounded-2xl shadow-lg border border-white/30">
                <CardContent className="p-8">
                    <div className="text-6xl mb-4">😤</div>
                    <p className="text-gray-900 font-medium">
                    Susah fokus karena format belajar yang monoton
                    </p>
                </CardContent>
                </Card>
            </div>
            </div>
        </section>

        {/* Fitur Unggulan */}
        <section className="container mx-auto px-6 py-16">
            <div className="inline-flex bg-orange-50 border border-orange-400 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Fitur Unggulan
            </div>
            <h2 className="font-bold text-2xl md:text-4xl text-gray-900 leading-tight mb-6">
                Adapt<span className="text-primary">Learn</span> Punya Semua<br /> yang Kamu Butuhkan<br /> untuk Belajar
            </h2>  
            <p className="text-gray-600 text-lg mb-8 max-w-md">
                Platform ini dirancang agar proses belajarmu terasa lebih personal, menyenangkan, dan efektif
            </p>      
        </section>
    </div>
  );
};

export default Landing;
