"use client";

import { Button } from "@/components/ui/button";
import { Settings2, Zap } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Zap className="w-6 h-6 text-primary" />
          <span className="font-bold text-xl">AImagine</span>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#features"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            機能
          </a>
          <a
            href="#use-cases"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            活用例
          </a>
          <a
            href="#pricing"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            料金プラン
          </a>
          <Button asChild>
            <Link href="/dashboard">無料で始める</Link>
          </Button>
        </nav>
        <Button variant="ghost" className="md:hidden">
          <Settings2 className="w-5 h-5" />
        </Button>
      </div>
    </header>
  );
}
