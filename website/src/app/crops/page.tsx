import Image from "next/image";

export default function CropsPage() {
    const crops = [
        {
            name: "PEACH",
            jpName: "桃",
            period: "Late June - Mid August",
            description: "甲州市特有の盆地気候が育む、圧倒的な甘みと、とろけるような食感。早生から晩生まで、時期によって異なる品種を楽しめます。",
            image: "/images/nishikawa/trellis-dusk-01.jpg"
        },
        {
            name: "GRAPES",
            jpName: "葡萄",
            period: "Late August - Early October",
            description: "シャインマスカットや巨峰を中心に、糖度と香りにこだわって栽培。一粒に詰まった大地の恵みを、丹精込めてお届けします。",
            image: "/images/nishikawa/village-trellis-01.jpg"
        },
        {
            name: "PERSIMMON",
            jpName: "柿",
            period: "Late October - Mid November",
            description: "秋の深まりとともに色づく、山梨の伝統。渋抜きを丁寧に行い、上品な甘みと食感を引き出しています。",
            image: "/images/nishikawa/field-car-01.jpg"
        }
    ];

    return (
        <div className="pb-40 pt-20 px-4 md:px-10">
            <header className="mb-32">
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-40 mb-4 block">Produce / Seasonal</span>
                <h1 className="text-editorial-lg font-serif font-bold tracking-tighter leading-none">CROPS.</h1>
            </header>

            <section className="space-y-60">
                {crops.map((crop, idx) => (
                    <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
                        <div className={idx % 2 === 0 ? "md:col-span-7" : "md:col-span-7 md:col-start-6 md:order-2"}>
                            <div className="relative aspect-[4/3] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
                                <Image src={crop.image} alt={crop.name} fill className="object-cover" />
                            </div>
                        </div>
                        <div className={idx % 2 === 0 ? "md:col-span-4 md:col-start-9 space-y-8" : "md:col-span-4 md:order-1 space-y-8"}>
                            <div className="space-y-2">
                                <span className="text-xs font-bold tracking-widest text-accent italic">{crop.period}</span>
                                <h2 className="text-6xl font-serif font-bold tracking-tighter leading-none">{crop.name}</h2>
                                <p className="text-xl font-bold opacity-30">{crop.jpName}</p>
                            </div>
                            <p className="text-sm leading-relaxed opacity-70 italic">
                                {crop.description}
                            </p>
                            <div className="pt-4">
                                <button className="text-[10px] font-bold tracking-widest uppercase border border-foreground px-6 py-2 hover:bg-foreground hover:text-background transition-all">Details</button>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}
