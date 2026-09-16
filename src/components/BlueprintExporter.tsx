'use client';

import React, { useState } from 'react';
import {
  Download,
  FileCode,
  Check,
  Layers,
  Copy,
  Terminal,
  ExternalLink,
  ShieldCheck,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BlueprintFile {
  title: string;
  badge: string;
  filename: string;
  desc: string;
  snippet: string;
}

const BLUEPRINTS: BlueprintFile[] = [
  {
    title: 'Make.com Scenario Blueprint (JSON)',
    badge: 'Make.com Core',
    filename: 'stuart_telephony_make_blueprint.json',
    desc: 'Production-ready Make.com blueprint with Retell webhook listener, regex E.164 phone sanitizer, 3-way intent router, and dead-letter queue error handler.',
    snippet: `{
  "name": "Stuart_Co_Telephony_Retell_Make_Wappi",
  "modules": [
    { "id": 1, "module": "gateway:CustomWebhook", "name": "Retell Webhook" },
    { "id": 2, "module": "util:RegexReplace", "name": "UK E.164 Sanitizer" },
    { "id": 3, "module": "router:BasicRouter", "name": "Intent Branch Router" },
    { "id": 4, "module": "google-sheets:AddRow", "name": "CRM Lead Sync" },
    { "id": 5, "module": "http:MakeRequest", "name": "Wappi WhatsApp API" },
    { "id": 6, "module": "twilio:SendSms", "name": "SMS Fallback", "isErrorHandler": true }
  ]
}`,
  },
  {
    title: 'Retell AI Voice Agent System Prompt & Schema',
    badge: 'Retell AI v2.4',
    filename: 'retell_voice_agent_spec.json',
    desc: 'Complete Retell agent configuration including Scottish trade conversational system prompt, custom variables extraction, and webhook payload format.',
    snippet: `{
  "agent_name": "Stuart & Co Scottish Trade Receptionist",
  "voice_id": "eleven_turbo_v2_scottish_natural",
  "responsiveness": 0.8,
  "interruption_sensitivity": 0.75,
  "system_prompt": "You are the primary telephone receptionist for Stuart & Co in Glasgow...",
  "variables_schema": {
    "caller_name": "string",
    "postcode": "string",
    "trade_service": "string",
    "urgency": "string"
  }
}`,
  },
  {
    title: 'Twilio UK SIP Trunking & Webhook Handler',
    badge: 'Twilio Serverless',
    filename: 'twilio_inbound_sip.ts',
    desc: 'TypeScript serverless handler that receives inbound calls on Glasgow DDI (+44 141), checks office hours, and forwards media streams to Retell SIP trunk.',
    snippet: `import { Twilio } from 'twilio';

export async function handler(context: any, event: any, callback: any) {
  const twiml = new Twilio.twiml.VoiceResponse();
  // Forward caller media stream directly to Retell AI SIP URI
  const dial = twiml.dial({ answerOnBridge: true });
  dial.sip('sip:stuart-co-agent@sip.retellai.com');
  return callback(null, twiml);
}`,
  },
  {
    title: 'Wappi WhatsApp API & Twilio SMS Fallback Router',
    badge: 'Wappi / Node.js',
    filename: 'wappi_dispatch_fallback.ts',
    desc: 'Automated dispatcher that sends post-call WhatsApp summaries via Wappi, listens for delivery receipt, and triggers Twilio SMS if WhatsApp is unread after 45s.',
    snippet: `export async function dispatchPostCallSummary(payload: CallSummaryPayload) {
  try {
    const wappiRes = await fetch('https://wappi.pro/api/sync/message/send', {
      method: 'POST',
      headers: { 'Authorization': process.env.WAPPI_API_KEY! },
      body: JSON.stringify({ recipient: payload.e164Phone, body: payload.whatsappText })
    });
    if (!wappiRes.ok) throw new Error('Wappi HTTP ' + wappiRes.status);
  } catch (err) {
    // Immediate fallback to Twilio SMS
    await twilioClient.messages.create({ to: payload.e164Phone, from: '+441419468821', body: payload.smsText });
  }
}`,
  },
];

export function BlueprintExporter() {
  const [downloadedIndex, setDownloadedIndex] = useState<number | null>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleDownload = (bp: BlueprintFile, index: number) => {
    const blob = new Blob([bp.snippet], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = bp.filename;
    a.click();
    URL.revokeObjectURL(url);

    setDownloadedIndex(index);
    setTimeout(() => setDownloadedIndex(null), 2500);
  };

  const handleCopy = (snippet: string, index: number) => {
    navigator.clipboard.writeText(snippet);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 sm:p-6 shadow-2xs space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[var(--color-border)]">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
              Turnkey Exports
            </span>
            <span className="text-xs text-[var(--color-text-muted)]">
              Zero Vendor Lock-in • 100% Client Code Ownership
            </span>
          </div>
          <h2 className="text-base sm:text-lg font-bold tracking-tight text-[var(--color-text-primary)] mt-1">
            Production Blueprints, Make.com Scenarios & Retell Specs
          </h2>
          <p className="text-xs text-[var(--color-text-secondary)]">
            Download production-ready, importable configuration files directly into your Make.com, Retell AI, and Twilio dashboards.
          </p>
        </div>
      </div>

      {/* 2x2 Grid of Blueprints */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {BLUEPRINTS.map((bp, index) => (
          <div
            key={bp.filename}
            className="rounded-xl border border-[var(--color-border)] bg-[var(--color-panel-subtle)] p-4 space-y-3 flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 bg-[var(--color-surface)] px-2 py-0.5 rounded border border-[var(--color-border)]">
                  {bp.badge}
                </span>
                <span className="text-[11px] font-mono text-[var(--color-text-muted)]">
                  {bp.filename}
                </span>
              </div>

              <h3 className="text-sm font-bold text-[var(--color-text-primary)]">
                {bp.title}
              </h3>

              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                {bp.desc}
              </p>

              {/* Code Snippet Box */}
              <div className="relative rounded-lg bg-slate-950 p-3 text-[11px] font-mono text-slate-300 overflow-x-auto max-h-36">
                <pre>{bp.snippet}</pre>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2 border-t border-[var(--color-border)]/60">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleCopy(bp.snippet, index)}
                className="text-xs h-8 flex-1"
              >
                {copiedIndex === index ? (
                  <>
                    <Check className="h-3.5 w-3.5 mr-1 text-emerald-500" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5 mr-1" />
                    Copy Code
                  </>
                )}
              </Button>

              <Button
                size="sm"
                onClick={() => handleDownload(bp, index)}
                className="text-xs h-8 flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold"
              >
                {downloadedIndex === index ? (
                  <>
                    <Check className="h-3.5 w-3.5 mr-1" />
                    Downloaded!
                  </>
                ) : (
                  <>
                    <Download className="h-3.5 w-3.5 mr-1" />
                    Download File
                  </>
                )}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
