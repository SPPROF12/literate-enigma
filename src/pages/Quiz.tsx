import { useState } from 'react';
import { QuizQuestions } from '../components/quiz/QuizQuestions';
import { QuizResults } from '../components/quiz/QuizResults';

interface Recommendation {
  sections: string[];
  priority: string[];
  description: string[];
}

export function Quiz() {
  const [showResults, setShowResults] = useState(false);
  const [recommendations, setRecommendations] = useState<Recommendation>({
    sections: [],
    priority: [],
    description: []
  });

  const handleQuizSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const sections: string[] = [];
    const priority: string[] = [];
    const description: string[] = [];

    const roles = formData.getAll('role');

    if (roles.includes('procurement')) {
      sections.push('procurement');
      priority.push('High');
      description.push('Focus on sustainable procurement practices for hardware and software');
    }

    if (roles.includes('data')) {
      sections.push('data');
      priority.push('High');
      description.push('Implement efficient data management strategies');
    }

    if (roles.includes('sustainability')) {
      sections.push('regulations');
      priority.push('Medium');
      description.push('Review and implement sustainability guidelines');
    }

    if (roles.includes('monitoring')) {
      sections.push('monitoring');
      priority.push('Medium');
      description.push('Set up environmental impact monitoring systems');
    }

    setRecommendations({
      sections,
      priority,
      description
    });
    setShowResults(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-green-100">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-800">
            Digital Health Planning Quiz
          </h1>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Answer a few questions to get personalized recommendations for your digital health planning journey.
          </p>

          <div className="transition-all duration-300 ease-in-out">
            {!showResults ? (
              <QuizQuestions onSubmit={handleQuizSubmit} />
            ) : (
              <QuizResults recommendations={recommendations} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}