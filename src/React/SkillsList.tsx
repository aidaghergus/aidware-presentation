import React, { useState } from "react";

const CategoryIcons: Record<string, React.ReactNode> = {
  "Backend Engineering": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[var(--sec)] opacity-80">
      <path d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12zm5.5-5a1 1 0 0 0 0 2h9a1 1 0 1 0 0-2h-9zm-1 4a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2h-9a1 1 0 0 1-1-1zm1 3a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2h-5z" />
    </svg>
  ),
  "Cybersecurity": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[var(--sec)] opacity-80">
      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 4l5 2.18V11c0 3.5-2.33 6.79-5 7.93-2.67-1.14-5-4.43-5-7.93V7.18L12 5z" />
    </svg>
  ),
  "AI & Consulting": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[var(--sec)] opacity-80">
      <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2M7.5 13A2.5 2.5 0 0 0 5 15.5 2.5 2.5 0 0 0 7.5 18 2.5 2.5 0 0 0 10 15.5 2.5 2.5 0 0 0 7.5 13m9 0a2.5 2.5 0 0 0-2.5 2.5 2.5 2.5 0 0 0 2.5 2.5 2.5 2.5 0 0 0 2.5-2.5 2.5 2.5 0 0 0-2.5-2.5z" />
    </svg>
  ),
  "Fullstack": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[var(--sec)] opacity-80">
      <path d="M21 3C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21ZM20 11H4V19H20V11ZM20 5H4V9H20V5ZM11 6V8H9V6H11ZM7 6V8H5V6H7Z" />
    </svg>
  ),
};

const skills: Record<string, string[]> = {
  "Backend Engineering": [
    "REST APIs & microservices in Java & Python",
    "Spring Boot · FastAPI · PostgreSQL · Docker",
    "Performance optimization & system design",
  ],
  "Cybersecurity": [
    "Master's degree emphasis in cybersecurity",
    "Network security & secure software design",
    "Threat modeling & vulnerability analysis",
  ],
  "AI & Consulting": [
    "Certified AI courses · LLM integration",
    "Python ML ecosystem (scikit-learn, LangChain)",
    "AI strategy consulting for businesses",
  ],
  "Fullstack": [
    "React · TypeScript · Astro frontend",
    "API design & integration",
    "Mobile-friendly responsive web apps",
  ],
};

const SkillsList = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleItem = (item: string) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="text-left pt-3 md:pt-9">
      <h3 className="text-[var(--white)] text-3xl md:text-4xl font-semibold md:mb-6">
        What I do<span className="text-[var(--sec)]">.</span>
      </h3>
      <ul className="space-y-3 mt-4">
        {Object.entries(skills).map(([category, items]) => (
          <li key={category} className="w-full">
            <div
              onClick={() => toggleItem(category)}
              className="md:w-[400px] w-full rounded-xl text-left transition-all border cursor-pointer overflow-hidden"
              style={{
                background: "rgba(11,18,35,0.8)",
                borderColor: openItem === category ? "var(--sec)" : "var(--border)",
              }}
            >
              <div className="flex items-center gap-3 p-4">
                {CategoryIcons[category]}
                <div className="flex items-center gap-2 flex-grow justify-between">
                  <span className="text-[var(--white)] text-base font-medium truncate">
                    {category}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`w-5 h-5 text-[var(--white-icon)] transform transition-transform flex-shrink-0 ${
                      openItem === category ? "rotate-180" : ""
                    }`}
                  >
                    <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z" />
                  </svg>
                </div>
              </div>
              <div
                className={`transition-all duration-300 px-4 ${
                  openItem === category
                    ? "max-h-[200px] pb-4 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="space-y-1.5">
                  {items.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm" style={{ color: "var(--white-icon)" }}>
                      <span className="text-[var(--sec)] mt-0.5 flex-shrink-0">▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;