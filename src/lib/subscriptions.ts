import Stripe from "stripe";
import { prisma } from "./prisma";
import { SubscriptionStatus } from "@prisma/client";
import { STRIPE_PLANS } from "@/config/plans";

function getPlanDetails(subscription: Stripe.Subscription) {
  const priceId = subscription.items.data[0].price.id;
  let status: SubscriptionStatus = "FREE";
  let credits = 5;

  switch (priceId) {
    case STRIPE_PLANS.STATER:
      status = "STATER";
      credits = 50;
      break;
    case STRIPE_PLANS.PRO:
      status = "PRO";
      credits = 120;
      break;
    case STRIPE_PLANS.ENTERPRISE:
      status = "ENTERPRISE";
      credits = 300;
      break;
  }

  return { priceId, status, credits };
}

export async function handleSubscriptionCreated(
  subscription: Stripe.Subscription
) {
  const { priceId, status, credits } = getPlanDetails(subscription);

  return prisma.user.update({
    where: { stripeCustomerId: subscription.customer as string },
    data: {
      subscriptionStatus: status,
      credits: credits,
      subscriptions: {
        create: {
          stripeSubscriptionId: subscription.id,
          stripePriceId: priceId,
          stripeCurrentPeriodEnd: new Date(
            subscription.current_period_end * 1000
          ),
        },
      },
    },
  });
}

export async function handleSubscriptionUpdated(
  subscription: Stripe.Subscription
) {
  const { priceId, status, credits } = getPlanDetails(subscription);

  return prisma.user.update({
    where: { stripeCustomerId: subscription.customer as string },
    data: {
      subscriptionStatus: subscription.cancel_at_period_end ? "FREE" : status,
      credits: subscription.cancel_at_period_end ? 5 : credits,
      subscriptions: {
        update: {
          stripeSubscriptionId: subscription.id,
          stripePriceId: priceId,
          stripeCurrentPeriodEnd: new Date(
            subscription.current_period_end * 1000
          ),
        },
      },
    },
  });
}

export async function handleSubscriptionDeleted(
  subscription: Stripe.Subscription
) {
  return prisma.user.update({
    where: { stripeCustomerId: subscription.customer as string },
    data: {
      subscriptionStatus: "FREE",
      credits: 5,
      subscriptions: {
        delete: {
          stripeSubscriptionId: subscription.id,
        },
      },
    },
  });
}
