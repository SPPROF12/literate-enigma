import { useState } from 'react';
import { Link } from 'react-router-dom';
import { QuestionInput } from '../../components/planning/QuestionInput';
import { ProgressBar } from '../../components/planning/ProgressBar';
import { ActionButtons } from '../../components/planning/ActionButtons';
import { X } from 'lucide-react';

export function InitialPlanning() {
  const [answers, setAnswers] = useState({
    system: '',
    users: '',
    function: ''
  });

  const handleChange = (field: keyof typeof answers) => (value: string) => {
    setAnswers(prev => ({ ...prev, [field]: value }));
  };

  const progress = Object.values(answers).filter(Boolean).length * (100 / 3);

  const handleClear = () => {
    setAnswers({
      system: '',
      users: '',
      function: ''
    });
  };

  return (
    <div>
      <div className="flex justify-between items-start mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Initial Planning</h1>
        <ActionButtons />
      </div>

      <ProgressBar progress={progress} />

      <div className="bg-green-50 p-4 rounded-lg mb-8">
        <p className="text-green-800 flex items-center gap-2">
          Not sure where to start? Take our quick quiz to get personalized recommendations
          <Link
            to="/quiz"
            className="inline-flex items-center text-green-700 hover:text-green-800 font-medium"
          >
            Take the Quiz →
          </Link>
        </p>
      </div>

      <div className="space-y-8">
        <QuestionInput
          question="What is the digital health system you are planning?"
          value={answers.system}
          onChange={handleChange('system')}
          tooltip={''}
        />

        <QuestionInput
          question="Who will use this digital health system (e.g. patients, healthcare providers, administrators)?"
          tooltip="List or map all the groups of people that are going to use the digital health system. Don't forget those prescribing in and monitoring it, such as health professionals, in addition to patients and carers."
          value={answers.users}
          onChange={handleChange('users')}
        />

        <QuestionInput
          question="How will your digital health system function?"
          tooltip="List or map all the devices, services and infrastructures that will be needed for this digital health system, and how they will interact with each other. Include those devices that may be supplied or used by the patient (e.g. phone, laptop)"
          value={answers.function}
          onChange={handleChange('function')}
        />
      </div>

      <div className="flex justify-end mt-6">
        <button
          onClick={handleClear}
          className="flex items-center space-x-2 text-red-600 hover:text-red-700"
        >
          <X size={16} />
          <span>Clear Section</span>
        </button>
      </div>
    </div>
  );
}