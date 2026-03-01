import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { GradientBackground } from './GradientBackground';

const subjects = [
  {
    title: 'Mathematics for AI',
    topics: [
      'Linear Algebra (vectors, matrices, eigen decomposition)',
      'Probability & Statistics (distributions, Bayesian inference, hypothesis testing)',
      'Calculus (gradients, chain rule, optimization)',
      'Information Theory (entropy, KL-divergence)'
    ]
  },
  {
    title: 'Machine Learning Foundations',
    topics: [
      'Supervised/Unsupervised learning',
      'Model evaluation (cross-validation, ROC-AUC, confusion matrix)',
      'Regularisation (L1, L2, dropout)',
      'Ensemble methods (Random Forest, Gradient Boosting)'
    ]
  },
  {
    title: 'Deep Learning',
    topics: [
      'Neural network basics (perceptron, activation functions)',
      'Convolutional Neural Networks (CNNs)',
      'Recurrent/Transformer architectures (RNN, LSTM, GRU, Attention)',
      'Training tricks (batch-norm, learning-rate schedulers, mixed-precision)'
    ]
  }
];

export const KeySubjects: React.FC = () => {
  // Simulating an accordion state, initially all open for the report view
  const [openItems, setOpenItems] = useState([0, 1, 2]);

  // Function to toggle accordion items
  const toggleItem = (index: number) => {
    setOpenItems(prevOpenItems =>
      prevOpenItems.includes(index)
        ? prevOpenItems.filter(item => item !== index)
        : [...prevOpenItems, index]
    );
  };

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
      <h2 className="text-3xl font-bold text-[#202244] mb-8">Key Subjects to Focus On!</h2>

      <div className="space-y-6">
        {subjects.map((sub, idx) => {
          const isOpen = openItems.includes(idx);
          return (
            <div key={idx} className="border border-gray-100 rounded-3xl overflow-hidden bg-white shadow-sm">
              <button
                onClick={() => toggleItem(idx)}
                className="w-full flex items-center justify-between p-6 bg-[#F8F6FA] hover:bg-[#F0EDF6] transition-colors text-left"
              >
                <h3 className="font-bold text-gray-900 text-lg">{sub.title}</h3>
                {isOpen ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
              </button>

              {isOpen && (
                <div className="p-6 bg-[#FAFAFA]">
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Key Topics</h4>
                  <div className="space-y-3">
                    {sub.topics.map((topic, i) => (
                      <div key={i} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm text-sm text-gray-700">
                        {topic}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  </div>
  );
};
