/* eslint-disable @next/next/no-img-element */
"use client";

import { generateImage } from "@/actions/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { GenerateImageState } from "@/types/actions";
import { Download, ImageIcon } from "lucide-react";
import React, { useActionState } from "react";
import LoadingSpinner from "../loading-spinner";
import { toast } from "@/hooks/use-toast";
import { SignInButton, useUser } from "@clerk/nextjs";

const initialState: GenerateImageState = {
  status: "idle",
};

const ImageGenerator = () => {
  const { isSignedIn } = useUser();

  const [state, formAction, pending] = useActionState(
    generateImage,
    initialState
  );

  const handleDownload = () => {
    if (!state.imageUrl) {
      return;
    }

    try {
      const base64Data = state.imageUrl.split(",")[1];

      const blob = new Blob([Buffer.from(base64Data, "base64")], {
        type: "image/png",
      });

      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");

      link.href = url;
      link.download = `${state.keyword}.png`;

      document.body.appendChild(link);
      link.click();

      //一時的なリンクを削除
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      toast({
        title: "ダウンロード完了",
        description: "画像のダウンロードが完了しました。",
      });
    } catch (error) {
      console.error("Download error:", error);
      toast({
        title: "エラー",
        description: "ダウンロードに失敗しました。",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <form action={formAction} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="keyword">キーワード</Label>
            <Input
              id="keyword"
              name="keyword"
              placeholder="作成したい画像のキーワードを入力(例：海、山、都会、自然)"
              required
            />
          </div>
          {/* submit button */}
          {isSignedIn ? (
            <Button
              type="submit"
              disabled={pending}
              className={cn("w-full duration-200", pending && "bg-primary/80")}
            >
              {pending ? (
                <LoadingSpinner />
              ) : (
                <>
                  <ImageIcon className="mr-2" />
                  画像を生成
                </>
              )}
            </Button>
          ) : (
            <SignInButton mode="modal">
              <Button className="w-full">
                <ImageIcon className="mr-2" />
                ログインして画像を生成
              </Button>
            </SignInButton>
          )}
        </form>
      </div>

      {/* image preview */}
      {state.imageUrl && (
        <div className="space-y-4">
          <div className="overflow-hidden rounded-lg border bg-background">
            <div className="aspect-video relative">
              <img
                src={state.imageUrl}
                alt="Generated image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <Button
            className="w-full"
            variant={"outline"}
            onClick={handleDownload}
          >
            <Download className="mr-2" />
            ダウンロード
          </Button>
        </div>
      )}
    </div>
  );
};

export default ImageGenerator;
