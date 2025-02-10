// import React, { useState, useEffect } from 'react';
// import Hero from './components/Hero';
// import Features from './components/Features';
// import Stats from './components/Stats';
// import CTA from './components/CTA';
// import Footer from './components/Footer';
// import { Menu, X, BookOpenCheck, Route as RouteIcon } from 'lucide-react';
// import { Routes, Route ,BrowserRouter } from 'react-router-dom';
// import Dashboard from './pages/Dashboard';
// import { AuthProvider } from './context/AuthContext';

// function App() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Navigation */}
//       <nav className={`fixed w-full z-50 transition-all duration-300 ${
//         isScrolled ? 'bg-blue-950/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
//       }`}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             {/* Logo */}
//             <div className="flex items-center gap-2">
//               <BookOpenCheck className="h-8 w-8 text-amber-400" />
//               <span className="text-xl font-bold text-white">LectureHall</span>
//             </div>

//             {/* Desktop Navigation */}
//             <div className="hidden md:flex items-center gap-8">
//               {['Features', 'Demo', 'Pricing', 'Contact'].map((item) => (
//                 <a
//                   key={item}
//                   href={`#${item.toLowerCase()}`}
//                   className="text-blue-100 hover:text-amber-400 transition-colors"
//                 >
//                   {item}
//                 </a>
//               ))}
//               <button className="bg-amber-400 text-blue-950 px-4 py-2 rounded-md hover:bg-amber-500 transition-colors">
//                 Get Started
//               </button>
//             </div>

//             {/* Mobile Menu Button */}
//             <button
//               className="md:hidden text-white"
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             >
//               {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isMobileMenuOpen && (
//           <div className="md:hidden bg-blue-950">
//             <div className="px-2 pt-2 pb-3 space-y-1">
//               {['Features', 'Demo', 'Pricing', 'Contact'].map((item) => (
//                 <a
//                   key={item}
//                   href={`#${item.toLowerCase()}`}
//                   className="block px-3 py-2 text-blue-100 hover:text-amber-400 transition-colors"
//                   onClick={() => setIsMobileMenuOpen(false)}
//                 >
//                   {item}
//                 </a>
//               ))}
//               <button className="block w-full text-left px-3 py-2 text-amber-400 hover:text-amber-500 transition-colors">
//                 Get Started
//               </button>
//             </div>
//           </div>
//         )}
//       </nav>

//       {/* Main Content */}
//       <main>
//         <Hero />
//         <Features />
//         <Stats />
//         <CTA />
//       </main>
//     </div>
    
//   );
// }

// export default App;

// import React from 'react';
// import SignIn from './auth/Signin';
// import SignUp from './auth/Signup';

// function App() {
//   return (
//     <SignUp></SignUp>
//   );
// }

// export default App;

import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/admin/dashboard";
import UserManagement from "./components/admin/userManagement";
import LectureHallManagement from "./components/admin/lectureHallManagement";
import BookingOversight from "./components/admin/bookingOversight";
import EquipmentTracking from "./components/admin/equipmentTracking";
import AnalyticsReports from "./components/admin/analyticsReports";
import SystemSettings from "./components/admin/systemSettings";

function App() {
  return (
    <Routes>  {/* No need for BrowserRouter here */}
      <Route path="/" element={<Dashboard />} />
      <Route path="/users" element={<UserManagement />} />
      <Route path="/halls" element={<LectureHallManagement />} />
      <Route path="/bookings" element={<BookingOversight />} />
      <Route path="/equipment" element={<EquipmentTracking />} />
      <Route path="/analytics" element={<AnalyticsReports />} />
      <Route path="/settings" element={<SystemSettings />} />
    </Routes>
  );
}

export default App;
  



