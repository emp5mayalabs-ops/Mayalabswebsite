import React, { useState, useEffect, useRef } from 'react';

const PROMPTS = [
  "What is MAYA LABS?",
  "Tell me about UAV Autonomy.",
  "Can I deploy LLMs offline?",
  "How do you build defence chatbots?",
];

const ANSWERS = {
  "what is maya labs": "MAYA LABS is an indigenous deep-tech R&D organisation based in Technopark, Trivandrum. We design sovereign solutions for defence, aerospace, autonomous robotics, tactical cybersecurity and advanced edge AI.",
  "uav autonomy": "Our UAV/UGV platforms run custom edge AI: real-time SLAM path planning, obstacle avoidance, multi-spectral sensor fusion and target tracking — all directly on embedded chipsets, no cloud needed.",
  "llms offline": "Yes. We build secure, air-gapped LLM integrations using quantised models (Llama, Gemma) running locally on Nvidia Jetson modules or hardened servers — complete data sovereignty, zero leakage.",
  "defence chatbots": "We create air-gapped RAG chatbots that index technical manuals, maintenance logs and flight telemetry, enabling rapid, natural-language query responses completely offline.",
  "default": "At MAYA LABS we specialise in co-designing tactical hardware and embedded AI — including private air-gapped LLMs and conversational agents. Scroll down to our contact form to discuss your mission requirements.",
};

function match(text) {
  const t = text.toLowerCase().replace(/[?.,!]/g, '');
  for (const [key, val] of Object.entries(ANSWERS)) {
    if (key === 'default') continue;
    if (t.includes(key) || key.split(' ').some(w => t.includes(w))) return val;
  }
  return ANSWERS.default;
}

export default function ChatbotDemo() {
  const [msgs, setMsgs] = useState([
    { id: 0, role: 'system', text: 'SECURE AI TERMINAL INITIALISED // AIR-GAPPED SUBSYSTEM ONLINE' },
    { id: 1, role: 'bot',    text: 'Welcome to the MAYA Secure AI Assistant. Ask about our defence capabilities, autonomous robotics, or offline LLM architectures.' },
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [msgs, typing]);

  const send = (text) => {
    if (!text?.trim()) return;
    setMsgs(m => [...m, { id: Date.now(), role: 'user', text }]);
    setInput('');
    setTyping(true);
    setTimeout(() => {
      setMsgs(m => [...m, { id: Date.now() + 1, role: 'bot', text: match(text) }]);
      setTyping(false);
    }, 900);
  };

  return (
    <div className="chatbot-widget">
      {/* Header */}
      <div className="chat-header">
        <div style={{ display:'flex', alignItems:'center', gap:9 }}>
          <span className="chat-dot" />
          <span className="chat-title">MAYA // SECURE AI TERMINAL</span>
        </div>
        <span className="chat-status">EDGE NODE: OFFLINE_RAG</span>
      </div>

      {/* Messages */}
      <div className="chat-body">
        {msgs.map(m => (
          <div key={m.id} className={`chat-bubble ${m.role}`}>{m.text}</div>
        ))}
        {typing && (
          <div className="chat-bubble bot" style={{ display:'flex', alignItems:'center', gap:8 }}>
            <span style={{ fontSize:12, color:'var(--fg-2)' }}>Processing</span>
            <span className="dot-pulse">
              <span /><span /><span />
            </span>
          </div>
        )}
        <div ref={endRef} />
      </div>

      {/* Quick prompts */}
      <div className="chat-prompts">
        {PROMPTS.map((p,i) => (
          <button key={i} className="chat-prompt" onClick={() => send(p)} disabled={typing}>{p}</button>
        ))}
      </div>

      {/* Input */}
      <form className="chat-form" onSubmit={e => { e.preventDefault(); send(input); }}>
        <input
          className="chat-input"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Ask a capability or technical question…"
          disabled={typing}
        />
        <button className="chat-send" type="submit" disabled={typing || !input.trim()}>SEND</button>
      </form>
    </div>
  );
}
