'use client';

import React, { useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';
import {
  Terminal,
  Activity,
  Trash2,
  Download,
  CheckCircle2,
  Clock,
  Cpu,
  Layers,
  PhoneCall,
  MessageSquare,
  ShieldCheck,
  RotateCw,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface LogEntry {
  id: string;
  timestamp: string;
  stage: 'Twilio SIP' | 'Retell AI' | 'Make.com DLQ' | 'Wappi WhatsApp' | 'SMS Fallback' | 'AI Firewall';
  status: '200 OK' | 'Dispatched' | 'Auto-Healed' | 'Enqueued' | 'Redacted';
  details: string;
  durationMs: number;
}

const INITIAL_LOGS: LogEntry[] = [
  {
    id: 'log_01',
    timestamp: '16:42:18.412',
    stage: 'Wappi WhatsApp',
    status: 'Dispatched',
    details: 'WhatsApp quote confirmation delivered to +44 7700 900821 (Wappi msg: msg_982a1)',
    durationMs: 310,
  },
  {
    id: 'log_02',
    timestamp: '16:42:18.102',
    stage: 'Make.com DLQ',
    status: '200 OK',
    details: 'Scenario #84129: E.164 sanitizer normalized 0141 946 8821 -> +441419468821. CRM row appended.',
    durationMs: 84,
  },
  {
    id: 'log_03',
    timestamp: '16:42:18.018',
    stage: 'AI Firewall',
    status: 'Redacted',
    details: 'NIST AI RMF check passed: 1 credit card number redacted from transcript, prompt injection score 0.02.',
    durationMs: 38,
  },
  {
    id: 'log_04',
    timestamp: '16:42:17.980',
    stage: 'Retell AI',
    status: '200 OK',
    details: 'call_analyzed webhook received for call_9814a. Audio duration: 142s, trade: BOILER_BREAKDOWN, G12 postcode.',
    durationMs: 480,
  },
  {
    id: 'log_05',
    timestamp: '16:40:02.890',
    stage: 'SMS Fallback',
    status: 'Auto-Healed',
    details: 'Wappi 504 timeout on +44 7891 234567. Make.com Router Branch #3 caught error -> Twilio SMS sent in 420ms.',
    durationMs: 420,
  },
  {
    id: 'log_06',
    timestamp: '16:35:12.110',
    stage: 'Twilio SIP',
    status: '200 OK',
    details: 'Inbound media stream from Glasgow DDI (+44 141 946 8821) bridged to Retell SIP URI.',
    durationMs: 92,
  },
];

interface ExecutionLogDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ExecutionLogDrawer({ open, onOpenChange }: ExecutionLogDrawerProps) {
  const [logs, setLogs] = useState<LogEntry[]>(INITIAL_LOGS);
  const [filterStage, setFilterStage] = useState<string>('all');

  const filteredLogs = filterStage === 'all'
    ? logs
    : logs.filter((l) => l.stage.toLowerCase().includes(filterStage.toLowerCase()));

  const handleClear = () => {
    setLogs([]);
  };

  const handleExport = () => {
    const jsonStr = JSON.stringify(logs, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `callguard_telephony_logs_${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className="w-full sm:max-w-xl md:max-w-2xl bg-[var(--color-surface)] border-l border-[var(--color-border)] p-6 overflow-y-auto text-[var(--color-text-primary)]"
      >
        <SheetHeader className="space-y-1 pb-4 border-b border-[var(--color-border)]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="p-1 rounded bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                <Terminal className="h-4 w-4" />
              </span>
              <SheetTitle className="text-base font-bold text-[var(--color-text-primary)]">
                Live Telephony Telemetry & Event Stream
              </SheetTitle>
            </div>
          </div>
          <SheetDescription className="text-xs text-[var(--color-text-secondary)]">
            Sub-second audit trail across Twilio SIP, Retell AI, Make.com scenarios, and Wappi WhatsApp gateway.
          </SheetDescription>
        </SheetHeader>

        {/* Filter & Actions Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 my-4">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
            {['all', 'Twilio', 'Retell', 'Make', 'Wappi', 'SMS'].map((filter) => (
              <button
                key={filter}
                onClick={() => setFilterStage(filter)}
                className={`px-2 py-1 text-[11px] font-mono rounded border transition-colors ${
                  filterStage === filter
                    ? 'bg-indigo-600 text-white border-indigo-600 font-bold'
                    : 'bg-[var(--color-panel-subtle)] text-[var(--color-text-muted)] border-[var(--color-border)] hover:text-[var(--color-text-primary)]'
                }`}
              >
                {filter.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1.5">
            <Button variant="outline" size="sm" onClick={handleExport} className="h-7 text-xs px-2">
              <Download className="h-3 w-3 mr-1" />
              Export JSON
            </Button>
            <Button variant="ghost" size="sm" onClick={handleClear} className="h-7 text-xs px-2 text-rose-500 hover:text-rose-600">
              <Trash2 className="h-3 w-3 mr-1" />
              Clear
            </Button>
          </div>
        </div>

        {/* Log Entries */}
        <div className="space-y-2.5">
          {filteredLogs.length === 0 ? (
            <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-panel-subtle)] p-8 text-center text-xs text-[var(--color-text-muted)]">
              No telemetry events match current filter.
            </div>
          ) : (
            filteredLogs.map((entry) => (
              <div
                key={entry.id}
                className="rounded-lg border border-[var(--color-border)] bg-[var(--color-panel-subtle)] p-3 space-y-1.5 font-mono text-xs"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-[var(--color-text-muted)]">
                      {entry.timestamp}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-[var(--color-surface)] border border-[var(--color-border)] text-indigo-600 dark:text-indigo-400">
                      {entry.stage}
                    </span>
                  </div>

                  <span
                    className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                      entry.status === '200 OK' || entry.status === 'Dispatched'
                        ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'
                        : entry.status === 'Auto-Healed'
                        ? 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20'
                        : 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20'
                    }`}
                  >
                    {entry.status} ({entry.durationMs}ms)
                  </span>
                </div>

                <p className="text-xs text-[var(--color-text-primary)] font-sans leading-relaxed">
                  {entry.details}
                </p>
              </div>
            ))
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
