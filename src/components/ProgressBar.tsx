import React from 'react';

interface ProgressBarProps {
  progress: string; // '0%', '44%' ইত্যাদি
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
      <div
        className="bg-green-600 dark:bg-blue-400 h-2.5 rounded-full"
        style={{ width: progress }}
      ></div>
    </div>
  );
};

export default ProgressBar;