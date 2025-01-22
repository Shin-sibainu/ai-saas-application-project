"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ImageIcon, Wand2, History, Settings2 } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="flex-1 space-y-6">
      {/* ヘッダー部分 */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">ダッシュボード</h1>
        <Button>
          <Wand2 className="mr-2 h-4 w-4" />
          新規作成
        </Button>
      </div>

      {/* 統計カード */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">今月の生成数</CardTitle>
            <ImageIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24/100</div>
            <p className="text-xs text-muted-foreground">先月比 +12%</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">保存済み画像</CardTitle>
            <History className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">145</div>
            <p className="text-xs text-muted-foreground">合計保存容量 1.2GB</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              利用可能クレジット
            </CardTitle>
            <Settings2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">76</div>
            <p className="text-xs text-muted-foreground">フリープラン</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">API使用量</CardTitle>
            <Settings2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0/1000</div>
            <p className="text-xs text-muted-foreground">リクエスト/月</p>
          </CardContent>
        </Card>
      </div>

      {/* メインコンテンツ */}
      <Tabs defaultValue="recent" className="space-y-4">
        <TabsList>
          <TabsTrigger value="recent">最近の生成</TabsTrigger>
          <TabsTrigger value="saved">保存済み</TabsTrigger>
          <TabsTrigger value="templates">テンプレート</TabsTrigger>
        </TabsList>
        <TabsContent value="recent" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                prompt: "夕暮れの富士山",
                image:
                  "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=800&h=800&q=80",
              },
              {
                prompt: "未来都市の風景",
                image:
                  "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&h=800&q=80",
              },
              {
                prompt: "宇宙ステーション",
                image:
                  "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&h=800&q=80",
              },
              {
                prompt: "深海の生物",
                image:
                  "https://images.unsplash.com/photo-1682687982501-1e58ab814714?w=800&h=800&q=80",
              },
              {
                prompt: "幻想的な森",
                image:
                  "https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?w=800&h=800&q=80",
              },
              {
                prompt: "古代遺跡",
                image:
                  "https://images.unsplash.com/photo-1590595978583-3967cf17d2ea?w=800&h=800&q=80",
              },
            ].map((item, i) => (
              <Card key={i}>
                <CardContent className="p-0">
                  <div className="aspect-square relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.prompt}
                      className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm font-medium">{item.prompt}</p>
                    <p className="text-sm text-muted-foreground">
                      {new Date().toLocaleDateString()}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="saved">
          <div className="text-center text-muted-foreground py-12">
            保存済みの画像がありません
          </div>
        </TabsContent>
        <TabsContent value="templates">
          <div className="text-center text-muted-foreground py-12">
            テンプレートがありません
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
