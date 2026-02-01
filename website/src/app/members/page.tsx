import Image from "next/image";

export default function MembersPage() {
    const members = [
        {
            name: "西川 某",
            role: "Representative",
            message: "農業は変化し続けています。伝統を守りながら、若い世代の感性を取り入れ、100年後も愛される農園を目指しています。",
            image: "/images/nishikawa/farm-ground-01.jpg"
        },
        {
            name: "佐藤 さゆり",
            role: "Student Leader / Junior",
            message: "現場で土に触れることで、食の価値を再発見しました。学生だからこそできる発信で、農園の魅力を広めたいです。",
            image: "/images/nishikawa/students-field-01.jpg"
        },
        {
            name: "高橋 健太",
            role: "Digital Production / Sophomore",
            message: "デザインやWebの力で、農業をかっこよくアップデートしたい。泥臭さと美しさが共存する西川農園が大好きです。",
            image: "/images/nishikawa/farm-visit-01.png"
        }
    ];

    return (
        <div className="pb-40 pt-20 px-4 md:px-10">
            <header className="mb-32 border-b-2 border-foreground pb-10">
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-40 mb-4 block">Team / Collaborators</span>
                <h1 className="text-editorial-lg font-serif font-bold tracking-tighter leading-none">MEMBERS.</h1>
            </header>

            <section className="grid grid-cols-1 md:grid-cols-12 gap-y-20 gap-x-10">
                {members.map((m, idx) => (
                    <div key={idx} className="md:col-span-4 flex flex-col gap-8 group">
                        <div className="relative aspect-[3/4] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000">
                            <Image src={m.image} alt={m.name} fill className="object-cover" />
                        </div>
                        <div className="space-y-4">
                            <div className="space-y-1">
                                <h3 className="text-3xl font-serif font-bold tracking-tighter leading-none">{m.name}</h3>
                                <p className="text-[10px] font-bold tracking-widest uppercase text-accent italic">{m.role}</p>
                            </div>
                            <p className="text-sm opacity-70 leading-relaxed italic border-l border-foreground/20 pl-4">
                                「{m.message}」
                            </p>
                        </div>
                    </div>
                ))}
            </section>

            <div className="mt-40 pt-20 border-t border-foreground/10 text-center">
                <p className="text-editorial-lg font-serif italic font-bold opacity-5 tracking-tighter leading-none uppercase select-none">
                    Join the Field.
                </p>
            </div>
        </div>
    );
}
