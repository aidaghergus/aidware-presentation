export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  status: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "AidArch",
    description:
      "AI-powered land analysis platform that gathers and organizes publicly available information about a land parcel to support early-stage evaluation.",
    tags: ["AI", "Data Aggregation"],
    status: "2025 · in development",
    featured: true,
  },
  {
    title: "Land Feasibility ML",
    description:
      "Residual land value calculator built on the Madrid Real Estate Market Kaggle dataset. Linear Regression, Random Forest and XGBoost models were evaluated using MAE and R².",
    tags: ["Python", "Machine Learning", "XGBoost"],
    status: "2025 · side project",
  },
  {
    title: "GenAI Jobs",
    description:
      "GenAI-powered application that parses job postings and extracts role details and required technologies. Built with Python and Streamlit.",
    tags: ["Python", "Streamlit", "GenAI"],
    link: "https://genai-jobs.streamlit.app",
    status: "2025 · ongoing side project",
  },
  {
    title: "Pericles",
    description:
      "Multi-agent AI application for Spanish lawyers, developed end to end by Aida as the sole engineer — from the multi-agent workflow to CI/CD.",
    tags: ["JavaScript", "Firebase", "Vertex AI", "Gemini", "GitHub Actions"],
    status: "Client project",
    featured: true,
  },
  {
    title: "Spanish Real Estate Chatbots",
    description:
      "AI-powered chatbots developed for Spanish real estate platforms — context-aware assistants that handle first contact with prospective buyers and tenants.",
    tags: ["AI Agents", "Chatbots"],
    status: "Client projects",
    featured: true,
  },
  {
    title: "aidware.dev",
    description:
      "The studio website — designed and built in-house with Astro, React islands and Tailwind CSS, deployed on Vercel.",
    tags: ["Astro", "React", "Tailwind CSS", "TypeScript", "Vercel"],
    link: "https://github.com/aidaghergus",
    status: "Live",
  },
];