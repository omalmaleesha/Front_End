import {
    HomeIcon,
    UsersIcon,
    AcademicCapIcon,
    CalendarIcon,
    ComputerDesktopIcon,
    ChartBarIcon,
    CogIcon,
  } from "@heroicons/react/24/outline"
  
  const Sidebar = () => {
    const navItems = [
      { name: "Dashboard", icon: HomeIcon, href: "#" },
      { name: "User Management", icon: UsersIcon, href: "#" },
      { name: "Lecture Halls", icon: AcademicCapIcon, href: "#" },
      { name: "Bookings", icon: CalendarIcon, href: "#" },
      { name: "Equipment", icon: ComputerDesktopIcon, href: "#" },
      { name: "Analytics", icon: ChartBarIcon, href: "#" },
      { name: "Settings", icon: CogIcon, href: "#" },
    ]
  
    return (
      <div className="flex flex-col w-64 bg-gray-800">
        <div className="flex items-center justify-center h-20 shadow-md">
          <h1 className="text-3xl font-bold text-white">LHM Admin</h1>
        </div>
        <ul className="flex flex-col py-4">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-300 hover:text-white"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                  <item.icon className="h-6 w-6" />
                </span>
                <span className="text-sm font-medium">{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    )
  }
  
  export default Sidebar
  
  