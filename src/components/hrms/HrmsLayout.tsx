"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PowertechLogo } from "@/components/ui/PowertechLogo";
import {
  LayoutDashboard,
  User,
  Clock,
  CalendarCheck,
  CreditCard,
  FileText,
  Award,
  BookOpen,
  HelpCircle,
  Users,
  ShieldAlert,
  LogOut,
  Bell,
  Menu,
  X,
  ChevronDown,
  HardHat,
  MapPin,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import { HrmsEmployee } from "@/data/hrms";

export type HrmsTabKey =
  | "dashboard"
  | "profile"
  | "attendance"
  | "leave"
  | "payroll"
  | "documents"
  | "performance"
  | "policies"
  | "requests"
  | "site-manpower"
  | "admin";

interface HrmsLayoutProps {
  currentTab: HrmsTabKey;
  onSelectTab: (tab: HrmsTabKey) => void;
  user: HrmsEmployee;
  role: "engineer" | "admin";
  onToggleRole: () => void;
  children: React.ReactNode;
}

export const HrmsLayout: React.FC<HrmsLayoutProps> = ({
  currentTab,
  onSelectTab,
  user,
  role,
  onToggleRole,
  children,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const navItems: { key: HrmsTabKey; label: string; icon: React.ComponentType<{ className?: string }>; badge?: string; adminOnly?: boolean }[] = [
    { key: "dashboard", label: "My Dashboard", icon: LayoutDashboard },
    { key: "profile", label: "My Profile", icon: User },
    { key: "attendance", label: "Attendance & Shifts", icon: Clock },
    { key: "leave", label: "Leave Management", icon: CalendarCheck },
    { key: "payroll", label: "Salary & Slips", icon: CreditCard },
    { key: "documents", label: "HR Documents & ID", icon: FileText },
    { key: "performance", label: "Performance & Goals", icon: Award },
    { key: "policies", label: "Company & HSE Policies", icon: BookOpen },
    { key: "requests", label: "Service Requests", icon: HelpCircle, badge: "2 Open" },
    { key: "site-manpower", label: "Site Manpower & Labour", icon: HardHat, badge: "EPC" },
    { key: "admin", label: "HR Admin Desk", icon: ShieldAlert, adminOnly: true, badge: "Admin" },
  ];

  const handleTabClick = (key: HrmsTabKey) => {
    onSelectTab(key);
    setMobileMenuOpen(false);
  };

  return (
    <div className="flex min-h-screen bg-slate-950 font-sans text-slate-100 selection:bg-orange-500 selection:text-white">
      {/* Sidebar - Desktop */}
      <aside className="sticky top-0 hidden h-screen w-72 flex-col border-r border-slate-800/80 bg-slate-900/90 backdrop-blur-xl lg:flex">
        {/* Brand Header */}
        <div className="flex h-20 items-center justify-between border-b border-slate-800 px-6">
          <Link href="/" className="inline-block transition-transform hover:scale-105">
            <PowertechLogo variant="light" height={36} className="h-9 w-auto" />
          </Link>
          <div className="rounded-md border border-orange-500/30 bg-orange-500/10 px-2 py-0.5 text-[10px] font-bold tracking-wider text-orange-400 uppercase">
            HRMS Cloud
          </div>
        </div>

        {/* User Card Widget */}
        <div className="border-b border-slate-800/80 p-4">
          <div className="flex items-center space-x-3 rounded-xl border border-slate-800 bg-slate-950/60 p-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 font-bold text-white shadow-md shadow-orange-500/20">
              {user.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center space-x-1.5">
                <span className="truncate text-xs font-bold text-white">{user.name}</span>
                <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-400" />
              </div>
              <div className="truncate text-[11px] text-slate-400">{user.designation}</div>
              <div className="mt-1 flex items-center text-[10px] text-orange-400">
                <MapPin className="mr-1 h-3 w-3 shrink-0" />
                <span className="truncate">{user.siteAllocation}</span>
              </div>
            </div>
          </div>

          {/* Quick Role Toggle for Demo / Testing */}
          <div className="mt-2.5 flex items-center justify-between rounded-lg border border-slate-800 bg-slate-900/80 px-2.5 py-1.5 text-[11px]">
            <span className="text-slate-400">Role View:</span>
            <button
              onClick={onToggleRole}
              className={`rounded px-2 py-0.5 font-semibold transition ${
                role === "admin"
                  ? "bg-purple-600 text-white shadow-sm"
                  : "bg-orange-500 text-white shadow-sm"
              }`}
            >
              {role === "admin" ? "HR Admin Desk" : "Site Engineer Portal"}
            </button>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4 text-xs">
          <div className="px-3 pb-2 text-[10px] font-bold tracking-wider text-slate-500 uppercase">
            Employee Workspace
          </div>
          {navItems
            .filter((item) => !item.adminOnly || role === "admin")
            .map((item) => {
              const Icon = item.icon;
              const isActive = currentTab === item.key;
              return (
                <button
                  key={item.key}
                  onClick={() => handleTabClick(item.key)}
                  className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left font-medium transition ${
                    isActive
                      ? "border border-orange-500/30 bg-gradient-to-r from-orange-500/20 to-orange-500/5 text-orange-400 shadow-sm"
                      : "text-slate-400 hover:bg-slate-800/60 hover:text-slate-200"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <Icon className={`h-4 w-4 ${isActive ? "text-orange-400" : "text-slate-400"}`} />
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span
                      className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                        item.badge === "Admin"
                          ? "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                          : item.badge === "EPC"
                          ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                          : "bg-orange-500/20 text-orange-300 border border-orange-500/30"
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
        </nav>

        {/* Bottom Utility Bar */}
        <div className="border-t border-slate-800/80 p-4">
          <div className="space-y-2">
            <Link
              href="/"
              target="_blank"
              className="flex w-full items-center justify-between rounded-lg border border-slate-800 bg-slate-950/40 px-3 py-2 text-xs text-slate-400 transition hover:bg-slate-800/60 hover:text-white"
            >
              <span className="flex items-center space-x-2">
                <span>Public Corporate Site</span>
              </span>
              <ExternalLink className="h-3.5 w-3.5 text-slate-500" />
            </Link>
            <Link
              href="/login"
              className="flex w-full items-center justify-center space-x-2 rounded-lg border border-rose-500/20 bg-rose-950/20 px-3 py-2 text-xs font-semibold text-rose-300 transition hover:bg-rose-900/40"
            >
              <LogOut className="h-3.5 w-3.5" />
              <span>Secure Logout</span>
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex flex-1 flex-col overflow-x-hidden">
        {/* Top Header */}
        <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-slate-800/80 bg-slate-950/80 px-4 backdrop-blur-xl sm:px-8">
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="rounded-lg border border-slate-800 p-2 text-slate-400 hover:bg-slate-800 lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-lg font-bold text-white sm:text-xl">
                  {navItems.find((n) => n.key === currentTab)?.label || "HRMS Portal"}
                </h1>
                <span className="hidden rounded-full border border-slate-700 bg-slate-800/60 px-2 py-0.5 text-[10px] font-semibold text-slate-300 sm:inline">
                  {user.id}
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Powertech Engineers &bull; Turnkey Electrical Infrastructure &bull; Site Operations
              </p>
            </div>
          </div>

          {/* Right Header Badges */}
          <div className="flex items-center space-x-3">
            {/* Geotag Indicator */}
            <div className="hidden items-center space-x-2 rounded-xl border border-emerald-500/30 bg-emerald-950/30 px-3 py-1.5 text-xs text-emerald-300 md:flex">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              <span>Site Geotag Active: Ayodhya 220kV</span>
            </div>

            {/* Notifications Bell */}
            <div className="relative">
              <button
                onClick={() => setNotificationsOpen(!notificationsOpen)}
                className="relative rounded-xl border border-slate-800 bg-slate-900/80 p-2.5 text-slate-300 transition hover:border-slate-700 hover:text-white"
              >
                <Bell className="h-4 w-4" />
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-orange-500 text-[9px] font-bold text-white">
                  3
                </span>
              </button>

              {/* Notification Dropdown */}
              {notificationsOpen && (
                <div className="absolute right-0 mt-2 w-80 rounded-2xl border border-slate-700 bg-slate-900 p-4 shadow-2xl backdrop-blur-xl">
                  <div className="mb-3 flex items-center justify-between border-b border-slate-800 pb-2">
                    <span className="text-xs font-bold text-white">Site & HR Alerts (3)</span>
                    <button
                      onClick={() => setNotificationsOpen(false)}
                      className="text-[11px] text-slate-400 hover:text-white"
                    >
                      Close
                    </button>
                  </div>
                  <div className="space-y-2.5 text-xs">
                    <div className="rounded-lg border border-orange-500/20 bg-orange-950/20 p-2.5 text-slate-300">
                      <div className="font-semibold text-orange-300">Live Switchyard Advisory</div>
                      <div className="text-[11px] text-slate-400">
                        Mandatory grounding audit scheduled for Ayodhya 220kV Bay-4 plinths.
                      </div>
                    </div>
                    <div className="rounded-lg border border-emerald-500/20 bg-emerald-950/20 p-2.5 text-slate-300">
                      <div className="font-semibold text-emerald-300">August 2026 Payslip Available</div>
                      <div className="text-[11px] text-slate-400">
                        Net ₹86,260 disbursed to your Punjab National Bank account.
                      </div>
                    </div>
                    <div className="rounded-lg border border-blue-500/20 bg-blue-950/20 p-2.5 text-slate-300">
                      <div className="font-semibold text-blue-300">Leave Application Approved</div>
                      <div className="text-[11px] text-slate-400">
                        Site comp-off request for 72-hr charging trial approved by Project Director.
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Profile Pill */}
            <button
              onClick={() => onSelectTab("profile")}
              className="flex items-center space-x-2 rounded-xl border border-slate-800 bg-slate-900/80 p-1.5 pr-3 transition hover:border-slate-700"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500 font-bold text-white">
                {user.name[0]}
              </div>
              <div className="hidden text-left sm:block">
                <div className="text-xs font-bold text-white">{user.name.split(" ")[0]}</div>
                <div className="text-[10px] text-slate-400">{role === "admin" ? "HR Admin" : "Site Eng."}</div>
              </div>
              <ChevronDown className="h-3 w-3 text-slate-400" />
            </button>
          </div>
        </header>

        {/* Content Body */}
        <main className="flex-1 p-4 sm:p-8">{children}</main>

        {/* Footer Note */}
        <footer className="border-t border-slate-800/60 bg-slate-950/40 px-6 py-4 text-center text-xs text-slate-500">
          Powertech Engineers Enterprise HRMS &bull; Corporate Intranet Layer &bull; 256-Bit SSL Encrypted &bull; ISO 9001:2015 Compliant
        </footer>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex bg-black/80 backdrop-blur-md lg:hidden">
          <div className="relative flex h-full w-80 flex-col bg-slate-900 p-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <PowertechLogo variant="light" height={32} className="h-8 w-auto" />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="my-4 border-b border-slate-800 pb-4">
              <div className="text-sm font-bold text-white">{user.name}</div>
              <div className="text-xs text-orange-400">{user.designation}</div>
              <div className="mt-1 text-[11px] text-slate-400">{user.siteAllocation}</div>
              <button
                onClick={onToggleRole}
                className="mt-3 w-full rounded-lg bg-slate-800 py-1.5 text-xs font-semibold text-orange-400"
              >
                Switch to {role === "admin" ? "Site Engineer" : "HR Admin"} View
              </button>
            </div>

            <nav className="flex-1 space-y-1 overflow-y-auto">
              {navItems
                .filter((item) => !item.adminOnly || role === "admin")
                .map((item) => {
                  const Icon = item.icon;
                  const isActive = currentTab === item.key;
                  return (
                    <button
                      key={item.key}
                      onClick={() => handleTabClick(item.key)}
                      className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-xs font-medium ${
                        isActive
                          ? "bg-orange-500 text-white font-bold"
                          : "text-slate-300 hover:bg-slate-800"
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <Icon className="h-4 w-4" />
                        <span>{item.label}</span>
                      </div>
                      {item.badge && (
                        <span className="rounded-full bg-white/20 px-2 py-0.5 text-[9px]">
                          {item.badge}
                        </span>
                      )}
                    </button>
                  );
                })}
            </nav>

            <div className="border-t border-slate-800 pt-4 space-y-2">
              <Link
                href="/"
                className="block text-center text-xs text-slate-400 hover:text-white"
              >
                Return to Public Website &rarr;
              </Link>
              <Link
                href="/login"
                className="block rounded-lg bg-rose-900/40 py-2 text-center text-xs font-bold text-rose-300"
              >
                Logout
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
