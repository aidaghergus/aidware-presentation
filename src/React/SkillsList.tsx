import { useState } from "react";

const skills: Record<string, string[]> = {
  "Backend Engineering": [
    "Java · Quarkus · Spring Boot · Kafka · REST APIs",
    "Docker · Kubernetes · AWS (Lambda, S3, Cognito, CloudWatch)",
    "PostgreSQL · MongoDB · Elasticsearch · Cassandra",
  ],
  "Cybersecurity": [
    "MSc in IT&C Security — Bucharest University of Economic Studies",
    "Network security · Secure software design",
    "Threat modeling · Vulnerability analysis",
  ],
  "AI & Consulting": [
    "OpenAI API integration — used in production at Qualysoft",
    "LLM application development · AI strategy consulting",
    "Python ML ecosystem · IBM Watson",
  ],
  "Fullstack": [
    "ReactJS · Angular · JavaScript · TypeScript",
    "CI/CD with Jenkins · Ansible · Git/SVN",
    "GCP · Linux · ELK stack · Grafana · Kibana",
  ],
};

const icons: Record<string, string> = {
  "Backend Engineering": "⚙️",
  "Cybersecurity": "🔒",
  "AI & Consulting": "🤖",
  "Fullstack": "🌐",
};

export default function SkillsList() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="text-left pt-3 md:pt-9">
      <h3 className="text-[var(--white)] text-3xl md:text-4xl font-semibold md:mb-6">
        What I do<span className="text-[var(--sec)]">.</span>
      </h3>
      <ul className="space-y-3 mt-4">
        {Object.entries(skills).map(([category, items]) => (
          <li key={category}>
            <div
              onClick={() => setOpen(open === category ? null : category)}
              className="md:w-[400px] w-full rounded-xl border cursor-pointer overflow-hidden transition-all duration-200"
              style={{
                background: "var(--bg2)",
                borderColor: open === category ? "var(--white)" : "var(--white-icon-tr)",
              }}
            >
              <div className="flex items-center gap-3 p-4">
                <span className="text-lg">{icons[category]}</span>
                <div className="flex items-center gap-2 flex-grow justify-between">
                  <span className="text-[var(--white)] text-base font-medium truncate">{category}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`w-5 h-5 text-[var(--white-icon)] flex-shrink-0 transition-transform duration-200 ${open === category ? "rotate-180" : ""}`}
                  >
                    <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z" />
                  </svg>
                </div>
              </div>
              <div className={`transition-all duration-300 px-4 ${open === category ? "max-h-[200px] pb-4 opacity-100" : "max-h-0 opacity-0"}`}>
                <ul className="space-y-1.5">
                  {items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[var(--white-icon)]">
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
}