import React from 'react';
import { GradientBackground } from './GradientBackground';
import { Target, CheckCircle2, Lightbulb, BookOpen, ExternalLink } from 'lucide-react';

export const RecommendedProjects: React.FC = () => {
  return (
    <div className="w-full h-full relative overflow-hidden bg-transparent">
      {/* Background Layers */}
      <GradientBackground
        centerPosition="top left"
        stops={[
          { color: '#FFFFFF', opacity: 0, position: '0%' },
          { color: '#FFFFFF', opacity: 0.8, position: '40%' },
          { color: '#FFFFFF', opacity: 1, position: '100%' },
        ]}
      />

      <div className="relative z-10  px-6 py-6 md:px-12 mx-auto max-w-[1000px]">
        {/* Header */}
        <div className="mb-8">
          <h2
            className="text-[40px] md:text-[46px] font-black text-[#1B2A56] leading-none mb-3"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Projects
          </h2>
          <p className="text-[16px] font-semibold text-[#64748B]">
            Do Projects before Final Year Starts
          </p>
        </div>

        {/* Main Content Area */}
        <div className="flex flex-col gap-6">
          {/* Project Header Box */}
          <div className="bg-[#FDF9FF] rounded-[20px] p-6 shadow-sm flex items-start gap-4">
            <div className="mt-1 flex items-center justify-center">
              <Target className="w-6 h-6 text-[#64748B]" />
            </div>
            <div>
              <h3 className="text-[22px] font-bold text-[#111827] mb-2 leading-tight">
                RAG Powered Legal / Education Bot
              </h3>
              <p className="text-[#475569] text-[15px] leading-relaxed">
                Answer user questions using Indian legal or education PDFs (e.g., Right to Information Act, NEP-2020)
              </p>
            </div>
          </div>

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Column (Stack & Steps) */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              {/* Tech Stack */}
              <div className="bg-white p-6 rounded-[20px] shadow-sm border border-[#E2E8F0]">
                <h4 className="font-bold text-[#111827] text-[18px] mb-5 flex items-center gap-3">
                  <span className="text-[#1E3A8A] font-black tracking-widest text-[20px]">&lt;&gt;</span>
                  Required Tech Stack
                </h4>
                <div className="flex flex-wrap gap-[10px]">
                  {['Python', 'LangChain', 'OpenAI / Ollama (Llama-3)', 'Sentence-Transformers', 'FastAPI', 'Docker', 'Streamlit', 'Render/AWS', 'FAISS/ChromaDB'].map((tech) => (
                    <span
                      key={tech}
                      className="bg-[#F0F5FF] text-[#2563EB] border border-[#DBEAFE] px-4 py-2 rounded-[12px] text-[14px] font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Steps */}
              <div className="bg-white p-6 rounded-[20px] shadow-sm border border-[#E2E8F0]">
                <h4 className="font-bold text-[#111827] text-[18px] mb-6 flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#22C55E]" />
                  Steps to Perform
                </h4>

                <div className="space-y-4">
                  {[
                    'Download PDFs — extract text with pdfplumber',
                    'Chunk text (~500 words) and embed with Sentence-Transformers (all-mpnet-base-v2)',
                    'Upload embeddings to Pinecone or free (chroma)',
                    'Build a LangChain pipeline: Retriever → LLM (OpenAI gpt-4o or local Llama-3) → response post proc',
                    'Fine-tune prompts on real queries',
                    'Containerise with Docker and deploy on Render or AWS Elastic Beanstalk',
                    'Create a simple UI with Streamlit for end users',
                  ].map((step, idx) => (
                    <div key={idx} className="flex gap-4 items-start">
                      <div className="w-7 h-7 rounded-full bg-[#DCFCE7] text-[#16A34A] font-bold text-[14px] flex items-center justify-center shrink-0 mt-[2px]">
                        {idx + 1}
                      </div>
                      <p className="text-[15px] text-[#334155] leading-relaxed">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column (Materials & Help) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Materials */}
              <div className="bg-white p-6 rounded-[20px] shadow-sm border border-[#E2E8F0]">
                <h4 className="font-bold text-[#111827] text-[18px] mb-5 flex items-center gap-3">
                  <BookOpen className="w-6 h-6 text-[#5A32A3]" />
                  Self Help Material
                </h4>
                <div className="space-y-4">
                  {[
                    { label: 'LangChain RAG tutorial', url: '#' },
                    { label: 'OpenAI API docs', url: '#' },
                    { label: 'Pinecone guide', url: '#' },
                  ].map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      className="flex items-center gap-3 text-[15px] font-medium text-[#2563EB] hover:text-[#1D4ED8] hover:underline transition-colors"
                    >
                      <ExternalLink className="w-[18px] h-[18px]" />
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Why it helps */}
              <div className="bg-[#FFFDF4] p-6 rounded-[20px] shadow-sm border border-[#FEF08A]">
                <h4 className="font-bold text-[#111827] text-[18px] mb-4 flex items-center gap-3">
                  <Lightbulb className="w-6 h-6 text-[#EAB308]" />
                  How it helps for job
                </h4>
                <p className="text-[15px] text-[#475569] leading-relaxed">
                  Shows mastery of GenAI & vector search, a skill in high demand for Indian startups building knowledge apps. End-to-end deployment proves you can ship a product, not just a notebook.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
