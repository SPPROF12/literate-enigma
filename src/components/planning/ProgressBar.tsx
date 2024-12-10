interface ProgressBarProps {
  progress: number;
}

export function ProgressBar({ progress }: ProgressBarProps) {
  const roundedProgress = Math.round(progress);

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-gray-600">Progress</span>
        <span className="text-sm text-gray-600">{roundedProgress}%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full">
        <div
          className="h-full bg-green-600 rounded-full transition-all duration-300"
          style={{ width: `${roundedProgress}%` }}
        />
      </div>
    </div>
  );
}