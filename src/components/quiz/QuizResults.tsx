import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface Recommendation {
  sections: string[];
  priority: string[];
  description: string[];
}

interface QuizResultsProps {
  recommendations: Recommendation;
}

export const QuizResults = ({ recommendations }: QuizResultsProps) => {
  const navigate = useNavigate();

  const getSectionUrl = (section: string): string => {
    const sectionMap: Record<string, string> = {
      'procurement': '/planning/Procurement',
      'data': '/planning/DataManagement',
      'regulations': '/planning/Regulations',
      'monitoring': '/planning/Monitoring'
    };
    return sectionMap[section] || '/planning/initial';
  };

  const exportRecommendations = () => {
    const csvContent = recommendations.sections.map((section, index) => {
      const sectionUrl = `${window.location.origin}${getSectionUrl(section)}`;
      return `${section},${recommendations.priority[index]},${recommendations.description[index]},${sectionUrl}`;
    }).join('\n');

    const blob = new Blob([`Section,Priority,Description,URL\n${csvContent}`], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'digital_health_recommendations.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    toast.success("Recommendations exported successfully");
  };

  const goToFirstRecommendedSection = () => {
    if (recommendations.sections.length > 0) {
      const firstSection = recommendations.sections[0];
      navigate(getSectionUrl(firstSection));
    } else {
      navigate('/initial-planning');
    }
  };

  return (
    <div className="mt-8 space-y-4">
      <h3 className="text-xl font-semibold">Your Recommended Sections</h3>
      <div className="space-y-4">
        {recommendations.sections.map((section, index) => (
          <div key={section} className="bg-gray-50 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-medium">{section}</h4>
              <span className="px-2 py-1 text-xs font-semibold rounded bg-primary text-white">
                {recommendations.priority[index]}
              </span>
            </div>
            <p className="text-sm text-gray-600">{recommendations.description[index]}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-end space-x-4">
        <Button variant="outline" onClick={exportRecommendations}>
          Export for Team
        </Button>
        <Button onClick={goToFirstRecommendedSection}>
          Go to First Recommended Section
        </Button>
      </div>
    </div>
  );
};
