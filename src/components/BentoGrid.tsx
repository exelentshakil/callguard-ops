'use client';

import React from 'react';
import {
  PhoneCall,
  Activity,
  CheckCircle2,
  Clock,
  MessageSquare,
  ShieldCheck,
  Zap,
  TrendingUp,
  AlertTriangle,
  Layers,
  Sparkles,
} from 'lucide-react';

export function BentoGrid() {
  return (
    <div className="space-y-4">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h2 className="text-sm sm:text-base font-bold tracking-tight text-[var(--color-text-primary)]">
            Telephony Telemetry & Multi-Vendor Health Matrix
          </h2>
          <p className="text-xs text-[var(--color-text-secondary)]">
            Continuous real-time health across Twilio carrier trunking, Retell voice synthesis, Make.com webhooks, and Wappi WhatsApp gateway.
          </p>
        </div>
        <div className="flex items-center gap-2 self-start sm:self-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-semibold text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            4/4 Systems Healthy
          </span>
          <span className="text-xs font-mono text-[var(--color-text-muted)]">
            Last Ping: 12s ago
          </span>
        </div>
      </div>

      {/* 5-Card Bento Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
        {/* Card 1: Total Calls Processed */}
        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 shadow-2xs space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-secondary)]">
              Calls Handled
            </span>
            <div className="h-7 w-7 rounded-md bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
              <PhoneCall className="h-3.5 w-3.5" />
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold font-mono tabular-nums tracking-tight text-[var(--color-text-primary)]">
              1,482
            </div>
            <div className="flex items-center gap-1 text-xs text-emerald-600 dark:text-emerald-400 font-medium mt-1">
              <TrendingUp className="h-3 w-3" />
              <span>100% captured • 0 dropped leads</span>
            </div>
          </div>
          {/* Micro Sparkline */}
          <div className="h-6 w-full pt-1">
            <svg className="w-full h-full" viewBox="0 0 100 20" preserveAspectRatio="none">
              <path
                d="M0 16 Q 15 12, 30 14 T 60 8 T 85 10 T 100 4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-indigo-500"
              />
            </svg>
          </div>
        </div>

        {/* Card 2: Retell Voice Agent Latency */}
        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 shadow-2xs space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-secondary)]">
              Voice Latency
            </span>
            <div className="h-7 w-7 rounded-md bg-violet-500/10 text-violet-600 dark:text-violet-400 flex items-center justify-center">
              <Sparkles className="h-3.5 w-3.5" />
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold font-mono tabular-nums tracking-tight text-[var(--color-text-primary)]">
              480<span className="text-base font-normal text-[var(--color-text-muted)]">ms</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-violet-600 dark:text-violet-400 font-medium mt-1">
              <Zap className="h-3 w-3" />
              <span>ElevenLabs Turbo v2 • Sub-600ms SLA</span>
            </div>
          </div>
          {/* Segmented Latency Bar */}
          <div className="space-y-1">
            <div className="flex h-1.5 w-full overflow-hidden rounded-full bg-[var(--color-panel-subtle)]">
              <div className="bg-indigo-500 w-[45%]" title="LLM Inference 216ms" />
              <div className="bg-violet-500 w-[35%]" title="TTS Audio Synthesis 168ms" />
              <div className="bg-emerald-500 w-[20%]" title="SIP Transport 96ms" />
            </div>
            <div className="flex justify-between text-[10px] font-mono text-[var(--color-text-muted)]">
              <span>LLM 45%</span>
              <span>TTS 35%</span>
              <span>SIP 20%</span>
            </div>
          </div>
        </div>

        {/* Card 3: Wappi WhatsApp Delivery Rate */}
        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 shadow-2xs space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-secondary)]">
              WhatsApp Dispatch
            </span>
            <div className="h-7 w-7 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <MessageSquare className="h-3.5 w-3.5" />
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold font-mono tabular-nums tracking-tight text-[var(--color-text-primary)]">
              98.6<span className="text-base font-normal text-[var(--color-text-muted)]">%</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-emerald-600 dark:text-emerald-400 font-medium mt-1">
              <CheckCircle2 className="h-3 w-3" />
              <span>1,462 delivered • 20 SMS failover</span>
            </div>
          </div>
          {/* Delivery Split Bar */}
          <div className="space-y-1">
            <div className="flex h-1.5 w-full overflow-hidden rounded-full bg-[var(--color-panel-subtle)]">
              <div className="bg-emerald-500 w-[98.6%]" title="Wappi WhatsApp 98.6%" />
              <div className="bg-amber-500 w-[1.4%]" title="Twilio SMS Fallback 1.4%" />
            </div>
            <div className="flex justify-between text-[10px] font-mono text-[var(--color-text-muted)]">
              <span>Wappi WhatsApp: 98.6%</span>
              <span>SMS Backup: 1.4%</span>
            </div>
          </div>
        </div>

        {/* Card 4: Make.com Incident Self-Healing */}
        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 shadow-2xs space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-secondary)]">
              Make.com DLQ Heals
            </span>
            <div className="h-7 w-7 rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center">
              <Layers className="h-3.5 w-3.5" />
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold font-mono tabular-nums tracking-tight text-[var(--color-text-primary)]">
              14<span className="text-base font-normal text-[var(--color-text-muted)]"> auto-healed</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400 font-medium mt-1">
              <ShieldCheck className="h-3 w-3" />
              <span>Zero manual intervention required</span>
            </div>
          </div>
          {/* Node Health Pills */}
          <div className="flex items-center gap-1 pt-1 text-[11px] font-mono">
            <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 border border-emerald-500/20">
              Twilio OK
            </span>
            <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 border border-emerald-500/20">
              Retell OK
            </span>
            <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 border border-emerald-500/20">
              Make OK
            </span>
            <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 border border-emerald-500/20">
              Wappi OK
            </span>
          </div>
        </div>
      </div>

      {/* Deep Dark Slate Command Console Summary Strip */}
      <div className="bg-slate-900 border border-slate-800 text-white p-3.5 sm:p-4 rounded-xl shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
            <Activity className="h-4 w-4 animate-pulse" />
          </div>
          <div className="space-y-0.5">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-semibold text-xs text-slate-200">
                Active Telephony Node: Glasgow HQ (+44 141 946 8821)
              </span>
              <span className="inline-flex items-center rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-mono font-medium text-emerald-400 border border-emerald-500/30">
                DDI ONLINE
              </span>
              <span className="text-[11px] text-slate-400 font-mono">
                Make Scenario #14: Operational
              </span>
            </div>
            <p className="text-xs text-slate-400">
              All inbound voice streams pass through Retell LLM analysis, Make.com webhook routing, and Wappi WhatsApp dispatch with automatic dead-letter queue recovery.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0 self-start md:self-center">
          <div className="text-right hidden xl:block mr-2">
            <div className="text-[11px] font-mono text-slate-400">SLA Recovery Window</div>
            <div className="text-xs font-bold font-mono text-emerald-400">&lt; 3.2s Auto-Failover</div>
          </div>
        </div>
      </div>
    </div>
  );
}
