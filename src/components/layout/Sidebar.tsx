import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  Users, 
  ChevronDown, 
  ChevronRight,
  Settings,
  Search,
  PlusCircle,
  Menu,
  MoreHorizontal
} from 'lucide-react';
import { useAuthStore } from '../../store/authStore';

interface SidebarItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ 
  to, 
  icon, 
  label, 
  active = false,
  onClick
}) => {
  return (
    <Link 
      to={to} 
      className={`flex items-center px-4 py-3 hover:bg-gray-700 transition-colors ${
        active ? 'bg-gray-700' : ''
      }`}
      onClick={onClick}
    >
      <div className="w-6 h-6 mr-3 text-gray-400">{icon}</div>
      <span className="text-gray-300">{label}</span>
    </Link>
  );
};

interface SidebarGroupProps {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const SidebarGroup: React.FC<SidebarGroupProps> = ({ 
  icon, 
  label, 
  children,
  defaultOpen = false
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  
  return (
    <div>
      <button 
        className="flex items-center w-full px-4 py-3 hover:bg-gray-700 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="w-6 h-6 mr-3 text-gray-400">{icon}</div>
        <span className="text-gray-300 flex-1 text-left">{label}</span>
        <div className="text-gray-400">
          {isOpen ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
        </div>
      </button>
      {isOpen && (
        <div className="pl-4">
          {children}
        </div>
      )}
    </div>
  );
};

const UserProfile: React.FC = () => {
  const user = useAuthStore((state) => state.user);

  return (
    <div className="p-4 border-b border-gray-700">
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center text-white">
          {user?.email?.charAt(0).toUpperCase()}
        </div>
        <div className="ml-3">
          <h3 className="text-white font-medium">Guest User</h3>
          <p className="text-sm text-gray-400">User</p>
        </div>
      </div>
    </div>
  );
};

const Sidebar: React.FC = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <>
      {/* Mobile menu button */}
      <button 
        className="md:hidden fixed top-4 left-4 z-50 bg-gray-800 text-white p-2 rounded"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <Menu size={24} />
      </button>
      
      {/* Sidebar */}
      <div 
        className={`bg-gray-800 w-64 min-h-screen fixed top-0 left-0 z-40 transition-transform transform ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <UserProfile />
        
        <nav className="mt-4">
          <SidebarItem 
            to="/home" 
            icon={<Home />} 
            label="Home" 
            active={isActive('/home')}
            onClick={() => setMobileMenuOpen(false)}
          />
          
          <SidebarGroup 
            icon={<Users />} 
            label="Employee" 
            defaultOpen={location.pathname.includes('/employee')}
          >
            <SidebarItem 
              to="/employee/create" 
              icon={<PlusCircle size={18} />} 
              label="Create" 
              active={isActive('/employee/create')}
              onClick={() => setMobileMenuOpen(false)}
            />
            <SidebarItem 
              to="/employee/search" 
              icon={<Search size={18} />} 
              label="Search" 
              active={isActive('/employee/search')}
              onClick={() => setMobileMenuOpen(false)}
            />
          </SidebarGroup>
          
          <SidebarGroup 
            icon={<MoreHorizontal />} 
            label="More"
          >
            {/* Add more items as needed */}
          </SidebarGroup>
          
          <SidebarGroup 
            icon={<Settings />} 
            label="Settings"
          >
            {/* Settings items */}
          </SidebarGroup>
        </nav>
      </div>
      
      {/* Overlay for mobile */}
      {mobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;