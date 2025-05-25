import React, { useState } from 'react';
import { Search } from 'lucide-react';

const suggestions = [
  'Java',
  'JavaScript',
  'Python',
  'React',
  'Angular',
  'Vue.js',
  'Node.js',
  'TypeScript',
  'C#',
  '.NET'
];

const Autocomplete: React.FC = () => {
  const [query, setQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const filteredSuggestions = suggestions.filter(item =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <div className="flex items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Autocomplete</h1>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="max-w-md relative">
          <div className="relative">
            <input
              type="text"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search technologies..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>

          {showSuggestions && query && (
            <div className="absolute w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
              {filteredSuggestions.length > 0 ? (
                filteredSuggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    className="w-full px-4 py-2 text-left hover:bg-gray-100 focus:outline-none"
                    onClick={() => {
                      setQuery(suggestion);
                      setShowSuggestions(false);
                    }}
                  >
                    {suggestion}
                  </button>
                ))
              ) : (
                <div className="px-4 py-2 text-gray-500">No results found</div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Autocomplete;