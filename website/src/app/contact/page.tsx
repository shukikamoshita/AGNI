"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
    name: z.string().min(1, "お名前を入力してください"),
    email: z.string().email("正しいメールアドレスを入力してください"),
    message: z.string().min(5, "お問い合わせ内容は5文字以上で入力してください"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);
        setError(null);

        try {
            // Mock API call
            console.log("Form submitted:", data);
            await new Promise((resolve) => setTimeout(resolve, 1500));

            setIsSuccess(true);
            reset();
        } catch (err) {
            setError("送信中にエラーが発生しました。時間をおいて再度お試しください。");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="pb-20">
            <section className="bg-secondary/30 py-20 mb-16 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="text-accent font-bold tracking-widest text-sm uppercase">Contact</span>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mt-4 text-center">お問い合わせ</h1>
                    <p className="mt-6 text-foreground/70 max-w-2xl mx-auto text-center">
                        農園へのご質問、プロジェクトへの参加希望、<br className="hidden md:block" />
                        作物のご注文に関するご相談など、お気軽にお問い合わせください。
                    </p>
                </div>
            </section>

            <section className="max-w-2xl mx-auto px-4">
                {isSuccess ? (
                    <div className="bg-primary/10 border border-primary/20 rounded-3xl p-12 text-center animate-in fade-in zoom-in duration-500">
                        <CheckCircle2 className="mx-auto text-primary w-20 h-20 mb-6" />
                        <h2 className="text-2xl font-bold text-primary mb-4 text-center">送信完了いたしました</h2>
                        <p className="text-foreground/70 mb-8 text-center">
                            お問い合わせありがとうございます。内容を確認次第、<br />
                            担当者よりメールにてご連絡させていただきます。
                        </p>
                        <button
                            onClick={() => setIsSuccess(false)}
                            className="text-primary font-bold hover:underline"
                        >
                            トップへ戻る
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 bg-white p-8 md:p-12 rounded-3xl border border-secondary shadow-sm">
                        {error && (
                            <div className="bg-accent/10 border border-accent/20 text-accent p-4 rounded-xl flex items-center gap-2">
                                <AlertCircle size={20} />
                                <p className="text-sm font-medium">{error}</p>
                            </div>
                        )}

                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-bold text-primary flex items-center gap-1">
                                お名前 <span className="text-accent">*</span>
                            </label>
                            <input
                                id="name"
                                {...register("name")}
                                placeholder="西川 太郎"
                                className={cn(
                                    "w-full px-4 py-4 rounded-xl border border-secondary bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all",
                                    errors.name && "border-accent ring-accent/20"
                                )}
                            />
                            {errors.name && <p className="text-accent text-xs font-bold">{errors.name.message}</p>}
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-bold text-primary flex items-center gap-1">
                                メールアドレス <span className="text-accent">*</span>
                            </label>
                            <input
                                id="email"
                                type="email"
                                {...register("email")}
                                placeholder="example@mail.com"
                                className={cn(
                                    "w-full px-4 py-4 rounded-xl border border-secondary bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all",
                                    errors.email && "border-accent ring-accent/20"
                                )}
                            />
                            {errors.email && <p className="text-accent text-xs font-bold">{errors.email.message}</p>}
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-bold text-primary flex items-center gap-1">
                                お問い合わせ内容 <span className="text-accent">*</span>
                            </label>
                            <textarea
                                id="message"
                                {...register("message")}
                                rows={6}
                                placeholder="お問い合わせ内容を入力してください。"
                                className={cn(
                                    "w-full px-4 py-4 rounded-xl border border-secondary bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none",
                                    errors.message && "border-accent ring-accent/20"
                                )}
                            />
                            {errors.message && <p className="text-accent text-xs font-bold">{errors.message.message}</p>}
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={cn(
                                "w-full py-5 rounded-2xl bg-primary text-white font-bold text-lg flex items-center justify-center gap-2 transition-all hover:bg-primary/90 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed shadow-lg",
                                isSubmitting && "animate-pulse"
                            )}
                        >
                            {isSubmitting ? "送信中..." : "送信する"}
                            {!isSubmitting && <Send size={20} />}
                        </button>
                    </form>
                )}
            </section>
        </div>
    );
}
