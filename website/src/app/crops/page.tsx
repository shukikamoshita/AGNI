export default function CropsPage() {
    const crops = [
        {
            name: "桃 (Peach)",
            period: "6月下旬 〜 8月中旬",
            description: "甲州市特有の盆地気候が育む、圧倒的な甘みと、とろけるような食感。早生から晩生まで、時期によって異なる品種を楽しめます。",
            image: "https://images.unsplash.com/photo-1628243342398-e4b787593922?q=80&w=2000&auto=format&fit=crop"
        },
        {
            name: "葡萄 (Grapes)",
            period: "8月下旬 〜 10月上旬",
            description: "シャインマスカットや巨峰を中心に、糖度と香りにこだわって栽培。一粒に詰まった大地の恵みを、丹精込めてお届けします。",
            image: "https://images.unsplash.com/photo-1537084642907-629340c7e59c?q=80&w=2074&auto=format&fit=crop"
        },
        {
            name: "柿 (Persimmon)",
            period: "10月下旬 〜 11月中旬",
            description: "秋の深まりとともに色づく、山梨の伝統。渋抜きを丁寧に行い、上品な甘みと食感を引き出しています。",
            image: "https://images.unsplash.com/photo-1621356494160-f47ec4616694?q=80&w=2070&auto=format&fit=crop"
        }
    ];

    return (
        <div className="pb-20">
            <section className="bg-primary py-20 mb-16">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-white text-center text-white">栽培作物</h1>
                    <p className="mt-6 text-white/70 max-w-2xl mx-auto text-center text-white">
                        山梨の四季に育まれた、旬の味覚。 <br />
                        西川農園が自信を持ってお届けする主要な作物をご紹介します。
                    </p>
                </div>
            </section>

            <section className="max-w-5xl mx-auto px-4 space-y-12 text-primary">
                {crops.map((crop, idx) => (
                    <div key={idx} className="flex flex-col md:flex-row bg-secondary/20 rounded-3xl overflow-hidden border border-secondary shadow-sm">
                        <div className="md:w-1/3 h-64 md:h-auto overflow-hidden">
                            <img src={crop.image} alt={crop.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="md:w-2/3 p-8 md:p-12 space-y-4">
                            <div className="flex justify-between items-baseline">
                                <h2 className="text-2xl font-bold text-primary">{crop.name}</h2>
                                <span className="text-accent text-sm font-bold">{crop.period}</span>
                            </div>
                            <p className="text-foreground/80 leading-relaxed">
                                {crop.description}
                            </p>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}
