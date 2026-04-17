import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Voice Bot Platform for Customer Engagement | Credibility",
  description: "Credibility is an AI voice interaction layer that automates customer conversations, reduces agent load, and delivers real-time operational intelligence — deployable across any industry.",
};

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
