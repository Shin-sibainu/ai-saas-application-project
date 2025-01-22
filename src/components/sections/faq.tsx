"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "生成した画像の著作権はどうなりますか？",
    answer: "AImagineで生成した画像の著作権は、生成したユーザーに帰属します。商用利用も可能です。ただし、プロプラン以上での利用が必要です。"
  },
  {
    question: "画像の生成にはどのくらい時間がかかりますか？",
    answer: "通常、1枚の画像生成には10-30秒程度かかります。ただし、サーバーの混雑状況や画像の複雑さによって変動する場合があります。"
  },
  {
    question: "生成できる画像のサイズに制限はありますか？",
    answer: "フリープランでは1024x1024ピクセルまで、プロプラン以上では4096x4096ピクセルまでの画像を生成できます。"
  },
  {
    question: "アップロードした画像は保存されますか？",
    answer: "画像処理に必要な最小限の期間のみ保存され、処理完了後は自動的に削除されます。セキュリティとプライバシーの保護を最優先しています。"
  },
  {
    question: "APIは利用できますか？",
    answer: "ビジネスプラン以上で、RESTful APIを利用可能です。詳細なドキュメントとサンプルコードを提供しています。"
  }
];

export function FAQSection() {
  return (
    <section id="faq" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            よくある質問
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            AImagineに関する一般的な質問をまとめました。
            さらに詳しい情報は、サポートページをご覧ください。
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}