'use client';

import React from 'react';
import { useTheme } from 'next-themes';
import {
  PhoneCall,
  Sparkles,
  Layers,
  MessageSquare,
  Activity,
  Calculator,
  Download,
  Terminal,
  Shield,
  Sun,
  Moon,
  Zap,
  ChevronDown,
  Search,
  SlidersHorizontal,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenChaosModal: () => void;
  onOpenGovernanceDrawer: () => void;
  onOpenLogsDrawer: () => void;
  onOpenCommandMenu: () => void;
}

export function Header({
  activeSection,
  onNavigate,
  onOpenChaosModal,
  onOpenGovernanceDrawer,
  onOpenLogsDrawer,
  onOpenCommandMenu,
}: HeaderProps) {
  const { theme, setTheme } = useTheme();

  // Primary navigation anchors (clean unboxed tabs, zero wrapping)
  const primaryNavItems = [
    { id: 'calls', label: 'Call Trace', icon: PhoneCall },
    { id: 'voice-tuning', label: 'Agent Tuning', icon: Sparkles },
    { id: 'make-scenarios', label: 'Make Workflows', icon: Layers },
    { id: 'wappi-gateway', label: 'WhatsApp Hub', icon: MessageSquare },
  ];

  // Secondary navigation anchors in sleek "More" dropdown
  const secondaryNavItems = [
    { id: 'metrics', label: 'System KPIs & Telemetry', icon: Activity, desc: '99.94% Uptime across Twilio, Retell, Make, Wappi' },
    { id: 'roi', label: 'Telephony Cost & ROI', icon: Calculator, desc: 'Missed call recovery vs £38/mo run cost' },
    { id: 'blueprints', label: 'Make & Retell Blueprints', icon: Download, desc: 'Production importable scenario JSON' },
    { id: 'briefing', label: 'Executive Briefing', icon: Zap, desc: 'Telephony stack architecture & evaluation' },
  ];

  // Check if current active section is inside secondary items
  const isSecondaryActive = secondaryNavItems.some((item) => item.id === activeSection);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[var(--color-border)] bg-[var(--color-surface)]/95 backdrop-blur-md shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left Cluster: Brand Anchor + Hairline Divider + Integrated Primary Nav */}
        <div className="flex items-center gap-3 xl:gap-4 shrink-0 min-w-0">
          {/* Brand Logo Lockup */}
          <button
            onClick={() => onNavigate('briefing')}
            className="flex items-center gap-2 group text-left shrink-0 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 rounded-lg"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-violet-700 text-white shadow-xs group-hover:scale-105 transition-transform shrink-0">
              <PhoneCall className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-1.5 shrink-0">
              <span className="font-bold text-sm tracking-tight text-[var(--color-text-primary)]">
                CallGuard <span className="text-indigo-600 dark:text-indigo-400 font-extrabold">AI</span>
              </span>
              <span className="inline-flex items-center rounded-md bg-indigo-500/10 px-1.5 py-0.5 text-[10px] font-mono font-semibold text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 whitespace-nowrap shrink-0">
                Support OS
              </span>
            </div>
          </button>

          {/* Hairline Divider */}
          <div className="hidden lg:block h-4 w-px bg-[var(--color-border)] shrink-0" />

          {/* Primary Navigation Tabs */}
          <nav className="hidden lg:flex items-center gap-1 shrink-0">
            {primaryNavItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`flex items-center gap-1.5 px-2.5 py-1.5 text-[13px] font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-[var(--color-panel-subtle)] text-[var(--color-text-primary)] font-semibold shadow-2xs border border-[var(--color-border)]'
                      : 'border border-transparent text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-panel-subtle)]/70'
                  }`}
                >
                  <item.icon className="h-3.5 w-3.5 shrink-0 opacity-70" />
                  <span>{item.label}</span>
                </button>
              );
            })}

            {/* "More ▾" Dropdown for Secondary Navigation */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className={`flex items-center gap-1 px-2 py-1.5 text-[13px] font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                    isSecondaryActive
                      ? 'bg-[var(--color-panel-subtle)] text-[var(--color-text-primary)] font-semibold shadow-2xs border border-[var(--color-border)]'
                      : 'border border-transparent text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-panel-subtle)]/70'
                  }`}
                >
                  <span>More</span>
                  <ChevronDown className="h-3 w-3 opacity-60 shrink-0" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56 p-1.5 bg-[var(--color-surface)] border-[var(--color-border)] shadow-lg rounded-lg">
                {secondaryNavItems.map((item) => (
                  <DropdownMenuItem
                    key={item.id}
                    onClick={() => onNavigate(item.id)}
                    className="flex flex-col items-start gap-0.5 px-2.5 py-2 cursor-pointer rounded-md hover:bg-[var(--color-panel-subtle)]"
                  >
                    <div className="flex items-center gap-2 font-medium text-xs text-[var(--color-text-primary)]">
                      <item.icon className="h-3.5 w-3.5 text-indigo-600 dark:text-indigo-400 shrink-0" />
                      <span>{item.label}</span>
                    </div>
                    <span className="text-[11px] text-[var(--color-text-muted)] pl-5.5">
                      {item.desc}
                    </span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>

        {/* Right Utility Cluster with Mandatory Negative Space Margin (ml-4 lg:ml-6 shrink-0) */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0 ml-4 lg:ml-6">
          {/* Quick Search Palette Trigger (Single Word "Quick" - Zero Wrap) */}
          <button
            onClick={onOpenCommandMenu}
            className="hidden sm:inline-flex h-8 items-center gap-1.5 rounded-md border border-[var(--color-border)] bg-[var(--color-panel-subtle)] px-2.5 text-xs text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:border-slate-400 transition-colors shadow-2xs whitespace-nowrap shrink-0"
            title="Quick Navigation & Action Palette (⌘K)"
          >
            <Search className="h-3.5 w-3.5 text-[var(--color-text-muted)] shrink-0" />
            <span className="font-medium whitespace-nowrap">Quick</span>
            <kbd className="rounded border border-[var(--color-border)] bg-[var(--color-surface)] px-1.5 py-0.5 text-[10px] font-mono font-semibold text-[var(--color-text-muted)] shrink-0">
              ⌘K
            </kbd>
          </button>

          {/* Live Webhook & Telemetry Stream Trigger */}
          <button
            onClick={onOpenLogsDrawer}
            className="inline-flex h-8 items-center gap-1.5 rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-2.5 text-xs font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-panel-subtle)] transition-colors shadow-2xs whitespace-nowrap shrink-0"
            title="Inspect Live Webhook & Call Event Stream"
          >
            <Terminal className="h-3.5 w-3.5 text-indigo-500 shrink-0" />
            <span className="hidden md:inline">Logs</span>
          </button>

          {/* Chaos / Outage Failover Simulator Button */}
          <button
            onClick={onOpenChaosModal}
            className="inline-flex h-8 items-center gap-1.5 rounded-md border border-amber-500/30 bg-amber-500/10 px-2.5 text-xs font-semibold text-amber-700 dark:text-amber-400 hover:bg-amber-500/20 transition-colors shadow-2xs whitespace-nowrap shrink-0"
            title="Simulate Webhook Outage & Retell/Wappi Failover"
          >
            <Zap className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400 shrink-0 animate-pulse" />
            <span>Chaos Test</span>
          </button>

          {/* Securiti Certified AI Governance Shield */}
          <button
            onClick={onOpenGovernanceDrawer}
            className="hidden xl:inline-flex h-8 items-center gap-1.5 rounded-md border border-indigo-500/20 bg-indigo-500/5 px-2.5 text-xs font-medium text-indigo-700 dark:text-indigo-400 hover:bg-indigo-500/10 transition-colors shadow-2xs whitespace-nowrap shrink-0"
            title="Securiti Certified AI TRiSM & OWASP Governance Shield"
          >
            <Shield className="h-3.5 w-3.5 text-indigo-600 dark:text-indigo-400 shrink-0" />
            <span>NIST AI Guard</span>
          </button>

          {/* Theme Toggle (Light / Dark) */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-panel-subtle)] transition-colors shadow-2xs shrink-0"
            title="Toggle Light / Dark theme"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Horizontal Touch Navigation Strip */}
      <div className="lg:hidden border-t border-[var(--color-border)] bg-[var(--color-surface)]/80 px-4 py-2 overflow-x-auto no-scrollbar flex items-center gap-1.5">
        {primaryNavItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-md whitespace-nowrap shrink-0 transition-colors ${
                isActive
                  ? 'bg-indigo-600 text-white font-semibold shadow-xs'
                  : 'bg-[var(--color-panel-subtle)] text-[var(--color-text-secondary)] border border-[var(--color-border)]'
              }`}
            >
              <item.icon className="h-3 w-3 shrink-0" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </header>
  );
}
