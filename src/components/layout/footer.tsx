"use client";

import { Zap } from "lucide-react";

const footerLinks = {
  product: {
    title: "製品",
    links: [
      { label: "機能", href: "#features" },
      { label: "料金プラン", href: "#pricing" },
      { label: "活用例", href: "#use-cases" },
      { label: "API", href: "#" },
      { label: "ステータス", href: "#" }
    ]
  },
  support: {
    title: "サポート",
    links: [
      { label: "ヘルプセンター", href: "#" },
      { label: "API ドキュメント", href: "#" },
      { label: "コミュニティ", href: "#" },
      { label: "お問い合わせ", href: "#" }
    ]
  },
  company: {
    title: "会社",
    links: [
      { label: "会社概要", href: "#" },
      { label: "ブログ", href: "#" },
      { label: "採用情報", href: "#" }
    ]
  },
  legal: {
    title: "法的情報",
    links: [
      { label: "利用規約", href: "#" },
      { label: "プライバシーポリシー", href: "#" },
      { label: "特定商取引法に基づく表記", href: "#" }
    ]
  }
};

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Zap className="w-6 h-6 text-primary" />
              <span className="font-bold text-xl">AImagine</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 AImagine. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}