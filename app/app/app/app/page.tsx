"use client";

import { Menu } from "lucide-react";
import { useState } from "react";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between border-b px-4 py-3 bg-white dark:bg-gray-800">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">Key Race Cluster</h1>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      <div className="flex">
        {/* Sidebar (desktop) */}
        <div className="hidden md:block w-64 bg-white dark:bg-gray-800 border-r min-h-screen p-4">
          <h1 className="text-2xl font-bold mb-8">Key Race Cluster</h1>
          <nav className="space-y-2">
            <a href="#" className="block px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700">Dashboard</a>
            <a href="#" className="block px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">Races</a>
            <a href="#" className="block px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">Horses</a>
            <a href="#" className="block px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">Clusters</a>
            <a href="#" className="block px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">Watchlist</a>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          <h2 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">Dashboard</h2>
          
          <div className="dashboard-grid">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm">
              <h3 className="font-medium text-gray-500 dark:text-gray-400">Active Clusters</h3>
              <p className="text-5xl font-bold text-emerald-600 mt-2">12</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm">
              <h3 className="font-medium text-gray-500 dark:text-gray-400">Strongest Cluster</h3>
              <p className="text-5xl font-bold text-amber-600 mt-2">87</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm">
              <h3 className="font-medium text-gray-500 dark:text-gray-400">Horses to Watch</h3>
              <p className="text-5xl font-bold text-blue-600 mt-2">8</p>
            </div>
          </div>

          <p className="mt-12 text-gray-500 dark:text-gray-400 text-center">
            This is the starting dashboard.<br />
            Next we’ll add real tables, auth, and your full racing logic.
          </p>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 md:hidden z-50" onClick={() => setSidebarOpen(false)}>
          <div className="bg-white dark:bg-gray-800 w-64 h-full p-4" onClick={e => e.stopImmediatePropagation()}>
            <h1 className="text-2xl font-bold mb-8">Key Race Cluster</h1>
            <nav className="space-y-2">
              <a href="#" className="block px-4 py-3 rounded-lg bg-gray-100">Dashboard</a>
              <a href="#" className="block px-4 py-3 rounded-lg hover:bg-gray-100">Races</a>
              <a href="#" className="block px-4 py-3 rounded-lg hover:bg-gray-100">Horses</a>
              <a href="#" className="block px-4 py-3 rounded-lg hover:bg-gray-100">Clusters</a>
              <a href="#" className="block px-4 py-3 rounded-lg hover:bg-gray-100">Watchlist</a>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
