"use client";

import { motion } from "framer-motion";
import { Wand2, ImageDown, Compass as Compress} from "lucide-react";

const features = [
  {
    icon: Wand2,
    title: "AI画像生成",
    description: "テキストプロンプトから、高品質な画像を数秒で生成。あなたのイメージを忠実に再現します。",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80"
  },
  {
    icon: ImageDown,
    title: "背景除去",
    description: "ワンクリックで画像から背景を自動除去。複雑な画像でも正確に処理します。",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80"
  },
  {
    icon: Compress,
    title: "画像最適化",
    description: "品質を保ちながら、ファイルサイズを最適化。ウェブサイトのパフォーマンスを向上させます。",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80"
  }
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            あらゆるクリエイティブニーズに対応
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            最新のAI技術を活用し、クリエイティブワークを効率化。
            質の高い成果物を、より短時間で作成できます。
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-card rounded-xl overflow-hidden border shadow-lg"
            >
              <div className="aspect-video relative">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              <div className="p-6">
                <feature.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}