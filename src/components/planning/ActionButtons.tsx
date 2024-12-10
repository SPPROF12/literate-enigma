import React from 'react';
import { Download, Upload, Share } from 'lucide-react';

export function ActionButtons() {
  return (
    <div className="flex items-center space-x-4">
      <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-800">
        <Download size={16} />
        <span>Export Answers</span>
      </button>
      <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-800">
        <Upload size={16} />
        <span>Import Answers</span>
      </button>
      <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-800">
        <Share size={16} />
        <span>Share via Email</span>
      </button>
    </div>
  );
}