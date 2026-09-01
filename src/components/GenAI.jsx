import React from 'react';
import ChatbotDemo from './ChatbotDemo';

export default function GenAI() {
  return (
    <section className="section section-dark" id="gen-ai">
      <div className="container">
        <div className="split">

          <div className="split-copy reveal visible">
            <div className="eyebrow">Generative AI & Private LLMs</div>
            <h2>Intelligent agents, <span className="text-accent">securely deployed.</span></h2>
            <p>
              MAYA LABS engineers specialized Generative AI for aerospace, defence and high-security enterprise — specialising in private, air-gapped LLM architectures and mission-compliant AI agents.
            </p>

            <div className="mini-grid">
              <div className="mini-card">
                <strong>SECURE OFF-CLOUD RAG</strong>
                <p>Connect intelligence to classified documents, compliance standards and telemetry logs with complete air-gap privacy.</p>
              </div>
              <div className="mini-card">
                <strong>QUANTIZED EDGE MODELS</strong>
                <p>Deploy large language models on Nvidia Jetson modules or secure servers — zero cloud dependency, zero data exposure.</p>
              </div>
            </div>

            <ul className="check-list">
              <li>Defence-grade data sovereignty</li>
              <li>Quantised offline model optimisation</li>
              <li>Multi-agent workflow automation</li>
              <li>Hardware-accelerated edge inference</li>
            </ul>
          </div>

          <div className="split-visual reveal visible reveal-delay-2">
            <ChatbotDemo />
          </div>

        </div>
      </div>
    </section>
  );
}
