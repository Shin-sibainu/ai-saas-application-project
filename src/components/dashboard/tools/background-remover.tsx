/* eslint-disable @next/next/no-img-element */
"use client";

import { removeBackground } from "@/actions/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { GenerateImageState } from "@/types/actions";
import { Download, Layers } from "lucide-react";
import React, { useActionState } from "react";
import LoadingSpinner from "../loading-spinner";
import { toast } from "@/hooks/use-toast";
import { SignInButton, useUser } from "@clerk/nextjs";

const initialState: GenerateImageState = {
  status: "idle",
};

const BackgroundRemover = () => {
  const { isSignedIn } = useUser();

  const [state, formAction, pending] = useActionState(
    removeBackground,
    initialState
  );

  const handleDownload = () => {
    if (!state.processedImage) {
      return;
    }

    try {
      const base64Data = state.processedImage.split(",")[1];

      const blob = new Blob([Buffer.from(base64Data, "base64")], {
        type: "image/png",
      });

      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");

      link.href = url;
      link.download = `background-removed.png`;

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
            <Label htmlFor="image">ファイルをアップロード</Label>
            <Input
              id="image"
              name="image"
              type="file"
              accept="image/*"
              className="w-full"
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
                  <Layers className="mr-2" />
                  背景を削除
                </>
              )}
            </Button>
          ) : (
            <SignInButton mode="modal">
              <Button className="w-full">
                <Layers className="mr-2" />
                ログインして背景を削除
              </Button>
            </SignInButton>
          )}
        </form>
      </div>

      {/* image preview */}
      {state.processedImage && (
        <div className="space-y-4">
          <div className="overflow-hidden rounded-lg border bg-background">
            <div className="aspect-video relative">
              <img
                src={state.processedImage}
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

export default BackgroundRemover;
