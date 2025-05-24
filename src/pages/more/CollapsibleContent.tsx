import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface CollapsibleProps {
  title: string;
  children: React.ReactNode;
}

const Collapsible: React.FC<CollapsibleProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded-lg mb-4">
      <button
        className="w-full flex items-center justify-between p-4 bg-blue-500 text-white hover:bg-blue-600 transition-colors rounded-t-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      {isOpen && (
        <div className="p-4 bg-white">
          {children}
        </div>
      )}
    </div>
  );
};

const CollapsibleContent: React.FC = () => {
  return (
    <div>
      <div className="flex items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Collapsible Content</h1>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Multiple Collapse</h2>
          
          <Collapsible title="Know your goals and Prioritize Wisely">
            <p>
              Setting clear goals and prioritizing tasks effectively is crucial for success. 
              Break down large goals into smaller, manageable tasks and focus on what's most important.
            </p>
          </Collapsible>

          <Collapsible title="Be focused and Eliminate Distractions">
            <p>
              Maintain focus by creating a distraction-free environment. Turn off notifications, 
              find a quiet space to work, and use time-blocking techniques to stay productive.
            </p>
          </Collapsible>

          <Collapsible title="Chose the right mentor to Succeed in career">
            <p>
              A good mentor can provide valuable guidance, share industry insights, and help you 
              navigate your career path. Look for someone experienced in your field who aligns with your goals.
            </p>
          </Collapsible>
        </div>
      </div>
    </div>
  );
};

export default CollapsibleContent;