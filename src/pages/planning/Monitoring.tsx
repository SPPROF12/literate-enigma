import { useState } from 'react';
import { QuestionInput } from '../../components/planning/QuestionInput';
import { ProgressBar } from '../../components/planning/ProgressBar';
import { ActionButtons } from '../../components/planning/ActionButtons';

export function Monitoring() {
  const [answers, setAnswers] = useState({
    assessment: '',
    impacts: '',
    otherImpacts: '',
    addressing: ''
  });

  const handleChange = (field: keyof typeof answers) => (value: string) => {
    setAnswers(prev => ({ ...prev, [field]: value }));
  };

  const progress = Object.values(answers).filter(Boolean).length * (100 / 4);

  return (
    <div>
      <div className="flex justify-between items-start mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Monitoring and Assessing</h1>
        <ActionButtons />
      </div>

      <ProgressBar progress={progress} />

      <div className="space-y-8">
        <QuestionInput
          question="How are you going to assess the environmental impact of your service over time?"
          value={answers.assessment}
          onChange={handleChange('assessment')}
        />

        <QuestionInput
          question="Have you considered any intended or unintended environmental impacts (rebound effects) associated with your digital health system?"
          tooltip="Decision-making can have unintended consequences called 'rebound effects'. For example, a virtual care service may be so convenient, in comparison with the in person service it was intended to 'replace', that many more people use it. Instead of the anticipated reduced emissions resulting from reduced patient travel, you might be surprised to find that overall emissions have actually increased."
          value={answers.impacts}
          onChange={handleChange('impacts')}
        />

        <QuestionInput
          question="Have you considered other possible impacts that might be associated with the digital health system?"
          tooltip="For example, is the digital health system actually achieving its desired health outcomes? You should plan to assess this on an ongoing basis, rather than simply assume it is the case. If desired health outcomes are not met, resources are being wasted. Decreasing resource consumption of a digital health system that is not achieving its intended health outcomes is worse than using more resources for something that is having real health benefits over the long term."
          value={answers.otherImpacts}
          onChange={handleChange('otherImpacts')}
        />

        <QuestionInput
          question="Have you mapped out how you will address any intended or unintended environmental impacts?"
          tooltip="This example of <a href='/thesaurus#rebound_effects'>rebound effects</a> also provides examples of possible mitigation strategies."
          value={answers.addressing}
          onChange={handleChange('addressing')}
        />
      </div>
    </div>
  );
}