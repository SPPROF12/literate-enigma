import { Home, BookOpen, HelpCircle, PlayCircle } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from './Logo';

export function Header() {
  const location = useLocation();
  const isPlanning = location.pathname.startsWith('/planning');

  return (
    <header className="bg-green-800 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 hover:text-green-200 transition-colors">
          <Logo />
          <h1 className="text-xl font-semibold">Green Digital Health Tool</h1>
        </Link>

        <nav className="flex items-center space-x-6">
          <Link
            to="/"
            className="flex items-center space-x-1 hover:text-green-200 transition-colors"
          >
            <Home size={18} />
            <span>Home</span>
          </Link>
          <Link
            to="/thesaurus"
            className="flex items-center space-x-1 hover:text-green-200 transition-colors"
          >
            <BookOpen size={18} />
            <span>Thesaurus</span>
          </Link>
          <Link
            to="/how-to-use"
            className="flex items-center space-x-1 hover:text-green-200 transition-colors"
          >
            <HelpCircle size={18} />
            <span>How to Use</span>
          </Link>
          <Link
            to={isPlanning ? "/" : "/planning"}
            className="flex items-center space-x-1 hover:text-green-200 transition-colors"
          >
            <PlayCircle size={18} />
            <span>{isPlanning ? "Exit Planning" : "Start Planning"}</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}