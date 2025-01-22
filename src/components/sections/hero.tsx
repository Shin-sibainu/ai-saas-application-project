"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Image as ImageIcon, FileDown, Settings2 } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="pt-32 pb-16 px-4">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            AIで実現する、<br className="md:hidden" />
            <span className="text-primary">クリエイティブの革新</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            画像生成、背景除去、最適化まで。あなたのクリエイティブワークを加速する、オールインワンAIツール。
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="w-full md:w-auto">
                <Link href="/dashboard">
              無料トライアルを始める
                </Link>
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="w-full md:w-auto">
              デモを見る
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16"
        >
          <div className="relative mx-auto max-w-5xl rounded-xl border bg-card p-2 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1664575198308-3959904fa430?auto=format&fit=crop&q=80"
              alt="AI画像生成のデモ"
              className="w-full rounded-lg aspect-video object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-xl flex items-end justify-center p-8">
              <div className="grid grid-cols-3 gap-4 w-full max-w-3xl">
                <div className="bg-card/90 backdrop-blur-sm p-4 rounded-lg">
                  <ImageIcon className="w-6 h-6 text-primary mb-2" />
                  <h3 className="font-medium mb-1">AI画像生成</h3>
                  <p className="text-sm text-muted-foreground">テキストから美しい画像を生成</p>
                </div>
                <div className="bg-card/90 backdrop-blur-sm p-4 rounded-lg">
                  <FileDown className="w-6 h-6 text-primary mb-2" />
                  <h3 className="font-medium mb-1">背景除去</h3>
                  <p className="text-sm text-muted-foreground">ワンクリックで背景を削除</p>
                </div>
                <div className="bg-card/90 backdrop-blur-sm p-4 rounded-lg">
                  <Settings2 className="w-6 h-6 text-primary mb-2" />
                  <h3 className="font-medium mb-1">画像最適化</h3>
                  <p className="text-sm text-muted-foreground">自動で最適なサイズに圧縮</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}