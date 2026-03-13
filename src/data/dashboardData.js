export const dashboardData = {
  header: {
    title: "Dell VeriPrompt",
    subtitle: "AI Discovery Intelligence & Product Data Gateway Platform",
    client: "Capital One",
    industry: "Financial Services",
    status: "Monitoring Active",
    platforms: ["ChatGPT", "Gemini", "Perplexity"],
  },

  productsMonitored: [
    { name: "Spark Cash Business Card", category: "Small Business", verified: true },
    { name: "Quicksilver Student Card", category: "Students", verified: true },
    { name: "Savor Rewards Card", category: "Dining & Entertainment Enthusiasts", verified: true },
    { name: "Spark Miles Business Card", category: "Business Travel", verified: true },
  ],

  gatewayStatus: {
    dataIngestion: {
      label: "Data Ingestion",
      status: "Active",
      updateText: "Last update: 2 days ago",
    },
    knowledgeFeed: {
      label: "AI Knowledge Feed",
      status: "Deployed",
      records: "156 structured records",
    },
    coverage: "100%",
    coverageText: "All products have verified data feeds",
  },

  scores: [
    { label: "AI Visibility Score", value: 78, color: "bg-blue-500" },
    { label: "Accuracy Score", value: 85, color: "bg-green-500" },
    { label: "Trust Score", value: 82, color: "bg-violet-500" },
    { label: "AI Discovery Score", value: 81, color: "bg-orange-500" },
  ],

  improvement: {
    text: "+12% improvement",
    subtext: "Since VeriPrompt gateway deployment",
  },

  promptMonitoring: [
    {
      tag: "Small Business",
      query: 'Best credit cards for small businesses',
      frequency: "Daily",
      appearance: "2/3 platforms",
      ranking: "#2.0",
    },
    {
      tag: "Travel Rewards",
      query: "Best travel rewards credit cards",
      frequency: "Daily",
      appearance: "2/3 platforms",
      ranking: "#2.0",
    },
    {
      tag: "Students",
      query: "Best credit cards for students",
      frequency: "Weekly",
      appearance: "3/3 platforms",
      ranking: "#1.7",
    },
    {
      tag: "Cashback",
      query: "Best cashback credit cards",
      frequency: "Daily",
      appearance: "1/3 platforms",
      ranking: "#2.5",
    },
  ],

  signalDiagnostics: [
    { label: "Financial comparison articles", value: 42, color: "bg-blue-500" },
    { label: "Rewards feature summaries", value: 31, color: "bg-violet-500" },
    { label: "Product pages", value: 19, color: "bg-green-500" },
    { label: "User reviews", value: 8, color: "bg-yellow-500" },
  ],

  diagnosticsInsight:
    "Comparison articles drive 42% of AI responses. VeriPrompt is prioritizing structured data distribution to these sources.",

  aiResponses: [
    {
      platform: "ChatGPT",
      prompt: 'Best credit cards for small businesses',
      items: [
        "Chase Ink Business Preferred",
        "Amex Business Gold",
        "Capital One Spark Cash",
      ],
    },
    {
      platform: "Gemini",
      prompt: 'Best credit cards for small businesses',
      items: [
        "Amex Business Gold",
        "Chase Ink",
        "Capital One Spark Miles",
      ],
    },
    {
      platform: "Perplexity",
      prompt: 'Best credit cards for small businesses',
      items: [
        "Capital One Spark Cash",
        "Chase Ink Business Preferred",
        "Amex Business Gold",
      ],
    },
  ],

  gatewayActions: [
    "Updated structured reward schema",
    "Distributed verified product dataset",
    "Refreshed pricing metadata",
    "Enhanced feature descriptions for AI systems",
  ],

  accuracyFlags: [
    {
      severity: "medium",
      platform: "Gemini",
      product: "Capital One Spark Cash",
      issue: "Incorrect annual fee listed",
      aiResponse: "$75",
      verifiedData: "$95",
    },
    {
      severity: "low",
      platform: "ChatGPT",
      product: "Capital One Quicksilver Student",
      issue: "Missing intro bonus information",
      aiResponse: "No bonus mentioned",
      verifiedData: "$50 bonus after first purchase",
    },
    {
      severity: "high",
      platform: "Perplexity",
      product: "Capital One Savor Rewards",
      issue: "Incorrect rewards rate on groceries",
      aiResponse: "2% on groceries",
      verifiedData: "3% on groceries",
    },
  ],
};