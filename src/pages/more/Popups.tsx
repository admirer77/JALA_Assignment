import React, { useState } from 'react';
import Button from '../../components/ui/Button';

const Popups: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [popupContent, setPopupContent] = useState('');

  const showPopup = (content: string) => {
    setPopupContent(content);
    setIsOpen(true);
  };

  const showAlert = (message: string) => {
    alert(message);
  };

  const showConfirm = (message: string) => {
    if (confirm(message)) {
      alert('You clicked OK!');
    } else {
      alert('You clicked Cancel!');
    }
  };

  const showPrompt = () => {
    const result = prompt('Please enter your name:');
    if (result) {
      alert(`Hello, ${result}!`);
    }
  };

  return (
    <div>
      <div className="flex items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Popups</h1>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="grid grid-cols-3 gap-4">
          <Button onClick={() => showPopup('Popup One Content')}>
            Popup One
          </Button>
          <Button onClick={() => showPopup('Popup Two Content')}>
            Popup Two
          </Button>
          <Button onClick={() => showPopup('Popup Three Content')}>
            Popup Three
          </Button>

          <Button onClick={() => window.open('/popup-content', '_blank')}>
            Popup Duplicate
          </Button>
          <Button onClick={() => window.open('/popup-content', 'newTab')}>
            Duplicate Tab
          </Button>
          <Button onClick={() => window.open('/popup-content', 'popup')}>
            In Window Popup
          </Button>

          <Button onClick={() => showAlert('This is an alert box!')}>
            Alert Box
          </Button>
          <Button onClick={() => showConfirm('Are you sure?')}>
            Confirm Box
          </Button>
          <Button onClick={showPrompt}>
            Prompt Box
          </Button>
        </div>
      </div>

      {/* Modal Popup */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">Popup</h2>
            <p>{popupContent}</p>
            <Button 
              className="mt-4"
              onClick={() => setIsOpen(false)}
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popups;