import React from 'react';
import { NavLink } from 'react-router-dom';
import { Info, Leaf, HelpCircle, Network } from 'lucide-react';

const navItems = [
  { icon: <Info size={20} />, label: 'About This Tool', path: '/about' },
  { icon: <Leaf size={20} />, label: 'Environmental Issues in Digital Health', path: '/environmental-issues' },
  { icon: <HelpCircle size={20} />, label: 'How the Tool was Developed', path: '/development' },
  { icon: <Network size={20} />, label: 'The ICT Supply Chain', path: '/supply-chain' },
];

export function HomeSidebar() {
  return (
    <nav className="w-64 bg-white border-r border-gray-200 min-h-screen">
      <div className="p-4">
        <h2 className="text-sm font-semibold text-gray-600 mb-4">About This Tool</h2>
        <div className="space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center space-x-3 px-4 py-2 rounded-md transition-colors ${
                  isActive
                    ? 'bg-green-50 text-green-800'
                    : 'text-gray-700 hover:bg-gray-50'
                }`
              }
            >
              <span className="text-current">{item.icon}</span>
              <span>{item.label}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}