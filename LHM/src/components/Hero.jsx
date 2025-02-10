import React from 'react';
import { BookOpenCheck, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-950 to-blue-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnptMCAwIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMiIvPjwvZz48L3N2Zz4=')]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
        <div className="mx-auto max-w-3xl">
          {/* Logo */}
          <div className="flex justify-center items-center mb-8">
            <BookOpenCheck className="h-12 w-12 text-amber-400" />
          </div>

          {/* Animated Headline */}
          <h1 className="animate-fade-in text-4xl font-bold tracking-tight sm:text-6xl mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-amber-400">
              Smart Lecture Hall Management
            </span>
            <br />
            Made Simple
          </h1>

          <p className="mt-6 text-lg leading-8 text-blue-100">
            Optimize space utilization, bookings, and resource allocation with our intelligent management system designed for modern educational institutions.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a href="#demo" className="rounded-md bg-amber-400 px-6 py-3 text-sm font-semibold text-blue-900 shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400 transition-all duration-200 flex items-center gap-2">
              Schedule Demo <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#features" className="rounded-md px-6 py-3 text-sm font-semibold text-blue-100 ring-1 ring-blue-100/20 hover:ring-blue-100/40 transition-all duration-200">
              Get Started
            </a>
          </div>
        </div>

        {/* 3D Illustration */}
        <div className="mt-16 relative">
          <img
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
            alt="Modern Lecture Hall"
            className="mx-auto rounded-xl shadow-2xl transform perspective-1000 rotate-x-2 hover:rotate-x-0 transition-transform duration-500 max-w-4xl w-full"
          />
          <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-blue-950/50 to-transparent"></div>
        </div>
      </div>
    </div>
  );
}