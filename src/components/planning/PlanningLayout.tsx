import { Outlet } from 'react-router-dom';
import { Header } from '../layout/Header';
import Footer from '../layout/Footer';
import { Sidebar } from '../layout/Sidebar';

export function PlanningLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-8">
          <div className="max-w-3xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}