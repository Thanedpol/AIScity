import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { 
  LayoutDashboard, 
  FileText, 
  Image, 
  Hash, 
  Settings,
  PlusCircle
} from 'lucide-react';

const AdminSidebar = () => {
  const { theme } = useTheme();
  
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', href: '/admin' },
    { icon: PlusCircle, label: 'New Article', href: '/admin/new' },
    { icon: FileText, label: 'Articles', href: '/admin/articles' },
    { icon: Image, label: 'Media', href: '/admin/media' },
    { icon: Hash, label: 'Tags', href: '/admin/tags' },
    { icon: Settings, label: 'Settings', href: '/admin/settings' },
  ];
  
  return (
    <aside className={`w-64 min-h-[calc(100vh-4rem)] ${
      theme === 'dark' ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'
    }`}>
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg ${
                    theme === 'dark'
                      ? 'hover:bg-gray-700'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  <Icon size={20} />
                  <span>{item.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default AdminSidebar;