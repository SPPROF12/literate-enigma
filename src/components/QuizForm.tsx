import { Button } from "./ui/button";

interface QuizFormProps {
  onSubmit: () => void;
}

export function QuizForm({ onSubmit }: QuizFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Before we start...</h3>
        <p className="text-gray-600">
          This quiz will help us understand your role and requirements better.
          Based on your answers, we'll recommend which sections of the planning tool
          you should focus on first.
        </p>
      </div>

      <div className="flex justify-end">
        <Button type="submit">Start Quiz</Button>
      </div>
    </form>
  );
}