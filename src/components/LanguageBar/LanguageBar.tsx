import React from 'react';

interface LanguagesBarProps {
  data: Record<string, number>;
}

const LanguagesBar: React.FC<LanguagesBarProps> = ({ data }) => {
  const total = Object.values(data).reduce((acc, value) => acc + value, 0);

  const languageEntries = Object.entries(data).map(([language, value]) => ({
    language,
    value,
    percentage: (value / total) * 100,
  }));

  const sortedLanguages = languageEntries.sort((a, b) => b.percentage - a.percentage);
  const topLanguages = sortedLanguages.slice(0, 3);
  
  const otherLanguagesPercentage = sortedLanguages.slice(3).reduce((acc, entry) => acc + entry.percentage, 0);

  const getColor = (index: number): string => {
    switch (index) {
      case 0:
        return 'bg-blue-500';
      case 1:
        return 'bg-red-500';
      case 2:
        return 'bg-yellow-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className='max-w-[500px] mx-4 sm:mx-0 flex flex-col gap-3'>
        <div className="w-full h-2 flex rounded-full border-gray-300 overflow-hidden">
          {topLanguages.map((_, index) => {
            const { percentage } = topLanguages[index];

            return (
              <div
                key={index}
                style={{ width: `${percentage}%` }}
                className={`h-full ${getColor(index)}`}
                title={`${topLanguages[index].language}: ${Math.round(percentage)}%`}
              />
            );
          })}
          {otherLanguagesPercentage > 0 && (
            <div
              style={{ width: `${otherLanguagesPercentage}%` }}
              className={`h-full bg-gray-300`}
              title={`Other: ${Math.round(otherLanguagesPercentage)}%`}
            />
          )}
        </div>
        <div className="flex flex-wrap justify-between text-secondary-text">
            {topLanguages.map((lang, index) => (
              <span key={index} className="text-sm">
                {`${lang.language}: ${Math.round(lang.percentage)}%`}
              </span>
            ))}
            {otherLanguagesPercentage > 0 && (
              <span className="text-sm">{`Other: ${Math.round(otherLanguagesPercentage)}%`}</span>
            )}
        </div>
    </div>
  );
};

export default LanguagesBar;