import { Leaf, Server, AlertTriangle } from 'lucide-react';

export function EnvironmentalIssues() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Environmental Issues in Digital Health</h1>

      <div className="space-y-6">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <Leaf className="h-8 w-8 text-green-600 mt-1" />
            <div>
              <h2 className="text-xl font-semibold mb-2">Environmental Impact</h2>
              <p className="text-gray-600">
                Digital health systems have the potential to reduce environmental impacts in healthcare,
                particularly when replacing in-person care. However, careful consideration of their
                implementation is crucial to ensure net positive environmental outcomes.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <Server className="h-8 w-8 text-green-600 mt-1" />
            <div>
              <h2 className="text-xl font-semibold mb-2">Infrastructure Considerations</h2>
              <p className="text-gray-600">
                The environmental impact of digital health infrastructure includes energy consumption,
                hardware lifecycle, and data center operations. Understanding these factors is essential
                for sustainable implementation.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <AlertTriangle className="h-8 w-8 text-green-600 mt-1" />
            <div>
              <h2 className="text-xl font-semibold mb-2">Challenges and Opportunities</h2>
              <p className="text-gray-600">
                While digital health presents environmental challenges, it also offers opportunities
                for sustainable healthcare delivery when properly planned and implemented.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}