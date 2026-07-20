// Single source of truth for Aida's professional profile.
// Used by /about and /cv — edit here, both pages update.

export const name = "Aida Ghergus";

export const jobTitle = "Senior Software Engineer";

export const summary =
  "Senior Software Engineer with 8+ years of experience building scalable backend systems, " +
  "distributed applications and AI-powered products, including full-stack work with React. " +
  "Experienced across Java, Python and JavaScript, with recent focus on AI-powered applications, " +
  "cloud-based backend development and LLM integrations. Strong background in Google Cloud, AWS, " +
  "Apache Kafka and modern backend technologies. Passionate about building reliable software and " +
  "continuously learning emerging technologies.";

export interface SkillGroup {
  title: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  { title: "Languages", items: ["Java", "Python", "JavaScript"] },
  { title: "Backend", items: ["Spring", "Quarkus", "Hibernate / JPA", "REST APIs", "Apache Kafka", "Maven", "Gradle"] },
  { title: "AI", items: ["Claude", "Gemini", "Vertex AI", "AI Agents", "LLM Integration", "Prompt Engineering"] },
  { title: "Cloud & DevOps", items: ["AWS", "Google Cloud", "Firebase", "Docker", "Kubernetes", "GitHub Actions", "Jenkins", "Vercel"] },
  { title: "Databases", items: ["PostgreSQL", "SQL", "MongoDB", "Elasticsearch", "Sybase"] },
  { title: "Frontend", items: ["React", "Astro", "Tailwind CSS", "Redux", "Ant Design"] },
];
