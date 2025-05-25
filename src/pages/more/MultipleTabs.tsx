import React, { useState } from 'react';
import { cn } from '../../utils/cn';

const tabs = [
  {
    id: 'plan',
    label: 'Plan to Succeed',
    content: `Congratulations, You are in the best place to learn the technologies for JOB. Please strictly follow the plan for the first 45 days to see the unbelievable results.`
  },
  {
    id: 'unlearning',
    label: 'UnLearning',
    content: `You must UNLEARN to LEARN new things every day as technologies are changing faster than ever and Because the old rules will no longer apply...and so your old knowledge is. It's time for us to think beyond.`
  },
  {
    id: 'ways',
    label: 'Ways of UnLearning',
    content: `It's not just learning technologies, Also You learn how to use your knowledge and experience to get a job in less than 100 days.`
  }
];

const MultipleTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('plan');

  return (
    <div>
      <div className="flex items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Multiple Tabs</h1>
      </div>

      <div className="bg-white rounded-lg shadow-md">
        <div className="border-b border-gray-200">
          <div className="flex">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  'px-4 py-2 text-sm font-medium border-b-2 focus:outline-none',
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        <div className="p-6">
          {tabs.find(tab => tab.id === activeTab)?.content}
        </div>
      </div>
    </div>
  );
};

export default MultipleTabs;