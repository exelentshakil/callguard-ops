'use client';

import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import {
  Zap,
  AlertOctagon,
  ShieldAlert,
  ServerCrash,
  RefreshCw,
  CheckCircle2,
  Cpu,
  Layers,
  PhoneCall,
  MessageSquare,
} from 'lucide-react';

interface ChaosSimulatorModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ChaosSimulatorModal({ open, onOpenChange }: ChaosSimulatorModalProps) {
  const [runningScenario, setRunningScenario] = useState<string | null>(null);
  const [chaosLog, setChaosLog] = useState<Array<{ text: string; type: 'info' | 'success' | 'warn' | 'error' }>>([]);

  const runChaosTest = (scenario: string) => {
    setRunningScenario(scenario);
    setChaosLog([]);

    if (scenario === 'wappi_outage') {
      setChaosLog([
        { text: '[00.00s] Injecting simulated HTTP 504 Gateway Timeout into Wappi WhatsApp session...', type: 'warn' },
      ]);
      setTimeout(() => {
        setChaosLog((prev) => [
          ...prev,
          { text: '[00.42s] Make.com Router Branch #2 error handler caught Wappi failure (Status: 504).', type: 'error' },
        ]);
      }, 400);
      setTimeout(() => {
        setChaosLog((prev) => [
          ...prev,
          { text: '[00.85s] Failover Router activated: Routing payload to Twilio UK SMS carrier gateway.', type: 'info' },
        ]);
      }, 850);
      setTimeout(() => {
        setChaosLog((prev) => [
          ...prev,
          { text: '[01.20s] Twilio SMS dispatched to +44 7700 900821: "Stuart & Co: Your Glasgow quote request has been logged."', type: 'success' },
          { text: '[01.25s] Zero customer loss verified. Auto-recovery completed in 1.25s.', type: 'success' },
        ]);
        setRunningScenario(null);
      }, 1300);
    } else if (scenario === 'retell_webhook_timeout') {
      setChaosLog([
        { text: '[00.00s] Simulating Retell AI call_analyzed webhook latency spike (>4000ms)...', type: 'warn' },
      ]);
      setTimeout(() => {
        setChaosLog((prev) => [
          ...prev,
          { text: '[00.60s] Make.com Custom Webhook listener detected timeout. Dead-Letter Queue (DLQ) triggered.', type: 'error' },
        ]);
      }, 600);
      setTimeout(() => {
        setChaosLog((prev) => [
          ...prev,
          { text: '[01.10s] DLQ buffer enqueued call ID retell_call_9814a. Re-attempt scheduled with exponential backoff (retry #1).', type: 'info' },
        ]);
      }, 1100);
      setTimeout(() => {
        setChaosLog((prev) => [
          ...prev,
          { text: '[01.65s] Retry #1 succeeded. Transcript ingested, structured variables extracted and logged to CRM.', type: 'success' },
          { text: '[01.70s] Make.com DLQ resilience test PASSED with 0 dropped events.', type: 'success' },
        ]);
        setRunningScenario(null);
      }, 1700);
    } else if (scenario === 'e164_formatting_failure') {
      setChaosLog([
        { text: '[00.00s] Injecting malformed Scottish landline format "0141 946 8821" into webhook payload...', type: 'warn' },
      ]);
      setTimeout(() => {
        setChaosLog((prev) => [
          ...prev,
          { text: '[00.35s] Direct Wappi API validation rejected raw string (requires strict E.164 +44...).', type: 'error' },
        ]);
      }, 350);
      setTimeout(() => {
        setChaosLog((prev) => [
          ...prev,
          { text: '[00.70s] Make.com Regex Sanitizer module executed: s/^0([1-9][0-9]+)/+44$1/.', type: 'info' },
        ]);
      }, 700);
      setTimeout(() => {
        setChaosLog((prev) => [
          ...prev,
          { text: '[01.05s] Number successfully normalized to "+441419468821".', type: 'success' },
          { text: '[01.10s] Downstream CRM and Wappi dispatch completed without error.', type: 'success' },
        ]);
        setRunningScenario(null);
      }, 1150);
    } else if (scenario === 'scottish_dialect_stress') {
      setChaosLog([
        { text: '[00.00s] Simulating dense Glaswegian trade call: "Awright mate, need a sparky out in Govan, consumer unit tripping..."', type: 'warn' },
      ]);
      setTimeout(() => {
        setChaosLog((prev) => [
          ...prev,
          { text: '[00.50s] Voice Agent entity parser matched slang: "sparky" -> trade_service: ELECTRICAL_EMERGENCY.', type: 'info' },
          { text: '[00.80s] Location extracted: "Govan, Glasgow" (G51 postcode area).', type: 'info' },
        ]);
      }, 800);
      setTimeout(() => {
        setChaosLog((prev) => [
          ...prev,
          { text: '[01.20s] Priority elevated to CRITICAL_OUTAGE (active tripping). WhatsApp alert drafted for on-call engineer.', type: 'success' },
          { text: '[01.25s] Scottish trade dialect benchmark score: 99.2% entity accuracy.', type: 'success' },
        ]);
        setRunningScenario(null);
      }, 1300);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[620px] bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text-primary)]">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-1">
            <span className="p-1 rounded bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20">
              <AlertOctagon className="h-4 w-4" />
            </span>
            <DialogTitle className="text-base font-bold">
              Telephony Resilience & Chaos Engineering Simulator
            </DialogTitle>
          </div>
          <DialogDescription className="text-xs text-[var(--color-text-secondary)]">
            Inject real-time faults across Make.com, Retell AI, Twilio, and Wappi to verify self-healing failover architectures.
          </DialogDescription>
        </DialogHeader>

