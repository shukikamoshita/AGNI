import Link from "next/link";
import { ArrowRight, Leaf, Sprout, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/30 z-10" />
          {/* Placeholder for Hero Image */}
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1592398618725-b40b8529f79e?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center animate-subtle-zoom" />
        </div>

        <div className="relative z-20 text-center px-4 max-w-4xl">
          <h1 className="text-4xl md:text-7xl font-serif font-bold text-white mb-6 drop-shadow-lg">
            土と生きる、明日を創る。
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto drop-shadow-md">
            山梨県甲州市。豊かな自然の中で、果実を育て、<br className="hidden md:block" />
            若者たちと共に農業の未来を切り拓く。
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              href="/story"
              className="px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-secondary transition-all transform hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              私たちの想い <ArrowRight size={20} />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-all inline-flex items-center justify-center"
            >
              お問い合わせ
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="text-center space-y-4 p-8 rounded-2xl bg-secondary/30">
          <div className="inline-flex p-4 bg-primary text-white rounded-full mb-2">
            <Leaf size={32} />
          </div>
          <h3 className="text-xl font-bold text-primary">自然への敬意</h3>
          <p className="text-foreground/70 text-sm leading-relaxed">
            甲州市の恵まれた気候と土壌を活かし、一本一本の木と向き合いながら、高品質な果実を丁寧に育てています。
          </p>
        </div>
        <div className="text-center space-y-4 p-8 rounded-2xl bg-secondary/30">
          <div className="inline-flex p-4 bg-accent text-white rounded-full mb-2">
            <Users size={32} />
          </div>
          <h3 className="text-xl font-bold text-accent">学生との共創</h3>
          <p className="text-foreground/70 text-sm leading-relaxed">
            学生が主体となり、生産からプロモーションまで参加。次世代に繋がる「新しい農業」を実践しています。
          </p>
        </div>
        <div className="text-center space-y-4 p-8 rounded-2xl bg-secondary/30">
          <div className="inline-flex p-4 bg-primary text-white rounded-full mb-2">
            <Sprout size={32} />
          </div>
          <h3 className="text-xl font-bold text-primary">地域の未来</h3>
          <p className="text-foreground/70 text-sm leading-relaxed">
            農業を通じて地域の魅力を発信し、関係人口を増やすことで、持続可能な地域社会の構築を目指します。
          </p>
        </div>
      </section>

      {/* Featured Crops / CTA */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">季節を彩る、至高の果実。</h2>
            <p className="text-white/80 mb-8 leading-relaxed">
              西川農園が誇る「甲州の桃」と「葡萄」。<br />
              一粒一粒に込められた甘みと香りを、ぜひご堪能ください。
            </p>
            <Link
              href="/crops"
              className="inline-flex items-center gap-2 text-accent bg-white px-6 py-3 rounded-lg font-bold hover:bg-secondary transition-colors"
            >
              栽培作物を見る <ArrowRight size={20} />
            </Link>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            <div className="h-64 rounded-xl bg-gray-200 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1628243342398-e4b787593922?q=80&w=2000&auto=format&fit=crop" alt="Peach" className="w-full h-full object-cover" />
            </div>
            <div className="h-64 rounded-xl bg-gray-200 overflow-hidden mt-8">
              <img src="https://images.unsplash.com/photo-1537084642907-629340c7e59c?q=80&w=2074&auto=format&fit=crop" alt="Grapes" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Project Section Wrapper */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-accent font-bold tracking-widest text-sm uppercase">Projects</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mt-2">進行中のプロジェクト</h2>
          </div>
          <Link href="/project" className="text-primary hover:underline font-bold text-sm flex items-center gap-1">
            すべて見る <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2].map((i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl bg-secondary aspect-[16/9]">
              <img
                src={`https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=2070&auto=format&fit=crop`}
                alt="Project"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white mb-2">学生による新商品開発プロジェクト 2024</h3>
                <p className="text-white/70 text-sm line-clamp-2">農園の桃を活用した加工品の企画・デザイン・販売までを学生がトータルプロデュース。</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
