import React from 'react';
import { Calendar, Users, BookOpen, Clock } from 'lucide-react';

function StatsCard({ icon: Icon, label, value, trend }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
          <p className="mt-2 text-3xl font-semibold">{value}</p>
        </div>
        <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
          <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
        </div>
      </div>
      {trend !== undefined && (
        <div className="mt-4 flex items-center">
          <span className={`text-sm ${trend >= 0 ? 'text-green-500' : 'text-red-500'}`}>
            {trend >= 0 ? '+' : ''}{trend}%
          </span>
          <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">vs last month</span>
        </div>
      )}
    </div>
  );
}

function UpcomingBooking({ title, date, time, hall, status }) {
  const statusColors = {
    confirmed: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
    pending: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
    canceled: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400',
  };

  return (
    <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg">
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-medium truncate">{title}</h4>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          {date} • {time} • {hall}
        </p>
      </div>
      <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[status]}`}>
        {status}
      </span>
    </div>
  );
}

export default function DashboardHome() {
  const stats = [
    { icon: BookOpen, label: 'Total Bookings', value: '156', trend: 12 },
    { icon: Users, label: 'Active Users', value: '2,845', trend: 8 },
    { icon: Calendar, label: 'Available Halls', value: '24', trend: -3 },
    { icon: Clock, label: 'Hours Booked', value: '892', trend: 15 },
  ];

  const upcomingBookings = [
    {
      title: 'Advanced Mathematics Lecture',
      date: 'Today',
      time: '10:00 AM',
      hall: 'Hall A-101',
      status: 'confirmed',
    },
    {
      title: 'Physics Lab Session',
      date: 'Tomorrow',
      time: '2:30 PM',
      hall: 'Lab B-203',
      status: 'pending',
    },
    {
      title: 'Computer Science Seminar',
      date: 'Mar 15',
      time: '11:00 AM',
      hall: 'Hall C-105',
      status: 'confirmed',
    },
  ];

  return (
    <div className="p-6">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Welcome back, John!</h1>
        <p className="mt-1 text-gray-500 dark:text-gray-400">
          Here's what's happening with your lecture halls today.
        </p>
      </div>

      {/* Quick Actions */}
      <div className="flex gap-4 mb-8">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Book a Lecture Hall
        </button>
        <button className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
          View Today's Schedule
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <StatsCard key={stat.label} {...stat} />
        ))}
      </div>

      {/* Upcoming Bookings */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Upcoming Bookings</h2>
        <div className="space-y-4">
          {upcomingBookings.map((booking, index) => (
            <UpcomingBooking key={index} {...booking} />
          ))}
        </div>
      </div>
    </div>
  );
}