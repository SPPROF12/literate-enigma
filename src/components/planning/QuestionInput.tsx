import React from 'react';
import { QuestionTooltip } from './QuestionTooltip';

interface QuestionInputProps {
  question: string;
  tooltip: string;
  value: string;
  onChange: (value: string) => void;
}

export function QuestionInput({ question, tooltip, value, onChange }: QuestionInputProps) {
  return (
    <div className="mb-6">
      <div className="flex items-center space-x-2 mb-2">
        <label className="text-gray-700 font-medium">{question}</label>
        <QuestionTooltip content={tooltip} />
      </div>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
        rows={4}
      />
    </div>
  );
}