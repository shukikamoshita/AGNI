import Image from "next/image";

export default function MembersPage() {
    const members = [
        {
            name: "西川 悠斗",
            role: "Representative",
            message: "西川農園は、私たち学生が中心となって甲州市全体を盛り上げたいと考えています。",
            image: "/images/members/member-01.png"
        },
        {
            name: "鴨下 柊毅",
            role: "Student Leader / Junior",
            message: "農業から地域全体を盛り上げていきたいと考えています。",
            image: "/images/members/member-02.jpg"
        },
        {
            name: "山本 空",
            role: "Digital Production / Sophomore",
            message: "甲州市には、まだまだ大きな可能性があると思っています。",
            image: "/images/members/yamamoto.jpg"
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
