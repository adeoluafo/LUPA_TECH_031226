// src/data/dashboardData.js

export const dashboardData = {
  client: "Capital One",
  industry: "Financial Services",
  platforms: ["ChatGPT", "Gemini", "Perplexity"],
  monitoringActive: true,
  scores: [
    { label: "AI Visibility Score", value: 78, color: "bg-blue-600" },
    { label: "Accuracy Score", value: 85, color: "bg-green-600" },
    { label: "Trust Score", value: 82, color: "bg-violet-600" },
    { label: "AI Discovery Score", value: 81, color: "bg-orange-500" },
  ],
  products: [
    { name: "Spark Cash Business Card", segment: "Small Business" },
    { name: "Quicksilver Student Card", segment: "Students" },
    { name: "Savor Rewards Card", segment: "Dining & Entertainment Enthusiasts" },
    { name: "Spark Miles Business Card", segment: "Business Travel" },
  ],
  gatewayStatus: [
    { title: "Data Ingestion", sub: "Last update: 2 days ago", badge: "Active", tone: "green" },
    { title: "AI Knowledge Feed", sub: "156 structured records", badge: "Deployed", tone: "blue" },
    { title: "Coverage", sub: "All products have verified data feeds", badge: "100%", tone: "neutral" },
  ],
  promptMonitoring: [
    {
      category: "Small Business",
      prompt: "Best credit cards for small businesses",
      frequency: "Daily",
      appears: "2/3 platforms",
      ranking: "#2.0",
    },
    {
      category: "Travel Rewards",
      prompt: "Best travel rewards credit cards",
      frequency: "Daily",
      appears: "2/3 platforms",
      ranking: "#2.0",
    },
    {
      category: "Students",
      prompt: "Best credit cards for students",
      frequency: "Weekly",
      appears: "3/3 platforms",
      ranking: "#1.7",
    },
    {
      category: "Cashback",
      prompt: "Best cashback credit cards",
      frequency: "Daily",
      appears: "1/3 platforms",
      ranking: "#2.5",
    },
  ],
  diagnostics: [
    { label: "Financial comparison articles", value: 42, color: "bg-blue-600" },
    { label: "Rewards feature summaries", value: 31, color: "bg-violet-500" },
    { label: "Product pages", value: 19, color: "bg-emerald-500" },
    { label: "User reviews", value: 8, color: "bg-amber-500" },
  ],
  responseMonitor: [
    {
      platform: "ChatGPT",
      prompt: "Best credit cards for small businesses",
      results: ["Chase Ink Business Preferred", "Amex Business Gold", "Capital One Spark Cash"],
    },
    {
      platform: "Gemini",
      prompt: "Best credit cards for small businesses",
      results: ["Capital One Spark Cash", "Chase Ink Business Preferred", "Amex Business Gold"],
    },
    {
      platform: "Perplexity",
      prompt: "Best credit cards for small businesses",
      results: ["Capital One Spark Cash", "Chase Ink Business Preferred", "Amex Business Gold"],
    },
  ],
  hallucinations: [
    {
      severity: "medium",
      platform: "Gemini",
      product: "Capital One Spark Cash",
      issue: "Incorrect annual fee listed",
      aiResponse: "$75",
      verified: "$95",
      tone: "orange",
    },
    {
      severity: "low",
      platform: "ChatGPT",
      product: "Capital One Quicksilver Student",
      issue: "Missing intro bonus information",
      aiResponse: "No bonus mentioned",
      verified: "$50 bonus after first purchase",
      tone: "yellow",
    },
    {
      severity: "high",
      platform: "Perplexity",
      product: "Capital One Savor Rewards",
      issue: "Incorrect rewards rate on groceries",
      aiResponse: "2% on groceries",
      verified: "3% on groceries",
      tone: "red",
    },
  ],
  gatewayUpdates: [
    "Updated structured reward schema",
    "Distributed verified product dataset",
    "Refreshed pricing metadata",
  ],
};