export default function MembersPage() {
    const members = [
        {
            name: "西川 某",
            role: "農園代表",
            message: "農業は変化し続けています。伝統を守りながら、若い世代の感性を取り入れ、100年後も愛される農園を目指しています。",
            image: "https://images.unsplash.com/photo-1548690312-e3b507d8d110?q=80&w=1974&auto=format&fit=crop"
        },
        {
            name: "佐藤 さゆり",
            role: "学生リーダー / 大学3年",
            message: "現場で土に触れることで、食の価値を再発見しました。学生だからこそできる発信で、農園の魅力を広めたいです。",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
        },
        {
            name: "高橋 健太",
            role: "プロジェクト制作 / 大学2年",
            message: "デザインやWebの力で、農業をかっこよくアップデートしたい。泥臭さと美しさが共存する西川農園が大好きです。",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop"
        }
    ];

    return (
        <div className="pb-20">
            <section className="bg-secondary/30 py-20 mb-16">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <span className="text-accent font-bold tracking-widest text-sm uppercase">Who we are</span>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mt-4 text-center text-primary">メンバー</h1>
                    <p className="mt-6 text-foreground/70 max-w-2xl mx-auto text-center">
                        西川農園を支える、多様な顔ぶれをご紹介。 <br />
                        世代を超えたチームワークが、私たちの原動力です。
                    </p>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {members.map((m, idx) => (
                    <div key={idx} className="flex flex-col items-center text-center space-y-6">
                        <div className="w-56 h-56 rounded-full overflow-hidden shadow-2xl border-4 border-white grayscale hover:grayscale-0 transition-all duration-500">
                            <img src={m.image} alt={m.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold text-primary">{m.name}</h3>
                            <p className="text-accent text-sm font-bold uppercase tracking-widest">{m.role}</p>
                        </div>
                        <p className="text-foreground/70 text-sm leading-relaxed max-w-xs italic">
                            「{m.message}」
                        </p>
                    </div>
                ))}
            </section>
        </div>
    );
}
