"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brush, Share2, ShoppingBag } from "lucide-react";

const useCases = [
  {
    icon: Brush,
    title: "デザイナー・クリエイター",
    description:
      "アイデアを素早く視覚化し、クライアントへのプレゼンテーションを効率化",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&q=80",
  },
  {
    icon: Share2,
    title: "SNS運用者",
    description:
      "魅力的なビジュアルコンテンツを簡単に作成し、エンゲージメントを向上",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80",
  },
  {
    icon: ShoppingBag,
    title: "ECサイト運営",
    description:
      "商品画像の背景除去や最適化で、購買意欲を高める商品ページを作成",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
  },
];

export function UseCasesSection() {
  return (
    <section id="use-cases" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            様々な業種で活用可能
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            AImagineは、あらゆる業種のクリエイティブワークを支援します。
            使い方は無限大。あなたのビジネスに最適な使い方を見つけてください。
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              <div className="aspect-square rounded-xl overflow-hidden">
                <img
                  src={useCase.image}
                  alt={useCase.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <useCase.icon className="w-8 h-8 text-primary mb-3" />
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {useCase.title}
                </h3>
                <p className="text-white/80">{useCase.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg">
            無料で始める
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
