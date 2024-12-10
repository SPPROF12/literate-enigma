import React from 'react';
import { Leaf } from 'lucide-react';

export function Logo() {
  return (
    <div className="bg-white p-2 rounded-full">
      <Leaf className="w-6 h-6 text-green-800" />
    </div>
  );
}