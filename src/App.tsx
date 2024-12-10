import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HomeLayout } from './components/layout/HomeLayout';
import { PlanningLayout } from './components/planning/PlanningLayout';
import { InitialPlanning } from './pages/planning/InitialPlanning';
import { Procurement } from './pages/planning/Procurement';
import { DataManagement } from './pages/planning/DataManagement';
import { Regulations } from './pages/planning/Regulations';
import { Monitoring } from './pages/planning/Monitoring';
import { Home } from './pages/Home';
import { About } from './pages/about/About';
import { EnvironmentalIssues } from './pages/about/EnvironmentalIssues';
import { Development } from './pages/about/Development';
import { SupplyChain } from './pages/about/SupplyChain';
import { Thesaurus } from './pages/Thesaurus';
import { HowToUse } from './pages/HowToUse';
import { Quiz } from './pages/Quiz';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* About section routes */}
        <Route element={<HomeLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/environmental-issues" element={<EnvironmentalIssues />} />
          <Route path="/development" element={<Development />} />
          <Route path="/supply-chain" element={<SupplyChain />} />
          <Route path="/thesaurus" element={<Thesaurus />} />
          <Route path="/how-to-use" element={<HowToUse />} />
          <Route path="/quiz" element={<Quiz />} />
        </Route>
        {/* Planning section routes */}
        <Route path="/planning" element={<PlanningLayout />}>
          <Route index element={<Navigate to="initial" replace />} />
          <Route path="initial" element={<InitialPlanning />} />
          <Route path="Procurement" element={<Procurement />} />
          <Route path="DataManagement" element={<DataManagement />} />
          <Route path="Regulations" element={<Regulations />} />
          <Route path="Monitoring" element={<Monitoring />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;