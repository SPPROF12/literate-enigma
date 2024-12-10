import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { useNavigate } from "react-router-dom";

interface QuizQuestionsProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const QuizQuestions = ({ onSubmit }: QuizQuestionsProps) => {
  const navigate = useNavigate();

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-medium">1. What is your role in the Digital Health System project?</h3>
        <div className="space-y-2">
          {[
            { value: "procurement", label: "Procuring software or hardware" },
            { value: "data", label: "Managing data and processing" },
            { value: "sustainability", label: "Ensuring sustainability compliance" },
            { value: "monitoring", label: "Monitoring environmental impacts" }
          ].map((role) => (
            <div key={role.value} className="flex items-center space-x-2">
              <Checkbox id={role.value} name="role" value={role.value} />
              <label htmlFor={role.value} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                {role.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">2. Are you involved in defining the devices or infrastructure needed?</h3>
        <RadioGroup name="devices">
          <div className="flex items-center">
            <RadioGroupItem id="devices-yes" value="yes" />
            <label htmlFor="devices-yes" className="text-sm font-medium leading-none ml-2">Yes</label>
            <RadioGroupItem id="devices-no" value="no" className="ml-4" />
            <label htmlFor="devices-no" className="text-sm font-medium leading-none ml-2">No</label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">3. Will you make decisions about data hosting?</h3>
        <RadioGroup name="dataHosting">
          <div className="flex items-center">
            <RadioGroupItem id="dataHosting-yes" value="yes" />
            <label htmlFor="dataHosting-yes" className="text-sm font-medium leading-none ml-2">Yes</label>
            <RadioGroupItem id="dataHosting-no" value="no" className="ml-4" />
            <label htmlFor="dataHosting-no" className="text-sm font-medium leading-none ml-2">No</label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">4. Are you responsible for environmental sustainability?</h3>
        <RadioGroup name="sustainability">
          <div className="flex items-center">
            <RadioGroupItem id="sustainability-yes" value="yes" />
            <label htmlFor="sustainability-yes" className="text-sm font-medium leading-none ml-2">Yes</label>
            <RadioGroupItem id="sustainability-no" value="no" className="ml-4" />
            <label htmlFor="sustainability-no" className="text-sm font-medium leading-none ml-2">No</label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">5. Will you monitor carbon emissions or rebound effects?</h3>
        <RadioGroup name="monitoring">
          <div className="flex items-center">
            <RadioGroupItem id="monitoring-yes" value="yes" />
            <label htmlFor="monitoring-yes" className="text-sm font-medium leading-none ml-2">Yes</label>
            <RadioGroupItem id="monitoring-no" value="no" className="ml-4" />
            <label htmlFor="monitoring-no" className="text-sm font-medium leading-none ml-2">No</label>
          </div>
        </RadioGroup>
      </div>

      <div className="flex justify-end space-x-4">
        <Button variant="outline" onClick={() => navigate("/initial-planning")}>
          Skip Quiz
        </Button>
        <Button type="submit">Get Recommendations</Button>
      </div>
    </form>
  );
};