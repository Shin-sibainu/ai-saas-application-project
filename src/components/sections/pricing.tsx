"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "フリー",
    price: "¥0",
    description: "個人での利用に最適",
    features: [
      "月50枚までの画像生成",
      "基本的な背景除去",
      "標準画質での最適化",
      "基本的なAIフィルター",
    ],
    cta: "無料で始める",
    popular: false,
  },
  {
    name: "プロ",
    price: "¥2,980",
    period: "/月",
    description: "プロフェッショナルな制作に",
    features: [
      "月500枚までの画像生成",
      "高度な背景除去",
      "高品質での最適化",
      "全てのAIフィルター",
      "優先サポート",
      "商用利用可能",
    ],
    cta: "プロプランを選択",
    popular: true,
  },
  {
    name: "ビジネス",
    price: "¥9,800",
    period: "/月",
    description: "チームでの利用に最適",
    features: [
      "無制限の画像生成",
      "プロフェッショナルな背景除去",
      "超高品質での最適化",
      "カスタムAIフィルター",
      "専属サポート",
      "API利用可能",
      "チーム管理機能",
    ],
    cta: "お問い合わせ",
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            シンプルな料金プラン
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            必要な機能に合わせて選べる3つのプラン。
            いつでもプランの変更が可能です。
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative bg-card rounded-xl p-8 border ${
                plan.popular ? "border-primary shadow-xl" : "border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-sm font-medium px-3 py-1 rounded-full">
                    人気プラン
                  </span>
                </div>
              )}
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-4">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="text-muted-foreground">{plan.period}</span>
                  )}
                </div>
                <Button
                  size="lg"
                  variant={plan.popular ? "default" : "outline"}
                  className="w-full"
                >
                  {plan.cta}
                </Button>
              </div>
              <ul className="space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
