import React from 'react';

interface KeyAreaProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export function KeyArea({ title, description, icon }: KeyAreaProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="text-green-800 mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}