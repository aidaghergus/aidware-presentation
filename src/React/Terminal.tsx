import { useState, useEffect } from "react";

type LineType = "prompt" | "out" | "green";
interface Line { type: LineType; text: string; }

const lines: Line[] = [
  { type: "prompt", text: "whoami" },
  { type: "out",    text: "aidware — software & AI studio" },
  { type: "prompt", text: "cat services.json" },
  { type: "out",    text: '{ "ai": ["applications","chatbots","agents"],' },
  { type: "out",    text: '  "backend": ["apis","integrations","cloud"],' },
  { type: "out",    text: '  "mvp": "idea → production" }' },
  { type: "prompt", text: "git log --oneline -3" },
  { type: "out",    text: "a1b2c3 feat: multi-agent workflow (pericles)" },
  { type: "out",    text: "9f8e7d feat: land analysis pipeline (aidarch)" },
  { type: "out",    text: "3c4d5e ci: deploy via github actions" },
  { type: "prompt", text: "echo $STATUS" },
  { type: "green",  text: "available_for_new_projects" },
];

export default function Terminal() {
  const [shown, setShown] = useState<Line[]>([]);
  const [cursor, setCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    let t: ReturnType<typeof setTimeout>;
    const next = () => {
      if (i < lines.length) {
        const idx = i++;
        setShown(prev => [...prev, lines[idx]]);
        t = setTimeout(next, 85 + Math.random() * 55);
      }
    };
    t = setTimeout(next, 600);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const iv = setInterval(() => setCursor(c => !c), 530);
    return () => clearInterval(iv);
  }, []);

  return (
    <div className="terminal-box">
      <div className="terminal-bar">
        <span className="dot" style={{ background: "#ff5f57" }} />
        <span className="dot" style={{ background: "#ffbd2e" }} />
        <span className="dot" style={{ background: "#28c840" }} />
        <span className="terminal-title">aida@aidware:~</span>
      </div>
      <div className="terminal-body">
        {shown.map((l, i) => (
          <div key={i}>
            {l.type === "prompt" && <><span className="t-prompt">~ </span><span className="t-cmd">{l.text}</span></>}
            {l.type === "out"    && <span className="t-out">{l.text}</span>}
            {l.type === "green"  && <span className="t-green">{l.text}</span>}
          </div>
        ))}
        {shown.length > 0 && <span className="t-cursor" style={{ opacity: cursor ? 1 : 0 }}>█</span>}
      </div>
    </div>
  );
}