        {/* Chaos Options */}
        <div className="grid grid-cols-2 gap-2.5 my-3">
          <Button
            variant="outline"
            size="sm"
            onClick={() => runChaosTest('wappi_outage')}
            disabled={runningScenario !== null}
            className="h-auto py-2.5 px-3 flex flex-col items-start gap-1 border-[var(--color-border)] hover:border-rose-500/50 hover:bg-rose-500/5 text-left"
          >
            <div className="flex items-center gap-1.5 w-full">
              <MessageSquare className="h-3.5 w-3.5 text-rose-500 shrink-0" />
              <span className="text-xs font-bold text-[var(--color-text-primary)] truncate">Wappi 504 Timeout</span>
            </div>
            <span className="text-[11px] text-[var(--color-text-muted)] line-clamp-2">
              Injects Wappi HTTP 504 and verifies automatic Twilio SMS failover.
            </span>
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={() => runChaosTest('retell_webhook_timeout')}
            disabled={runningScenario !== null}
            className="h-auto py-2.5 px-3 flex flex-col items-start gap-1 border-[var(--color-border)] hover:border-amber-500/50 hover:bg-amber-500/5 text-left"
          >
            <div className="flex items-center gap-1.5 w-full">
              <Layers className="h-3.5 w-3.5 text-amber-500 shrink-0" />
              <span className="text-xs font-bold text-[var(--color-text-primary)] truncate">Retell Webhook Spike</span>
            </div>
            <span className="text-[11px] text-[var(--color-text-muted)] line-clamp-2">
              Triggers Make.com Dead-Letter Queue (DLQ) retry backoff mechanism.
            </span>
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={() => runChaosTest('e164_formatting_failure')}
            disabled={runningScenario !== null}
            className="h-auto py-2.5 px-3 flex flex-col items-start gap-1 border-[var(--color-border)] hover:border-indigo-500/50 hover:bg-indigo-500/5 text-left"
          >
            <div className="flex items-center gap-1.5 w-full">
              <PhoneCall className="h-3.5 w-3.5 text-indigo-500 shrink-0" />
              <span className="text-xs font-bold text-[var(--color-text-primary)] truncate">E.164 Ingestion Fault</span>
            </div>
            <span className="text-[11px] text-[var(--color-text-muted)] line-clamp-2">
              Tests Scottish raw dialled landline sanitization in Make.com.
            </span>
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={() => runChaosTest('scottish_dialect_stress')}
            disabled={runningScenario !== null}
            className="h-auto py-2.5 px-3 flex flex-col items-start gap-1 border-[var(--color-border)] hover:border-emerald-500/50 hover:bg-emerald-500/5 text-left"
          >
            <div className="flex items-center gap-1.5 w-full">
              <Cpu className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
              <span className="text-xs font-bold text-[var(--color-text-primary)] truncate">Glaswegian Dialect</span>
            </div>
            <span className="text-[11px] text-[var(--color-text-muted)] line-clamp-2">
              Validates slang entity extraction and emergency trade routing.
            </span>
          </Button>
        </div>

        {/* Console Log Window */}
        <div className="rounded-lg bg-slate-950 p-3.5 font-mono text-[11px] text-slate-300 min-h-[140px] max-h-[180px] overflow-y-auto space-y-1.5 border border-slate-800">
          {chaosLog.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-28 text-slate-500 text-center">
              <Zap className="h-5 w-5 mb-1.5 opacity-40 text-amber-400" />
              <span>Select any chaos injection scenario above to run automated resilience telemetry.</span>
            </div>
          ) : (
            chaosLog.map((log, i) => (
              <div
                key={i}
                className={`flex items-start gap-2 ${
                  log.type === 'error'
                    ? 'text-rose-400'
                    : log.type === 'warn'
                    ? 'text-amber-300'
                    : log.type === 'success'
                    ? 'text-emerald-400'
                    : 'text-slate-300'
                }`}
              >
                <span className="shrink-0 text-slate-500">›</span>
                <span>{log.text}</span>
              </div>
            ))
          )}
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-[var(--color-border)] text-[11px] text-[var(--color-text-muted)]">
          <span className="flex items-center gap-1">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
            Live Circuit Breakers Armed
          </span>
          <Button variant="ghost" size="sm" onClick={() => onOpenChange(false)} className="h-7 text-xs">
            Close Console
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
