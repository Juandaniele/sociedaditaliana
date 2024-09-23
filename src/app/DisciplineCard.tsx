import React from 'react';

interface DisciplineCardProps {
  title: string;
  description: string;
  borderColor: string;
}

const DisciplineCard: React.FC<DisciplineCardProps> = ({ title, description, borderColor }) => {
  return (
    <div className={`p-6 bg-black ${borderColor} border-2 rounded-lg shadow-md transition-transform transform hover:scale-105`}>
      <h4 className="text-xl font-bold text-white">{title}</h4>
      <p className="text-gray-400 mt-2">{description}</p>
    </div>
  );
};

export default DisciplineCard;
