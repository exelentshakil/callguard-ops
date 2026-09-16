'use client';

import React, { useState } from 'react';
import {
  PhoneCall,
  Sparkles,
  Layers,
  MessageSquare,
  ShieldCheck,
  ArrowRight,
  Zap,
  ChevronDown,
  ChevronUp,
  Activity,
  CheckCircle2,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ReviewerTourProps {
  onNavigate: (sectionId: string) => void;
  onOpenChaosModal: () => void;
}

export function ReviewerTour({ onNavigate, onOpenChaosModal }: ReviewerTourProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const evaluationPaths = [
    {
      id: 'calls',
      badge: 'Step 1 • Telephony Trace',
      title: 'Inbound Call Session Inspector',
      desc: 'Trace real call sessions end-to-end across Twilio SIP (+44 141 DDI), Retell voice transcription, Make.com webhook routing, and Wappi WhatsApp receipts.',
      actionLabel: 'Inspect Call Records',
      icon: PhoneCall,
    },
    {
      id: 'voice-tuning',
      badge: 'Step 2 • Agent Tuning',
      title: 'Retell Voice Agent & Accent Bench',
      desc: 'Test conversational prompt tuning against Scottish/UK trade accents, emergency leak triage, plant hire requests, and sub-600ms dual AI response.',
      actionLabel: 'Test Voice Prompts',
      icon: Sparkles,
    },
    {
      id: 'make-scenarios',
      badge: 'Step 3 • Webhook Triage',
      title: 'Make.com Scenarios & Error Handler',
      desc: 'Inspect webhook data parsers, dead-letter queue (DLQ) retries on 504 timeouts, and download hardened Make.com scenario blueprint JSONs.',
      actionLabel: 'Audit Make Scenarios',
      icon: Layers,
    },
    {
      id: 'wappi-gateway',
      badge: 'Step 4 • WhatsApp Hub',
      title: 'Wappi WhatsApp Gateway & Fallback',
      desc: 'Verify WhatsApp session heartbeat, test post-call recap message dispatch, and verify automatic failover to Twilio SMS if Wappi times out.',
      actionLabel: 'Test WhatsApp Dispatch',
      icon: MessageSquare,
    },
  ];

  return (
    <div className="w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-xs overflow-hidden">
      {/* Top Banner Header */}
      <div className="p-4 sm:p-6 border-b border-[var(--color-border)] bg-gradient-to-r from-indigo-500/5 via-violet-500/5 to-transparent">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="inline-flex items-center gap-1.5 rounded-md bg-indigo-500/10 px-2 py-0.5 text-xs font-semibold text-indigo-700 dark:text-indigo-400 border border-indigo-500/20">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Live Telephony Support Stack
              </span>
              <span className="text-xs text-[var(--color-text-muted)] font-mono">
                Twilio UK • Retell AI • Make.com • Wappi WhatsApp
              </span>
            </div>
            <h2 className="text-base sm:text-lg font-bold tracking-tight text-[var(--color-text-primary)]">
              How to Evaluate This Production Telephony Support Cockpit
            </h2>
            <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] max-w-3xl leading-relaxed">
              Engineered for Stuart & Co&apos;s Glasgow manufacturing & construction AI phone system. This operational workspace isolates multi-vendor telephony errors in real-time, validates prompt tuning for UK trade inquiries, and guarantees that zero calls or WhatsApp follow-ups are ever dropped.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0 self-start sm:self-center">
            <Button
              variant="outline"
              size="sm"
              onClick={onOpenChaosModal}
              className="text-xs font-semibold h-8 border-amber-500/30 text-amber-700 dark:text-amber-400 bg-amber-500/5 hover:bg-amber-500/15"
            >
              <Zap className="h-3.5 w-3.5 mr-1.5 text-amber-600 dark:text-amber-400" />
              Chaos Outage Test
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="text-xs font-medium h-8 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
            >
              {isCollapsed ? (
                <>
                  <span>Expand Guide</span>
                  <ChevronDown className="h-3.5 w-3.5 ml-1" />
                </>
              ) : (
                <>
                  <span>Collapse Guide</span>
                  <ChevronUp className="h-3.5 w-3.5 ml-1" />
                </>
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Collapsible 4-Path Interactive Grid */}
      {!isCollapsed && (
        <div className="p-4 sm:p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {evaluationPaths.map((path) => (
              <div
                key={path.id}
                className="group relative flex flex-col justify-between rounded-xl border border-[var(--color-border)] bg-[var(--color-panel-subtle)] p-4 transition-all hover:border-indigo-500/40 hover:shadow-sm"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                      {path.badge}
                    </span>
                    <div className="h-7 w-7 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-secondary)] group-hover:text-indigo-600 group-hover:border-indigo-500/30 transition-colors">
                      <path.icon className="h-3.5 w-3.5" />
                    </div>
                  </div>

                  <h3 className="text-sm font-bold text-[var(--color-text-primary)] group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {path.title}
                  </h3>

                  <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                    {path.desc}
                  </p>
                </div>

                <div className="pt-3.5 mt-3 border-t border-[var(--color-border)]/60">
                  <button
                    onClick={() => onNavigate(path.id)}
                    className="w-full flex items-center justify-between text-xs font-semibold text-indigo-600 dark:text-indigo-400 group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>{path.actionLabel}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Architectural Defense Legend */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-[var(--color-border)] text-xs text-[var(--color-text-secondary)]">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-semibold text-[var(--color-text-primary)]">End-to-End Resilience:</span>
              <span className="inline-flex items-center gap-1 font-mono text-[11px] bg-[var(--color-panel-subtle)] px-2 py-0.5 rounded border border-[var(--color-border)]">
                <CheckCircle2 className="h-3 w-3 text-emerald-500" />
                Twilio Carrier SIP (&lt;35ms)
              </span>
              <span>→</span>
              <span className="inline-flex items-center gap-1 font-mono text-[11px] bg-[var(--color-panel-subtle)] px-2 py-0.5 rounded border border-[var(--color-border)]">
                <CheckCircle2 className="h-3 w-3 text-emerald-500" />
                Retell Voice Agent (480ms)
              </span>
              <span>→</span>
              <span className="inline-flex items-center gap-1 font-mono text-[11px] bg-[var(--color-panel-subtle)] px-2 py-0.5 rounded border border-[var(--color-border)]">
                <CheckCircle2 className="h-3 w-3 text-emerald-500" />
                Make.com Webhook DLQ (&lt;250ms)
              </span>
              <span>→</span>
              <span className="inline-flex items-center gap-1 font-mono text-[11px] bg-[var(--color-panel-subtle)] px-2 py-0.5 rounded border border-[var(--color-border)]">
                <CheckCircle2 className="h-3 w-3 text-emerald-500" />
                Wappi WhatsApp + Twilio SMS Fallback
              </span>
            </div>

            <button
              onClick={() => onNavigate('blueprints')}
              className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline shrink-0 text-left"
            >
              Export Turnkey Blueprints (.json) →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
