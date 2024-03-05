import React from 'react';

import Link from 'next/link';

type CardProps = {
  title: string;
  description: string;
  IconComponent: React.ElementType; // Using React.ElementType to accept a React component
};

const FeatureCard: React.FC<CardProps> = ({
  title,
  description,
  IconComponent,
}) => {
  return (
    <div className="max-w-sm p-4 bg-white border border-gray-200 cursor-pointer rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-900">
      <IconComponent className="w-12 h-12 text-gray-400 dark:text-gray-500 mb-2" />
      <Link href="#">
        <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
      </Link>
      <p className="font-normal text-gray-500 dark:text-gray-400 line-clamp-2 text-sm">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
