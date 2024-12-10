import { ArrowRight } from 'lucide-react';

export function QuickStartCard() {
  return (
    <div className="bg-green-50 p-6 rounded-lg border border-green-100 mb-8">
      <p className="text-green-800 mb-4">
        Not sure where to start? Take our quick quiz to get personalized recommendations
      </p>
      <button className="flex items-center space-x-2 bg-green-800 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors">
        <span>Take the Quiz</span>
        <ArrowRight size={16} />
      </button>
    </div>
  );
}