import React, { useState } from 'react';
import Sidebar from '../components/dashboard/SideBar.jsx';
import TopBar from '../components/dashboard/TopBar';
import DashboardHome from '../components/dashboard/DashboardHome';
import { useAuth } from '../context/AuthContext';

export default function Dashboard() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <div className="flex">
        <Sidebar
          isCollapsed={isCollapsed}
          toggleSidebar={() => setIsCollapsed(!isCollapsed)}
        />
        
        <div className={`flex-1 transition-all duration-300 ${
          isCollapsed ? 'ml-20' : 'ml-64'
        }`}>
          <TopBar
            isDarkMode={isDarkMode}
            toggleDarkMode={() => setIsDarkMode(!isDarkMode)}
          />
          <main className="bg-gray-50 dark:bg-gray-900 min-h-[calc(100vh-4rem)]">
            <DashboardHome />
          </main>
        </div>
      </div>
    </div>
  );
}