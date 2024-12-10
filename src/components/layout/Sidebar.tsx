import { NavLink } from 'react-router-dom';
import { ClipboardList, ShoppingCart, Database, BookText, LineChart } from 'lucide-react';

const navItems = [
  { icon: <ClipboardList size={20} />, label: 'Initial Planning', path: './initial' },
  { icon: <ShoppingCart size={20} />, label: 'Procurement', path: './procurement' },
  { icon: <Database size={20} />, label: 'Data Management', path: './dataManagement' },
  { icon: <BookText size={20} />, label: 'Regulations', path: './regulations' },
  { icon: <LineChart size={20} />, label: 'Monitoring', path: './monitoring' },
];

export function Sidebar() {
  return (
    <nav className="w-64 bg-white border-r border-gray-200 min-h-screen">
      <div className="p-4">
        <h2 className="text-sm font-semibold text-gray-600 mb-4">Navigation</h2>
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