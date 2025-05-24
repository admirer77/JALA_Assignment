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
  MoreHorizontal,
  Layers,
  List,
  Type,
  Columns,
  Image,
  Sliders,
  HelpCircle,
  MessageSquare,
  Link as LinkIcon,
  Palette,
  Monitor
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
        <div className="flex flex-col h-screen">
          <UserProfile />
          
          <nav className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
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
              defaultOpen={location.pathname.includes('/more')}
            >
              <SidebarItem 
                to="/more/multiple-tabs" 
                icon={<Layers size={18} />} 
                label="Multiple Tabs" 
                active={isActive('/more/multiple-tabs')}
                onClick={() => setMobileMenuOpen(false)}
              />
              <SidebarItem 
                to="/more/menu" 
                icon={<List size={18} />} 
                label="Menu" 
                active={isActive('/more/menu')}
                onClick={() => setMobileMenuOpen(false)}
              />
              <SidebarItem 
                to="/more/autocomplete" 
                icon={<Type size={18} />} 
                label="Autocomplete" 
                active={isActive('/more/autocomplete')}
                onClick={() => setMobileMenuOpen(false)}
              />
              <SidebarItem 
                to="/more/collapsible" 
                icon={<Columns size={18} />} 
                label="Collapsible Content" 
                active={isActive('/more/collapsible')}
                onClick={() => setMobileMenuOpen(false)}
              />
              <SidebarItem 
                to="/more/images" 
                icon={<Image size={18} />} 
                label="Images" 
                active={isActive('/more/images')}
                onClick={() => setMobileMenuOpen(false)}
              />
              <SidebarItem 
                to="/more/slider" 
                icon={<Sliders size={18} />} 
                label="Slider" 
                active={isActive('/more/slider')}
                onClick={() => setMobileMenuOpen(false)}
              />
              <SidebarItem 
                to="/more/tooltips" 
                icon={<HelpCircle size={18} />} 
                label="Tooltips" 
                active={isActive('/more/tooltips')}
                onClick={() => setMobileMenuOpen(false)}
              />
              <SidebarItem 
                to="/more/popups" 
                icon={<MessageSquare size={18} />} 
                label="Popups" 
                active={isActive('/more/popups')}
                onClick={() => setMobileMenuOpen(false)}
              />
              <SidebarItem 
                to="/more/links" 
                icon={<LinkIcon size={18} />} 
                label="Links" 
                active={isActive('/more/links')}
                onClick={() => setMobileMenuOpen(false)}
              />
              <SidebarItem 
                to="/more/css-properties" 
                icon={<Palette size={18} />} 
                label="CSS Properties" 
                active={isActive('/more/css-properties')}
                onClick={() => setMobileMenuOpen(false)}
              />
              <SidebarItem 
                to="/more/iframes" 
                icon={<Monitor size={18} />} 
                label="iFrames" 
                active={isActive('/more/iframes')}
                onClick={() => setMobileMenuOpen(false)}
              />
            </SidebarGroup>
            
            <SidebarGroup 
              icon={<Settings />} 
              label="Settings"
            >
              {/* Settings items */}
            </SidebarGroup>
          </nav>
        </div>
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