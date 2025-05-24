import React from 'react';
import { LogOut } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const { logout, isLoading } = useAuthStore();

  return (
    <header className="bg-blue-500 text-white px-4 py-3 flex justify-between items-center">
      <h1 className="text-xl font-bold">Magnus</h1>
      <Button
        variant="link"
        className="text-white flex items-center"
        onClick={logout}
        isLoading={isLoading}
      >
        <LogOut size={18} className="mr-1" />
        Logout
      </Button>
    </header>
  );
};

export default Header;