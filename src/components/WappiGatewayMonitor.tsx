'use client';

import React, { useState } from 'react';
import {
  MessageSquare,
  Smartphone,
  Send,
  CheckCircle2,
  AlertTriangle,
  RefreshCw,
  QrCode,
  ShieldCheck,
  Zap,
  Check,
  Clock,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export function WappiGatewayMonitor() {
  const [targetPhone, setTargetPhone] = useState('+44 141 332 9182');
  const [messageType, setMessageType] = useState<'EMERGENCY' | 'SITE_SURVEY' | 'PLANT_DELIVERY'>('EMERGENCY');
  const [isSending, setIsSending] = useState(false);
  const [dispatchResult, setDispatchResult] = useState<{ status: 'DELIVERED' | 'FALLBACK_SMS'; time: string } | null>(null);

  const getTemplateContent = () => {
    switch (messageType) {
      case 'EMERGENCY':
        return `*Stuart & Co Emergency Dispatch*\nRef: EMG-GLA-9921\n\nCallum, emergency water ingress incident logged for 384 Great Western Road (G12 8QQ).\nStatus: Duty supervisor notified\nResponse window: Under 90 mins\nDirect Duty Line: 0141 946 8821\n\nPlease reply with site access notes or damage photos if required.`;
      case 'SITE_SURVEY':
        return `*Stuart & Co Construction*\nRef: QTE-PAR-4028\n\nFiona, site survey consultation booked:\nLocation: Station Road, Partick (G11 6PB)\nScheduled: Thursday, 2:00 PM\nSurveyor: Senior Estimating Team\n\nUpload drawings or specification docs: https://apex-stuart.co.uk/upload/QTE-PAR-4028`;
      case 'PLANT_DELIVERY':
        return `*Stuart & Co Site Logistics*\nRef: PLT-CLY-8821\n\nRab, delivery scheduled for Clydeside Industrial Estate Gate 3 (G51 1HR).\nConsignment: 8T Plant delivery\nDriver: Gary (in transit)\nETA: 10:45 AM\n\nDriver instructed to call on approach. Yard contact: 0141 445 1092.`;
    }
  };

  const handleTestDispatch = () => {
    setIsSending(true);
    setDispatchResult(null);

    setTimeout(() => {
      setIsSending(false);
      setDispatchResult({
        status: 'DELIVERED',
        time: `${new Date().toLocaleTimeString('en-GB')}`,
      });
    }, 950);
  };

  return (
    <div className="space-y-4">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
              Wappi Gateway Telemetry
            </span>
            <span className="text-xs text-[var(--color-text-muted)]">
              Multi-Device WhatsApp Session & Twilio SMS Fallback
            </span>
          </div>
          <h2 className="text-base sm:text-lg font-bold tracking-tight text-[var(--color-text-primary)] mt-1">
            Wappi WhatsApp Messaging Gateway & Dispatch Tester
          </h2>
          <p className="text-xs text-[var(--color-text-secondary)]">
            Monitor Wappi WhatsApp instance health, verify connection heartbeats, test post-call recap message dispatches, and inspect automatic Twilio SMS fallback rules.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-semibold text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Wappi Cloud: Connected
          </span>
        </div>
      </div>

      {/* 2-Column Gateway Canvas */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Left Column: Instance Health & Message Dispatcher (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          {/* Health Diagnostics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-3.5 shadow-2xs space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--color-text-muted)] block">
                Session Instance ID
              </span>
              <span className="font-mono text-xs font-bold text-[var(--color-text-primary)]">
                wap_inst_gla_8849
              </span>
              <span className="text-[11px] text-emerald-600 dark:text-emerald-400 block font-medium">
                Multi-Device Linked
              </span>
            </div>

            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-3.5 shadow-2xs space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--color-text-muted)] block">
                Webhook Latency
              </span>
              <span className="font-mono text-xs font-bold text-[var(--color-text-primary)]">
                112ms Avg Ping
              </span>
              <span className="text-[11px] text-slate-500 block font-medium">
                0 Packet Drops
              </span>
            </div>

            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-3.5 shadow-2xs space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--color-text-muted)] block">
                Failover Rule
              </span>
              <span className="font-mono text-xs font-bold text-indigo-600 dark:text-indigo-400">
                Twilio Programmable SMS
              </span>
              <span className="text-[11px] text-slate-500 block font-medium">
                Trigger after 45s
              </span>
            </div>
          </div>

          {/* Test Dispatch Form */}
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 sm:p-5 shadow-2xs space-y-3">
            <h3 className="text-sm font-bold text-[var(--color-text-primary)]">
              Test Live Post-Call WhatsApp Dispatch
            </h3>
            <p className="text-xs text-[var(--color-text-secondary)]">
              Select a message template and test simulated dispatch to verify Wappi API payload formatting.
            </p>

            <div className="space-y-3 pt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-semibold text-[var(--color-text-primary)] block mb-1">
                    Target Mobile (UK E.164)
                  </label>
                  <input
                    type="text"
                    value={targetPhone}
                    onChange={(e) => setTargetPhone(e.target.value)}
                    className="h-8 w-full rounded-md border border-[var(--color-border)] bg-[var(--color-panel-subtle)] px-2.5 text-xs font-mono text-[var(--color-text-primary)] focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-[var(--color-text-primary)] block mb-1">
                    Scenario Template
                  </label>
                  <select
                    value={messageType}
                    onChange={(e) => setMessageType(e.target.value as any)}
                    className="h-8 w-full rounded-md border border-[var(--color-border)] bg-[var(--color-panel-subtle)] px-2 text-xs text-[var(--color-text-primary)] focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  >
                    <option value="EMERGENCY">Emergency Response</option>
                    <option value="SITE_SURVEY">Site Survey Booking</option>
                    <option value="PLANT_DELIVERY">Plant Hire Logistics</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-[11px] font-semibold text-[var(--color-text-primary)] block mb-1">
                  Message Payload Preview
                </label>
                <textarea
                  rows={4}
                  readOnly
                  value={getTemplateContent()}
                  className="w-full rounded-md border border-[var(--color-border)] bg-[var(--color-panel-subtle)] p-2.5 text-xs font-mono text-[var(--color-text-primary)]"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <Button
                  onClick={handleTestDispatch}
                  disabled={isSending}
                  className="h-8 text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs"
                >
                  <Send className={`h-3.5 w-3.5 mr-1.5 ${isSending ? 'animate-pulse' : ''}`} />
                  {isSending ? 'Sending via Wappi API...' : 'Test WhatsApp Dispatch'}
                </Button>

                {dispatchResult && (
                  <span className="inline-flex items-center gap-1 text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    Delivered to {targetPhone} ({dispatchResult.time})
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Realistic WhatsApp Phone Preview Mockup (5 cols) */}
        <div className="lg:col-span-5 rounded-2xl border border-[var(--color-border)] bg-slate-900 p-4 shadow-md text-white flex flex-col justify-between">
          <div className="space-y-3">
            {/* Phone Header Bar */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-emerald-600 flex items-center justify-center font-bold text-xs">
                  SC
                </div>
                <div>
                  <div className="text-xs font-bold leading-tight">Stuart & Co Construction</div>
                  <div className="text-[10px] text-emerald-400 flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Official WhatsApp Business
                  </div>
                </div>
              </div>
              <span className="text-[10px] font-mono text-slate-400">
                +44 141 946 8821
              </span>
            </div>

            {/* Simulated Chat Bubble */}
            <div className="space-y-2 pt-2">
              <div className="text-[10px] text-center text-slate-500 font-mono">
                Today, 09:43 AM • Call Ended (1m 54s)
              </div>

              <div className="max-w-[90%] rounded-xl rounded-tl-none bg-emerald-950/80 border border-emerald-800/60 p-3.5 text-xs text-emerald-100 shadow-sm space-y-2">
                <pre className="font-sans whitespace-pre-wrap leading-relaxed text-[11.5px]">
                  {getTemplateContent()}
                </pre>
                <div className="text-right text-[10px] text-emerald-400/80 flex items-center justify-end gap-1 font-mono">
                  <span>09:43 AM</span>
                  <Check className="h-3 w-3 text-emerald-400 inline" />
                  <Check className="h-3 w-3 text-emerald-400 -ml-2 inline" />
                </div>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
              End-to-End Encrypted
            </span>
            <span className="font-mono text-[10px] text-slate-500">
              Powered by Wappi API
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
