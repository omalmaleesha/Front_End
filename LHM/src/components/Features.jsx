import React from 'react';
import { Clock, Calendar, Box, BarChart3 } from 'lucide-react';

const features = [
  {
    title: 'Real-Time Availability Check',
    description: 'Instantly view and book available lecture halls with live status updates.',
    icon: Clock,
  },
  {
    title: 'Automated Scheduling System',
    description: 'Smart algorithms optimize hall allocation based on capacity and requirements.',
    icon: Calendar,
  },
  {
    title: 'Equipment Inventory Tracking',
    description: 'Monitor and manage all educational equipment and resources efficiently.',
    icon: Box,
  },
  {
    title: 'Analytics Dashboard',
    description: 'Comprehensive insights into space utilization and booking patterns.',
    icon: BarChart3,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Powerful Features for Modern Education
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Everything you need to manage your lecture halls efficiently
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="relative group"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-900 to-amber-400 rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
              <div className="relative p-6 bg-white rounded-lg shadow-sm ring-1 ring-gray-900/5 hover:shadow-lg transform hover:scale-105 transition duration-300">
                <div className="inline-flex p-3 rounded-lg bg-blue-950 text-amber-400 mb-5">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}