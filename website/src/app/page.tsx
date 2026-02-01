import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-0 pb-20">
      {/* Hero Section - Layered & Text Heavy */}
      <section className="relative min-h-screen flex flex-col justify-end px-4 md:px-10 pb-20 pt-40 overflow-hidden">
        <div className="absolute top-0 right-0 w-full md:w-3/4 h-[70vh] md:h-screen z-0">
          <Image
            src="/images/nishikawa/trellis-dusk-01.jpg"
            alt="山梨県甲州市の農園、夕暮れ時のぶどう棚の風景"
            fill
            priority
            className="object-cover grayscale brightness-75 md:brightness-100 md:grayscale-0 transition-all duration-700 hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background md:hidden" />
        </div>

        <div className="relative z-10 space-y-4">
          <p className="text-xs font-bold tracking-[0.3em] uppercase opacity-60">Established / Koushu City</p>
          <h1 className="text-editorial-xl font-serif font-bold leading-[0.85] tracking-tighter">
            SOIL, <br />
            YOUTH, <br />
            <span className="text-accent italic">FUTURE.</span>
          </h1>
          <div className="max-w-md mt-10 space-y-6">
            <p className="text-lg leading-tight font-medium">
              山梨県甲州市。豊かな自然の中で、果実を育て、<br />
              若者たちと共に農業の未来を切り拓く現場。
            </p>
            <div className="flex gap-10">
              <Link href="/story" className="group flex items-center gap-1 font-bold text-sm border-b-2 border-foreground pb-1 hover:text-accent hover:border-accent transition-all">
                VIEW STORY <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
              <Link href="/contact" className="group flex items-center gap-1 font-bold text-sm border-b-2 border-foreground pb-1 hover:text-accent-secondary hover:border-accent-secondary transition-all">
                ENQUIRY <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee or Dynamic Bar */}
      <div className="w-full overflow-hidden bg-foreground text-background py-4 flex whitespace-nowrap border-y border-foreground">
        <div className="animate-marquee flex gap-20 font-serif italic font-bold text-2xl tracking-tighter uppercase shrink-0 px-10">
          <span>Peach & Grape 2024 Season</span>
          <span>Open Field Project</span>
          <span>Nishikawa Farm x Students</span>
          <span>New Standard Agriculture</span>
          <span>Peach & Grape 2024 Season</span>
          <span>Open Field Project</span>
          <span>Nishikawa Farm x Students</span>
          <span>New Standard Agriculture</span>
        </div>
      </div>

      {/* Intro Section - Asymmetrical Grid */}
      <section className="px-4 md:px-10 py-32 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-0 border-b border-foreground/10">
        <div className="md:col-span-4 self-start">
          <span className="text-[10px] font-bold tracking-widest uppercase opacity-40 mb-4 block">01 / Philosophy</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold leading-none tracking-tighter mb-10">
            自然への<br />敬意。
          </h2>
        </div>
        <div className="md:col-span-7 md:col-start-6 space-y-12">
          <p className="text-2xl md:text-3xl leading-tight font-medium tracking-tight">
            甲州市の恵まれた気候と土壌を活かし、一本一本の木と向き合いながら、高品質な果実を丁寧に育てています。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-4">
              <span className="block h-[1px] w-10 bg-accent" />
              <p className="text-sm opacity-70">
                生産からプロモーションまで学生が主体となり参加。次世代に繋がる「新しい農業」を泥臭く、美しく実践しています。
              </p>
            </div>
            <div className="space-y-4">
              <span className="block h-[1px] w-10 bg-accent-secondary" />
              <p className="text-sm opacity-70">
                関係人口を増やすことで、持続可能な地域社会の構築を目指します。未来の話ではなく、いまここにある変化を。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Crops - Large Impact */}
      <section className="py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 h-[80vh]">
          <div className="relative group overflow-hidden border-r border-foreground/10">
            <Image
              src="/images/nishikawa/village-trellis-01.jpg"
              alt="甲州市の集落とぶどう棚の広がる風景"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
            <div className="absolute bottom-10 left-10 text-white">
              <h3 className="text-6xl font-serif font-bold tracking-tighter">Peach</h3>
              <p className="text-sm font-bold tracking-widest mt-2">6月下旬 - 8月中旬</p>
            </div>
          </div>
          <div className="relative group overflow-hidden">
            <Image
              src="/images/nishikawa/koshu-view-01.jpg"
              alt="甲州市の遠景と豊かな自然の景色"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
            <div className="absolute bottom-10 right-10 text-right text-white">
              <h3 className="text-6xl font-serif font-bold tracking-tighter">Grape</h3>
              <p className="text-sm font-bold tracking-widest mt-2">8月下旬 - 10上旬</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects - Magazine Style */}
      <section className="px-4 md:px-10 py-32 space-y-20">
        <div className="flex flex-col md:flex-row justify-between items-baseline gap-4 md:gap-0 border-b-2 border-foreground pb-4">
          <h2 className="text-editorial-lg font-serif font-bold leading-none tracking-tighter">ON-GOING<br />PROJECTS</h2>
          <Link href="/project" className="font-bold text-xs tracking-widest hover:line-through transition-all uppercase">View All Projects</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-20">
          <div className="md:col-span-8 flex flex-col gap-6">
            <div className="relative aspect-[16/9] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
              <Image
                src="/images/nishikawa/students-field-01.jpg"
                alt="学生が農園を訪れ、現場で作業や見学を行っている様子"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4 max-w-xl">
              <span className="text-[10px] font-bold tracking-widest uppercase bg-accent text-white px-2 py-1">2024 / Product Development</span>
              <h3 className="text-3xl font-bold tracking-tight">学生による新商品開発プロジェクト 2024</h3>
              <p className="text-sm leading-relaxed opacity-70 italic">
                農園の桃を活用した加工品の企画・デザイン・販売までを学生がトータルプロデュース。現場での気づきを、形にする。
              </p>
            </div>
          </div>

          <div className="md:col-span-4 md:col-start-9 md:pt-40 space-y-6">
            <div className="relative aspect-[3/4] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
              <Image
                src="/images/nishikawa/farm-ground-01.jpg"
                alt="農園の地面と木々、自然なままの畑の雰囲気"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4">
              <span className="text-[10px] font-bold tracking-widest uppercase bg-foreground text-background px-2 py-1">2023 / Branding</span>
              <h3 className="text-xl font-bold tracking-tight text-accent-secondary">アグリ・ブランディング 2023</h3>
              <p className="text-xs leading-relaxed opacity-70">
                農業の価値を再定義し、視覚化する。ロゴ制作からWeb制作まで、若者の感性が畑に新しい風を吹かせた。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
