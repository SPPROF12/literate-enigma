import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import Footer from './Footer';
import { HomeSidebar } from './HomeSidebar';

export function HomeLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex">
        <HomeSidebar />
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