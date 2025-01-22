/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { createStripeSession } from "@/actions/stripe";
import { Button } from "@/components/ui/button";
import { plans } from "@/config/plans";
import { toast } from "@/hooks/use-toast";
import { StripeState } from "@/types/actions";
import { Check } from "lucide-react";
import { useActionState } from "react";

const initialState: StripeState = {
  status: "idle",
  error: "",
  redirectUrl: "",
};

const Plan = () => {
  const [state, formAction, pending] = useActionState(
    async (prevState: StripeState, formData: FormData) => {
      const result = await createStripeSession(prevState, formData);

      if (result.status === "error") {
        toast({
          title: "エラー",
          description: result.error,
          variant: "destructive",
        });
      } else if (result.status === "success" && result.redirectUrl) {
        window.location.href = result.redirectUrl;
      }

      return result;
    },
    initialState
  );

  return (
    <div className="container py-8 mx-auto">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold">料金プラン</h1>
        <p className="mt-4 text-muted-foreground text-lg">
          あなたのニーズに合わせて最適なプランをお選びください。
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 md:grid-cols-1 mx-auto max-w-7xl">
        {plans.map((plan) => {
          const Icon = plan.icon;

          return (
            <div
              key={plan.name}
              className={`border rounded-xl bg-card p-8 shadow-sm flex flex-col ${
                plan.popular ? "ring-2 ring-primary scale-105" : ""
              }`}
            >
              <div className="space-y-6 flex-1">
                <div className="space-y-4">
                  {plan.popular && (
                    <div className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary w-fit">
                      人気プラン
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <Icon className="size-6 text-primary" />
                    <h2 className="text-2xl font-bold">{plan.name}</h2>
                  </div>
                  <p className="text-muted-foreground">{plan.description}</p>
                </div>

                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="ml-2 text-muted-foreground">/月</span>
                </div>

                <ul className="space-y-4 text-sm">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className="size-4 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <form action={formAction}>
                <input name="priceId" value={plan.priceId} type="hidden" />
                <Button
                  className="w-full mt-8"
                  size={"lg"}
                  variant={plan.popular ? "default" : "outline"}
                  type="submit"
                >
                  {plan.buttonText}
                </Button>
              </form>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Plan;
