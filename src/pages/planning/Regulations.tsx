import { useState } from 'react';
import { QuestionInput } from '../../components/planning/QuestionInput';
import { ProgressBar } from '../../components/planning/ProgressBar';
import { ActionButtons } from '../../components/planning/ActionButtons';

export function Regulations() {
  const [answers, setAnswers] = useState({
    guidelines: '',
    capacity: '',
    training: ''
  });

  const handleChange = (field: keyof typeof answers) => (value: string) => {
    setAnswers(prev => ({ ...prev, [field]: value }));
  };

  const progress = Object.values(answers).filter(Boolean).length * (100 / 3);

  return (
    <div>
      <div className="flex justify-between items-start mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Sustainability: Workforce and Regulations</h1>
        <ActionButtons />
      </div>

      <ProgressBar progress={progress} />

      <div className="space-y-8">
        <QuestionInput
          question="What environmental sustainability guidelines and regulation is your organisation required to follow?"
          tooltip="List relevant environmental regulations and guidelines"
          value={answers.guidelines}
          onChange={handleChange('guidelines')}
        />

        <QuestionInput
          question="How is your organisation set up to ensure capacity and skillsets exist in house?"
          tooltip="Describe your organization's sustainability capabilities"
          value={answers.capacity}
          onChange={handleChange('capacity')}
        />

        <QuestionInput
          question="Has your organisation's workforce been trained to follow sustainability guidelines?"
          tooltip="Detail your sustainability training programs"
          value={answers.training}
          onChange={handleChange('training')}
        />
      </div>
    </div>
  );
}