import React from 'react';

const technologies = [
  {
    title: 'Generative AI',
    impacts: ['Text-to-image generation', 'Language model fine-tuning', 'Creative content automation'],
    applications: ['Image classification', 'NLP tasks', 'Medical imaging'],
    tools: ['TensorFlow Hub', 'PyTorch', 'Hugging Face']
  },
  {
    title: 'Large Language Models (LLMs)',
    impacts: ['Contextual understanding', 'Multi-task capabilities', 'Few-shot learning'],
    applications: ['Virtual assistants', 'Automated translation', 'Text summarization'],
    tools: ['BERT, GPT-4o, T5', 'LangChain, PyTorch']
  },
  {
    title: 'Quantum AI',
    impacts: ['Faster computation', 'Complex problem-solving', 'Early-stage research'],
    applications: ['Optimization problems', 'Drug discovery', 'Cryptography'],
    tools: ['Qiskit', 'PennyLane', 'Cirq']
  },
  {
    title: 'Edge AI',
    impacts: ['On-device computation', 'Privacy-focused', 'Low power consumption'],
    applications: ['IoT devices', 'Smart cameras', 'Wearables'],
    tools: ['TensorFlow Lite', 'ONNX', 'NVIDIA Jetson']
  }
];

import { GradientBackground } from './GradientBackground';

export const TrendingAI: React.FC = () => {
  return (
    <div className="w-full h-full relative overflow-hidden">
      {/* Background Layers */}
      <GradientBackground
              centerPosition="top left"
              stops={[
                { color: '#FFFFFF', opacity: 0, position: '0%' },
                { color: '#FFFFFF', opacity: 0.8, position: '40%' },
                { color: '#FFFFFF', opacity: 1, position: '100%' },
              ]}
            />

      <div className="relative z-10  px-6 py-6 md:px-12">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-[#202244] mb-2 leading-tight">
          What's Trending in<br/>Artificial Intelligence
        </h2>
        <p className="text-gray-600 font-medium">Technologies shaping the future - and your career!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {technologies.map((tech, idx) => (
          <div key={idx} className="bg-white rounded-3xl p-6 border border-[#E9E1F5] shadow-sm hover:border-[#5A32A3] transition-colors">
            <h3 className="text-xl font-bold text-gray-900 mb-4">{tech.title}</h3>

            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-bold text-gray-800 mb-2">Impact Areas:</h4>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  {tech.impacts.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-800 mb-2">Applications:</h4>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  {tech.applications.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-800 mb-2">Tools:</h4>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  {tech.tools.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};
