import { getUserCredits } from "@/lib/credits";
import { currentUser } from "@clerk/nextjs/server";
import { Loader2, Lock } from "lucide-react";
import { Suspense } from "react";

async function CreditsContent() {
  const credits = await getUserCredits();

  const user = await currentUser();

  if (!user) {
    return (
      <div className="rounded-lg border bg-background p-4">
        <div className="text-sm font-medium text-muted-foreground">
          残りクレジット
        </div>
        <div className="mt-2 flex items-center gap-2 text-muted-foreground text-sm">
          <Lock className="size-3" />
          <span>ログインが必要です</span>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-lg border bg-background p-4">
      <div className="text-sm font-medium text-muted-foreground">
        残りクレジット
      </div>
      <div className="mt-2 font-bold">{credits} クレジット</div>
    </div>
  );
}

const CreditDisplay = async () => {
  return (
    <Suspense
      fallback={
        <div className="rounded-lg border bg-background p-4">
          <div className="text-sm font-medium text-muted-foreground">
            残りクレジット
          </div>
          <div className="mt-2 flex items-center gap-2 text-muted-foreground text-sm">
            <Loader2 className="size-3 animate-spin" />
            <span className="text-muted-foreground">読み込み中...</span>
          </div>
        </div>
      }
    >
      <CreditsContent />
    </Suspense>
  );
};

export default CreditDisplay;
