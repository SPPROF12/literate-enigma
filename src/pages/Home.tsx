import { KeyArea } from '../components/home/KeyArea';
import { ShoppingCart, Database, Building2, LineChart } from 'lucide-react';

export function Home() {
  const keyAreas = [
    {
      title: "Procurement",
      description: "Considerations in procuring equipment and services to minimise environmental impacts",
      icon: <ShoppingCart size={24} />
    },
    {
      title: "Data Management",
      description: "Considerations around the management and processing of data to minimise environmental impacts",
      icon: <Database size={24} />
    },
    {
      title: "Organizational Approach",
      description: "Organizational approaches to minimising environmental impacts of ICT",
      icon: <Building2 size={24} />
    },
    {
      title: "Monitoring",
      description: "Ways to monitor and assess the current state and future progress of an environmentally sustainable Digital Health System",
      icon: <LineChart size={24} />
    }
  ];

  return (
    <main className="container mx-auto px-4 py-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Planning and Monitoring Tool for a Responsible and Sustainable Digital Health System
        </h1>

        <p className="text-gray-600 mb-8">
          Digitalisation of the health sector has huge potential to address unmet health needs.
          However, we must ensure that we digitalise in a way that minimises harm to the environment,
          otherwise human health could be adversely affected.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Key Areas of Focus</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {keyAreas.map((area, index) => (
            <KeyArea key={index} {...area} />
          ))}
        </div>
      </div>
    </main>
  );
}