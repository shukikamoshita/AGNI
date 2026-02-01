import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function ProjectPage() {
    const projects = [
        {
            id: "01",
            title: "学生による新商品開発プロジェクト 2024",
            tag: "Product Design",
            description: "農園で採れた桃をふんだんに使ったジャムとシロップの企画からデザイン、販売までを学生がプロデュース。",
            image: "/images/nishikawa/students-field-01.jpg"
        },
        {
            id: "02",
            title: "アグリ・ブランディング 2023",
            tag: "Branding",
            description: "西川農園のロゴ制作やWebサイトの基本コンセプト立案。農業の価値を再定義し、視覚化する取り組み。",
            image: "/images/nishikawa/farm-ground-01.jpg"
        },
        {
            id: "03",
            title: "現場体験と地域活性化",
            tag: "Rural Revitalization",
            description: "一般消費者の方々を農園に招き、収穫体験や学生による農園ツアーを実施。地域社会との新しい接点。",
            image: "/images/nishikawa/farm-visit-01.png"
        }
    ];

    return (
        <div className="pb-40 pt-20 px-4 md:px-10">
            <header className="mb-32 border-b border-foreground pb-10">
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-40 mb-4 block">Activities / 2023-2024</span>
                <h1 className="text-editorial-lg font-serif font-bold tracking-tighter leading-none">PROJECTS.</h1>
            </header>

            <section className="space-y-40">
                {projects.map((p, idx) => (
                    <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-10 group">
                        <div className="md:col-span-1 text-editorial-lg font-serif italic text-foreground opacity-10 group-hover:opacity-100 transition-opacity">
                            {p.id}
                        </div>
                        <div className="md:col-span-5 space-y-6">
                            <span className="text-[10px] font-bold tracking-widest uppercase bg-accent text-white px-2 py-1">{p.tag}</span>
                            <h2 className="text-4xl font-bold tracking-tight group-hover:underline underline-offset-8">{p.title}</h2>
                            <p className="text-sm opacity-70 leading-relaxed italic">{p.description}</p>
                            <button className="flex items-center gap-2 font-bold text-xs tracking-widest uppercase hover:text-accent group-hover:translate-x-2 transition-all">
                                Read More <ArrowUpRight size={14} />
                            </button>
                        </div>
                        <div className="md:col-span-6 relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                            <Image src={p.image} alt={p.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}
