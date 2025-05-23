"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  Home,
  Activity,
  ClipboardList,
  Users,
  Bell,
  Settings,
  BarChart2,
  HelpCircle,
  Sun,
  Moon,
  ChevronRight,
  LogOut,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function AppSidebar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  const mainMenuItems = [
    { title: "Home", icon: Home, href: "/dashboard", notifications: 0 },
    { title: "Activity", icon: Activity, href: "/activity", notifications: 18 },
    { title: "Tasks", icon: ClipboardList, href: "/tasks", notifications: 0 },
    { title: "Users", icon: Users, href: "/users", notifications: 0 },
    {
      title: "Notifications",
      icon: Bell,
      href: "/notifications",
      notifications: 21,
    },
    { title: "Settings", icon: Settings, href: "/settings", notifications: 0 },
    { title: "Reports", icon: BarChart2, href: "/reports", notifications: 0 },
    { title: "Support", icon: HelpCircle, href: "/support", notifications: 0 },
  ]

  const groups = [
    { name: "Kretya Studio", color: "bg-purple-500" },
    { name: "Design System", color: "bg-blue-500" },
    { name: "Campus BIU", color: "bg-orange-500" },
  ]

  return (
    <div
      className={cn(
        "flex flex-col h-full transition-all duration-300 ease-in-out",
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900",
        mobileMenuOpen ? "w-64" : "w-16",
      )}
    >
      {/* Search Bar and Toggle Button */}
      <div className="p-4 flex items-center justify-between">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={cn(
            "rounded-lg",
            isDarkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900",
          )}
          aria-label={mobileMenuOpen ? "Close sidebar" : "Open sidebar"}
        >
          {mobileMenuOpen ? <ChevronRight className="h-5 w-5" /> : <ChevronRight className="h-5 w-5 rotate-180" />}
        </Button>

        {mobileMenuOpen && (
          <div className="relative flex-1 ml-3">
            <input
              type="text"
              placeholder="Search..."
              className={cn(
                "w-full pl-4 pr-10 py-2 rounded-lg",
                isDarkMode
                  ? "bg-gray-800 text-white placeholder-gray-400 border-gray-700"
                  : "bg-gray-100 text-gray-900 placeholder-gray-500 border-gray-200",
                "border focus:outline-none focus:ring-2 focus:ring-indigo-500",
              )}
            />
          </div>
        )}
      </div>

     
      <div className="flex-1 px-3 py-2 space-y-1">
        <div className="mb-4">
          {mobileMenuOpen && (
            <p
              className={cn(
                "px-3 text-xs font-semibold uppercase tracking-wider mb-2",
                isDarkMode ? "text-gray-400" : "text-gray-500",
              )}
            >
              Menu
            </p>
          )}
          {mainMenuItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className={cn(
                "flex items-center justify-between px-3 py-2 rounded-lg mb-1 group transition-colors",
                pathname === item.href
                  ? isDarkMode
                    ? "bg-gray-800 text-white"
                    : "bg-indigo-50 text-indigo-600"
                  : isDarkMode
                    ? "text-gray-300 hover:bg-gray-800"
                    : "text-gray-700 hover:bg-gray-100",
              )}
            >
              <div className="flex items-center">
                <item.icon
                  className={cn(
                    "h-5 w-5 mr-3",
                    pathname === item.href
                      ? "text-indigo-600"
                      : isDarkMode
                        ? "text-gray-400 group-hover:text-white"
                        : "text-gray-500 group-hover:text-indigo-600",
                  )}
                />
                {mobileMenuOpen && <span>{item.title}</span>}
              </div>
              {mobileMenuOpen && item.notifications > 0 && (
                <span className={cn("px-2 py-1 text-xs rounded-full", isDarkMode ? "bg-gray-700" : "bg-gray-200")}>
                  {item.notifications}
                </span>
              )}
            </Link>
          ))}
        </div>

        {/* Groups */}
        <div className="mb-4">
          {mobileMenuOpen && (
            <p
              className={cn(
                "px-3 text-xs font-semibold uppercase tracking-wider mb-2",
                isDarkMode ? "text-gray-400" : "text-gray-500",
              )}
            >
              Groups
            </p>
          )}
          {groups.map((group) => (
            <Link
              key={group.name}
              href="#"
              className={cn(
                "flex items-center justify-between px-3 py-2 rounded-lg mb-1 group transition-colors",
                isDarkMode ? "text-gray-300 hover:bg-gray-800" : "text-gray-700 hover:bg-gray-100",
              )}
            >
              <div className="flex items-center">
                <div className={cn("w-2 h-2 rounded-full mr-3", group.color)} />
                {mobileMenuOpen && <span>{group.name}</span>}
              </div>
              {mobileMenuOpen && (
                <ChevronRight className={cn("h-4 w-4", isDarkMode ? "text-gray-600" : "text-gray-400")} />
              )}
            </Link>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className={cn("p-4 border-t", isDarkMode ? "border-gray-800" : "border-gray-200")}>
        <div className="flex items-center justify-between mb-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={cn(
              "rounded-lg",
              isDarkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900",
            )}
          >
            {isDarkMode ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </Button>

          {mobileMenuOpen && (
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "rounded-lg",
                isDarkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900",
              )}
            >
              <LogOut className="h-5 w-5" />
            </Button>
          )}
        </div>

        {!mobileMenuOpen && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setMobileMenuOpen(true)}
            className={cn(
              "w-full mt-2 flex justify-center",
              isDarkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900",
            )}
          >
            <ChevronRight className="h-5 w-5 rotate-180" />
          </Button>
        )}
      </div>
    </div>
  )
}
