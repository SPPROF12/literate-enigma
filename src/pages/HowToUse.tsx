import React from 'react';
import { BookOpen, PlayCircle, Search, Settings } from 'lucide-react';

interface GuideSection {
  title: string;
  description: string;
  icon: React.ReactNode;
  steps: string[];
}

export function HowToUse() {
  const sections: GuideSection[] = [
    {
      title: "Getting Started",
      description: "Learn the basics of using the Green Digital Health Tool",
      icon: <BookOpen size={24} />,
      steps: [
        "Navigate to the Home page to understand the key areas of focus",
        "Explore the Thesaurus to familiarize yourself with terminology",
        "Review the About section to understand the context and importance"
      ]
    },
    {
      title: "Planning Process",
      description: "How to use the planning tools effectively",
      icon: <PlayCircle size={24} />,
      steps: [
        "Start with the Initial Planning section to set your goals",
        "Work through each section systematically: Procurement, Data Management, etc.",
        "Use the monitoring tools to track progress and impact"
      ]
    },
    {
      title: "Using the Thesaurus",
      description: "Make the most of the terminology database",
      icon: <Search size={24} />,
      steps: [
        "Use the search function to find specific terms",
        "Browse by categories to understand related concepts",
        "Reference definitions during the planning process"
      ]
    },
    {
      title: "Best Practices",
      description: "Tips for optimal use of the tool",
      icon: <Settings size={24} />,
      steps: [
        "Regularly update your planning documents",
        "Share and collaborate with your team",
        "Monitor and adjust your approach based on results"
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">How to Use This Tool</h1>

      <div className="mb-8">
        <p className="text-gray-600">
          Welcome to the Green Digital Health Tool. This guide will help you understand how to use
          the various features and make the most of the planning and monitoring capabilities.
        </p>
      </div>

      <div className="space-y-8">
        {sections.map((section, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-2 bg-green-100 rounded-lg text-green-800">
                {section.icon}
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">{section.title}</h2>
                <p className="text-gray-600">{section.description}</p>
              </div>
            </div>

            <ul className="space-y-3 ml-4">
              {section.steps.map((step, stepIndex) => (
                <li key={stepIndex} className="flex items-start">
                  <span className="inline-block w-6 h-6 bg-green-100 text-green-800 rounded-full text-sm flex items-center justify-center mr-3 mt-0.5">
                    {stepIndex + 1}
                  </span>
                  <span className="text-gray-700">{step}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}