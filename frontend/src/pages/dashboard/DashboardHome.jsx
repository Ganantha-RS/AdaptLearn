import {
  Play,
  FileText,
  LayoutGrid,
  Eye,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const DashboardHome = () => {
  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Left Column */}
      <div className="lg:col-span-2 space-y-8 order-2 lg:order-1">
        <section>
          <h2 className="text-primary font-bold text-lg mb-4 uppercase tracking-wide flex items-center gap-2 text-primary">
            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
            Lanjutkan Pembelajaran
          </h2>

          <Card className="bg-surface border-background-alt overflow-hidden">
            <CardContent className="p-6 flex flex-col sm:flex-row gap-6 items-center">
              <div className="w-full sm:w-48 h-32 bg-background-alt rounded-xl flex items-center justify-center text-primary/30">
                <LayoutGrid size={48} strokeWidth={1.5} />
              </div>

              <div className="flex-1 w-full translate-y-[-4px]">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-text-primary">
                    Variabel dasar JS
                  </h3>
                  <span className="text-primary font-bold text-sm">
                    Belum Selesai
                  </span>
                </div>

                <Progress value={25} className="h-2 mb-6 mt-4" />

                <Button className="bg-primary hover:bg-primary-dark text-white font-bold rounded-xl gap-2">
                  <Play size={18} fill="currentColor" />
                  Lanjutkan Belajar
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <div className="flex justify-between items-end mb-4">
            <h2 className="text-text-primary font-bold text-lg">
              Rekomendasi Bacaan
            </h2>
            <Button variant="link" className="text-primary font-bold p-0 h-auto">
              Lihat Semua
            </Button>
          </div>

          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="bg-surface border-background-alt">
                <CardContent className="p-4 flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-500 flex items-center justify-center">
                      <FileText size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-text-secondary uppercase tracking-wider mb-1">
                        WEB DEVELOPMENT • 5 MNT BACA
                      </div>
                      <h4 className="font-bold text-text-primary">
                        Type Data di JavaScript
                      </h4>
                    </div>
                  </div>
                  <Button variant="outline" className="bg-background hover:bg-background-alt text-text-primary font-bold text-sm px-6 h-9 rounded-lg border-background-alt">
                    Baca
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <div className="flex justify-between items-end mb-4">
            <h2 className="text-text-primary font-bold text-lg">
              Rekomendasi Video
            </h2>
            <Button variant="link" className="text-primary font-bold p-0 h-auto">
              Lihat Semua
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card key={item} className="bg-surface border-background-alt overflow-hidden flex flex-col">
                <div className="aspect-video bg-[#c6b497] relative flex items-center justify-center group cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <Play size={20} fill="currentColor" className="ml-1" />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/60 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                    12:45
                  </div>
                </div>
                <CardHeader className="p-3">
                  <h4 className="font-bold text-text-primary text-sm leading-tight line-clamp-2">
                    Cara jago ngoding tanpa ngoding
                  </h4>
                  <p className="text-xs text-text-secondary">
                    Dr. Sarah P. • 1.2rb x ditonton
                  </p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>
      </div>

      {/* Right Column */}
      <div className="space-y-6 order-1 lg:order-2">
        <Card className="bg-primary-light border-none relative overflow-hidden">
          <CardContent className="p-6 relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 rounded-full bg-white/40 border-4 border-white flex items-center justify-center overflow-hidden">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" />
                </svg>
              </div>
              <div>
                <h3 className="text-white text-xl font-medium">
                  Welcome Back!
                </h3>
                <h2 className="text-text-primary text-3xl font-extrabold -mt-1">
                  Sarah
                </h2>
                <div className="inline-flex items-center gap-1.5 bg-background-alt/60 border border-primary/20 text-text-primary px-3 py-1 rounded-full text-xs font-bold mt-2">
                  <Eye size={12} />
                  Visual Learner
                </div>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur rounded-xl h-24 w-full mb-3 shadow-sm border-none shadow-none overflow-hidden">
              <p className="p-4 line-clamp-3">Ini deskripsi dari user Ini deskripsi dari user Ini deskripsi dari user Ini deskripsi dari user Ini deskripsi dari user Ini deskripsi dari user Ini deskripsi dari user Ini deskripsi dari user Ini deskripsi dari user</p>
            </div>

            <div className="flex justify-end">
              <Button variant="link" className="text-primary-dark font-bold text-xs p-0 h-auto gap-1 hover:text-primary transition-colors">
                View Profile <ArrowRight size={14} />
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-background-alt border-none">
          <CardContent className="p-6">
            <h3 className="text-primary font-bold text-lg mb-3">Tips Hari Ini</h3>
            <p className="text-text-primary font-medium text-sm leading-relaxed">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              commodo enim erat. Quisque facilisis porta mollis”
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardHome;
