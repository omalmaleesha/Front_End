import React from 'react';
import { 
  LayoutDashboard, 
  CalendarDays, 
  BookOpen, 
  Box, 
  BarChart3, 
  Settings, 
  ChevronLeft,
  LogOut
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export default function Sidebar({ isCollapsed, toggleSidebar }) {
  const { user, role } = useAuth();

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
    { icon: BookOpen, label: 'Bookings', href: '/dashboard/bookings' },
    { icon: CalendarDays, label: 'Calendar', href: '/dashboard/calendar' },
    { icon: Box, label: 'Equipment', href: '/dashboard/equipment' },
    ...(role === 'admin' ? [{ icon: BarChart3, label: 'Analytics', href: '/dashboard/analytics' }] : []),
    { icon: Settings, label: 'Settings', href: '/dashboard/settings' },
  ];

  return (
    <aside className={`
      fixed left-0 top-0 h-full bg-blue-950 text-white transition-all duration-300
      ${isCollapsed ? 'w-20' : 'w-64'}
    `}>
      {/* Logo */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-blue-900">
        {!isCollapsed && <span className="text-xl font-bold">LectureHall</span>}
        <button 
          onClick={toggleSidebar}
          className="p-2 rounded-lg hover:bg-blue-900 transition-colors"
        >
          <ChevronLeft className={`h-5 w-5 transition-transform ${isCollapsed ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {/* User Profile */}
      <div className="p-4 border-b border-blue-900">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-amber-400 flex items-center justify-center">
            <span className="text-blue-950 font-semibold">
              {user?.name?.charAt(0).toUpperCase()}
            </span>
          </div>
          {!isCollapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{user?.name}</p>
              <p className="text-xs text-blue-300 capitalize">{role}</p>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-900 transition-colors"
              >
                <item.icon className="h-5 w-5 text-amber-400" />
                {!isCollapsed && <span>{item.label}</span>}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Logout */}
      <div className="absolute bottom-4 left-0 right-0 px-4">
        <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-blue-900 transition-colors text-red-400">
          <LogOut className="h-5 w-5" />
          {!isCollapsed && <span>Logout</span>}
        </button>
      </div>
    </aside>
  );
}
