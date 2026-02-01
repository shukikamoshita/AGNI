export default function ProjectPage() {
    const projects = [
        {
            title: "新商品開発プロジェクト 2024",
            tag: "Product Design",
            description: "農園で採れた桃をふんだんに使ったジャムとシロップの企画からデザイン、販売までを学生がプロデュース。",
            image: "https://images.unsplash.com/photo-1589921291816-7d1a2988e7fb?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "アグリ・ブランディング 2023",
            tag: "Branding",
            description: "西川農園のロゴ制作やWebサイトの基本コンセプト立案。農業の価値を再定義し、視覚化する取り組み。",
            image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "収穫祭イベント企画",
            tag: "Event",
            description: "一般消費者の方々を農園に招き、収穫体験や学生による農園ツアーを実施。地域活性化のモデルケースに。",
            image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=2074&auto=format&fit=crop"
        }
    ];

    return (
        <div className="pb-20">
            <section className="bg-secondary/30 py-20 mb-16">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <span className="text-accent font-bold tracking-widest text-sm uppercase">Activities</span>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mt-4 text-center text-primary">プロジェクト</h1>
                    <p className="mt-6 text-foreground/70 max-w-2xl mx-auto text-center">
                        常識にとらわれない、農業の新しい可能性。 <br />
                        学生たちが主体となり進めている様々なプロジェクトをご紹介します。
                    </p>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((p, idx) => (
                    <div key={idx} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-secondary">
                        <div className="h-64 overflow-hidden relative">
                            <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                            <div className="absolute top-4 left-4">
                                <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-accent uppercase tracking-wider">
                                    {p.tag}
                                </span>
                            </div>
                        </div>
                        <div className="p-8 space-y-4">
                            <h2 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">{p.title}</h2>
                            <p className="text-foreground/70 text-sm leading-relaxed">
                                {p.description}
                            </p>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}
