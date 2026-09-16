'use client';

import React, { useState } from 'react';
import {
  PhoneCall,
  CheckCircle2,
  AlertTriangle,
  Clock,
  MessageSquare,
  Layers,
  Search,
  ChevronRight,
  RefreshCw,
  Copy,
  Check,
  ExternalLink,
  SlidersHorizontal,
  Volume2,
  FileText,
  Send,
  Zap,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CallRecord {
  id: string;
  callTime: string;
  callerNumber: string;
  callerName: string;
  location: string;
  duration: string;
  intent: string;
  urgency: 'CRITICAL' | 'HIGH' | 'NORMAL' | 'LOW';
  twilioStatus: 'COMPLETED' | 'RINGING' | 'FAILED';
  retellStatus: 'ANALYZED' | 'PROCESSING' | 'ERROR';
  makeStatus: 'SUCCESS_200' | 'RETRIED_DLQ' | 'FAILED_504';
  wappiStatus: 'DELIVERED' | 'SENT' | 'FAILED_FALLBACK_SMS';
  sentiment: 'Positive' | 'Neutral' | 'Frustrated / Urgent';
  transcript: Array<{ speaker: 'Caller' | 'AI Receptionist'; text: string }>;
  extractedVariables: {
    postcode: string;
    tradeService: string;
    siteAddress: string;
    urgencyLevel: string;
    actionRequired: string;
    referenceCode: string;
  };
  whatsappPreview: string;
}

const SAMPLE_CALLS: CallRecord[] = [
  {
    id: 'CALL-UK-849201',
    callTime: 'Today, 09:42 AM',
    callerNumber: '+44 141 332 9182',
    callerName: 'Callum MacLeod',
    location: 'Glasgow West End (G12 8QQ)',
    duration: '1m 54s',
    intent: 'Emergency Commercial Leak / Water Ingress',
    urgency: 'CRITICAL',
    twilioStatus: 'COMPLETED',
    retellStatus: 'ANALYZED',
    makeStatus: 'SUCCESS_200',
    wappiStatus: 'DELIVERED',
    sentiment: 'Frustrated / Urgent',
    transcript: [
      { speaker: 'Caller', text: "Hello, aye, we've got a major water ingress on the top floor of our commercial unit at Great Western Road. Water is pouring through the ceiling joists." },
      { speaker: 'AI Receptionist', text: "I understand this is an emergency, Callum. I have flagged your location for immediate dispatch. Could you confirm if you can access the main stopcock to isolate the water?" },
      { speaker: 'Caller', text: "Aye, we've shut the valve, but the ceiling needs emergency boarding and an inspection right away before it collapses." },
      { speaker: 'AI Receptionist', text: "Understood. Our on-call emergency supervisor in Glasgow West has been alerted. I am sending an immediate WhatsApp confirmation to this number with our emergency response reference." },
    ],
    extractedVariables: {
      postcode: 'G12 8QQ',
      tradeService: 'Emergency Roofing & Ceiling Structural Boarding',
      siteAddress: '384 Great Western Road, Glasgow G12 8QQ',
      urgencyLevel: 'CRITICAL (Immediate Dispatch)',
      actionRequired: 'Alert duty contractor on-call, dispatch emergency van',
      referenceCode: 'EMG-GLA-9921',
    },
    whatsappPreview: `🚨 *Stuart & Co Emergency Response*\n\nHi Callum, we have logged your emergency water ingress report at *384 Great Western Road (G12 8QQ)*.\n\n👷 *Status:* Emergency On-Call Supervisor Alerted\n⏱️ *ETA:* < 90 Minutes\n📞 *Duty Contact:* 0141 946 8821\n\n_If you need to send photos of the damage, reply directly to this chat._`,
  },
  {
    id: 'CALL-UK-849198',
    callTime: 'Today, 09:15 AM',
    callerNumber: '+44 7700 900412',
    callerName: 'Fiona Campbell',
    location: 'Partick Glasgow (G11 6PB)',
    duration: '2m 18s',
    intent: 'Site Survey & External Cladding Quote',
    urgency: 'HIGH',
    twilioStatus: 'COMPLETED',
    retellStatus: 'ANALYZED',
    makeStatus: 'SUCCESS_200',
    wappiStatus: 'DELIVERED',
    sentiment: 'Positive',
    transcript: [
      { speaker: 'Caller', text: "Good morning, I'm calling from Campbell Developments. We need a tender quote for external insulation and render on a 4-storey residential block in Partick." },
      { speaker: 'AI Receptionist', text: "Good morning Fiona. We specialise in commercial cladding and external wall insulation across Greater Glasgow. Do you have architectural drawings available?" },
      { speaker: 'Caller', text: "Yes, full DWG files and Bill of Quantities ready. Can someone visit site Thursday afternoon?" },
      { speaker: 'AI Receptionist', text: "Thursday afternoon at 2:00 PM is open with our Senior Estimator. I have reserved that slot and will send the confirmation link to your WhatsApp right now." },
    ],
    extractedVariables: {
      postcode: 'G11 6PB',
      tradeService: 'Commercial External Wall Insulation & Cladding',
      siteAddress: 'Station Road, Partick, Glasgow G11 6PB',
      urgencyLevel: 'HIGH (Tender Quote)',
      actionRequired: 'Book Senior Estimator site visit for Thursday 2:00 PM',
      referenceCode: 'QTE-PAR-4028',
    },
    whatsappPreview: `🏗️ *Stuart & Co Construction*\n\nHi Fiona, thank you for calling. Your site survey has been provisionally booked:\n\n📍 *Site:* Station Road, Partick (G11 6PB)\n📅 *Slot:* Thursday, 2:00 PM\n👷 *Estimator:* Senior Survey Team\n\n_Please upload your DWG drawings or BOQ here: https://apex-stuart.co.uk/upload/QTE-PAR-4028_`,
  },
  {
    id: 'CALL-UK-849185',
    callTime: 'Today, 08:30 AM',
    callerNumber: '+44 141 552 1094',
    callerName: 'Rab Stewart',
    location: 'Clydeside Yard (G51 1HR)',
    duration: '1m 22s',
    intent: 'Plant Hire & 8-Ton Excavator Delivery',
    urgency: 'HIGH',
    twilioStatus: 'COMPLETED',
    retellStatus: 'ANALYZED',
    makeStatus: 'SUCCESS_200',
    wappiStatus: 'DELIVERED',
    sentiment: 'Neutral',
    transcript: [
      { speaker: 'Caller', text: "Morning, just checking if the 8-ton tracked digger is still on schedule for delivery to our Clydeside site before 11:00 AM." },
      { speaker: 'AI Receptionist', text: "Morning Rab. Let me look up Plant Schedule #PLT-882... Yes, the low loader left the depot at 8:15 AM. Driver Gary is on route." },
      { speaker: 'Caller', text: "Grand, tell him gate 3 is open and ask him to ring my mobile when he pulls into the yard." },
      { speaker: 'AI Receptionist', text: "Noted on the delivery ticket: Gate 3 access, driver will call upon arrival. I'll shoot the driver tracking pin to your WhatsApp." },
    ],
    extractedVariables: {
      postcode: 'G51 1HR',
      tradeService: 'Plant Hire & Heavy Machinery Logistics',
      siteAddress: 'Clydeside Industrial Estate, Gate 3, G51 1HR',
      urgencyLevel: 'HIGH (Live Logistics)',
      actionRequired: 'Update plant delivery manifest with Gate 3 instructions',
      referenceCode: 'PLT-CLY-8821',
    },
    whatsappPreview: `🚜 *Stuart & Co Plant Logistics*\n\nHi Rab, driver Gary is in transit with your 8-Ton Excavator (Ref #PLT-8821).\n\n📍 *Delivery Point:* Clydeside Yard, Gate 3 (G51 1HR)\n⏱️ *Estimated Arrival:* 10:45 AM\n\n_Gary has been notified to ring your mobile on approach._`,
  },
  {
    id: 'CALL-UK-849162',
    callTime: 'Yesterday, 16:45 PM',
    callerNumber: '+44 7911 123456',
    callerName: 'Ewan Fraser',
    location: 'East Kilbride (G74 5PH)',
    duration: '2m 45s',
    intent: 'Subcontractor CIS Invoice & Payment Inquiry',
    urgency: 'NORMAL',
    twilioStatus: 'COMPLETED',
    retellStatus: 'ANALYZED',
    makeStatus: 'RETRIED_DLQ',
    wappiStatus: 'FAILED_FALLBACK_SMS',
    sentiment: 'Neutral',
    transcript: [
      { speaker: 'Caller', text: "Hi, I'm just checking on payment for invoice #CIS-5912 for the joinery package on the Hamilton job." },
      { speaker: 'AI Receptionist', text: "Hello Ewan. I can see invoice #CIS-5912 submitted on Friday. It has passed quantity approval and is scheduled for the Friday BACS run." },
      { speaker: 'Caller', text: "Brilliant, will I get a remittance advice sent through?" },
      { speaker: 'AI Receptionist', text: "Yes, automated remittance will be dispatched to your registered email and a text notification sent to your phone." },
    ],
    extractedVariables: {
      postcode: 'G74 5PH',
      tradeService: 'Subcontractor Joinery Package / Accounts Payable',
      siteAddress: 'Hamilton Residential Scheme Phase 2',
      urgencyLevel: 'NORMAL (Scheduled BACS)',
      actionRequired: 'Automated Remittance advice dispatch upon BACS batch',
      referenceCode: 'CIS-HAM-5912',
    },
    whatsappPreview: `ℹ️ *Stuart & Co Accounts (SMS Fallback)*\n\nHi Ewan, invoice #CIS-5912 (£3,420.00) is confirmed for the upcoming Friday BACS payment run.\n\nRemittance will follow via email.\nRef: CIS-HAM-5912`,
  },
];

export function CallSessionInspector() {
  const [selectedCall, setSelectedCall] = useState<CallRecord>(SAMPLE_CALLS[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [urgencyFilter, setUrgencyFilter] = useState<string>('ALL');
  const [reprocessing, setReprocessing] = useState(false);
  const [reprocessedSuccess, setReprocessedSuccess] = useState(false);
  const [copiedPayload, setCopiedPayload] = useState(false);

  const filteredCalls = SAMPLE_CALLS.filter((call) => {
    const matchesSearch =
      call.callerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      call.callerNumber.includes(searchQuery) ||
      call.intent.toLowerCase().includes(searchQuery.toLowerCase()) ||
      call.location.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesUrgency = urgencyFilter === 'ALL' || call.urgency === urgencyFilter;
    return matchesSearch && matchesUrgency;
  });

  const handleReprocess = () => {
    setReprocessing(true);
    setTimeout(() => {
      setReprocessing(false);
      setReprocessedSuccess(true);
      setTimeout(() => setReprocessedSuccess(false), 3000);
    }, 1200);
  };

  const handleCopyPayload = () => {
    const payload = JSON.stringify(
      {
        event: 'call_analyzed',
        call_id: selectedCall.id,
        caller: selectedCall.callerNumber,
        caller_name: selectedCall.callerName,
        duration_seconds: 114,
        transcript: selectedCall.transcript,
        extracted_variables: selectedCall.extractedVariables,
        timestamp: new Date().toISOString(),
      },
      null,
      2
    );
    navigator.clipboard.writeText(payload);
    setCopiedPayload(true);
    setTimeout(() => setCopiedPayload(false), 2000);
  };

  return (
    <div className="space-y-4">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
              Live Telephony Trace
            </span>
            <span className="text-xs text-[var(--color-text-muted)]">
              Twilio SIP ➔ Retell AI ➔ Make.com ➔ Wappi
            </span>
          </div>
          <h2 className="text-base sm:text-lg font-bold tracking-tight text-[var(--color-text-primary)] mt-1">
            Inbound Call Session Inspector & Multi-Vendor Diagnostics
          </h2>
          <p className="text-xs text-[var(--color-text-secondary)]">
            Trace each incoming phone call through its entire multi-vendor lifecycle. Click any record to inspect transcript, audio duration, extracted trade variables, Make webhook payloads, and WhatsApp receipts.
          </p>
        </div>

        {/* Quick Search & Urgency Filter */}
        <div className="flex items-center gap-2 self-start sm:self-center">
          <div className="relative">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-[var(--color-text-muted)]" />
            <input
              type="text"
              placeholder="Search caller, phone, intent..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-8 pl-8 pr-3 text-xs rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:ring-1 focus:ring-indigo-500 w-44 sm:w-56"
            />
          </div>

          <select
            value={urgencyFilter}
            onChange={(e) => setUrgencyFilter(e.target.value)}
            className="h-8 px-2 text-xs rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-primary)] focus:outline-none focus:ring-1 focus:ring-indigo-500"
          >
            <option value="ALL">All Urgencies</option>
            <option value="CRITICAL">Critical</option>
            <option value="HIGH">High</option>
            <option value="NORMAL">Normal</option>
          </select>
        </div>
      </div>

      {/* Main 2-Column Inspector Canvas */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Left Column: Call List (5 cols) */}
        <div className="lg:col-span-5 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-2xs overflow-hidden flex flex-col h-[580px]">
          <div className="p-3 border-b border-[var(--color-border)] bg-[var(--color-panel-subtle)] flex items-center justify-between">
            <span className="text-xs font-semibold text-[var(--color-text-primary)]">
              Logged Calls ({filteredCalls.length})
            </span>
            <span className="text-[11px] font-mono text-[var(--color-text-muted)]">
              DDI: +44 141 946 8821
            </span>
          </div>

          <div className="overflow-y-auto divide-y divide-[var(--color-border)] flex-1">
            {filteredCalls.map((call) => {
              const isSelected = selectedCall.id === call.id;
              return (
                <button
                  key={call.id}
                  onClick={() => setSelectedCall(call)}
                  className={`w-full p-3 text-left transition-colors flex flex-col gap-2 ${
                    isSelected
                      ? 'bg-indigo-500/10 border-l-3 border-indigo-600 dark:border-indigo-400'
                      : 'hover:bg-[var(--color-panel-subtle)]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-xs text-[var(--color-text-primary)]">
                        {call.callerName}
                      </span>
                      <span className="text-[11px] font-mono text-[var(--color-text-muted)]">
                        {call.callerNumber}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-[var(--color-text-muted)]">
                      {call.callTime}
                    </span>
                  </div>

                  <div className="text-xs text-[var(--color-text-secondary)] font-medium line-clamp-1">
                    {call.intent}
                  </div>

                  {/* 4-Node Multi-Vendor Status Strip */}
                  <div className="flex items-center gap-1.5 flex-wrap text-[10px] font-mono">
                    <span className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      Twilio {call.duration}
                    </span>
                    <span className="px-1.5 py-0.5 rounded bg-violet-500/10 text-violet-700 dark:text-violet-400 border border-violet-500/20">
                      Retell OK
                    </span>
                    <span
                      className={`px-1.5 py-0.5 rounded border ${
                        call.makeStatus === 'SUCCESS_200'
                          ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20'
                          : 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20'
                      }`}
                    >
                      Make {call.makeStatus === 'SUCCESS_200' ? '200' : 'DLQ'}
                    </span>
                    <span
                      className={`px-1.5 py-0.5 rounded border ${
                        call.wappiStatus === 'DELIVERED'
                          ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20'
                          : 'bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20'
                      }`}
                    >
                      {call.wappiStatus === 'DELIVERED' ? 'Wappi WhatsApp' : 'Twilio SMS'}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Deep Diagnostic Details (7 cols) */}
        <div className="lg:col-span-7 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-2xs p-4 sm:p-5 flex flex-col justify-between h-[580px] overflow-y-auto space-y-4">
          {/* Detail Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[var(--color-border)]">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-[var(--color-text-primary)]">
                  {selectedCall.callerName}
                </h3>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-[var(--color-panel-subtle)] text-[var(--color-text-secondary)] border border-[var(--color-border)]">
                  {selectedCall.callerNumber}
                </span>
                <span
                  className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                    selectedCall.urgency === 'CRITICAL'
                      ? 'bg-red-500/10 text-red-600 border border-red-500/20'
                      : selectedCall.urgency === 'HIGH'
                      ? 'bg-amber-500/10 text-amber-600 border border-amber-500/20'
                      : 'bg-emerald-500/10 text-emerald-600 border border-emerald-500/20'
                  }`}
                >
                  {selectedCall.urgency}
                </span>
              </div>
              <p className="text-xs text-[var(--color-text-muted)] mt-0.5">
                Ref ID: {selectedCall.id} • Duration: {selectedCall.duration} • {selectedCall.location}
              </p>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleCopyPayload}
                className="text-xs h-8"
              >
                {copiedPayload ? (
                  <>
                    <Check className="h-3.5 w-3.5 mr-1 text-emerald-500" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5 mr-1" />
                    Copy JSON
                  </>
                )}
              </Button>
              <Button
                size="sm"
                onClick={handleReprocess}
                disabled={reprocessing}
                className="text-xs h-8 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold"
              >
                <RefreshCw className={`h-3.5 w-3.5 mr-1 ${reprocessing ? 'animate-spin' : ''}`} />
                {reprocessing ? 'Reprocessing...' : 'Reprocess Webhook'}
              </Button>
            </div>
          </div>

          {reprocessedSuccess && (
            <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 shrink-0" />
              <span>Webhook successfully replayed to Make.com scenario #14! Status: 200 OK.</span>
            </div>
          )}

          {/* Extracted Trade Variables Card */}
          <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-panel-subtle)] p-3 space-y-2">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              Extracted Trade Variables (Retell AI)
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
              <div>
                <span className="text-[10px] text-[var(--color-text-muted)] block">Trade Service</span>
                <span className="font-semibold text-[var(--color-text-primary)]">{selectedCall.extractedVariables.tradeService}</span>
              </div>
              <div>
                <span className="text-[10px] text-[var(--color-text-muted)] block">Site Postcode</span>
                <span className="font-mono font-semibold text-[var(--color-text-primary)]">{selectedCall.extractedVariables.postcode}</span>
              </div>
              <div>
                <span className="text-[10px] text-[var(--color-text-muted)] block">Urgency Action</span>
                <span className="font-semibold text-amber-600 dark:text-amber-400">{selectedCall.extractedVariables.urgencyLevel}</span>
              </div>
              <div className="col-span-2 sm:col-span-3">
                <span className="text-[10px] text-[var(--color-text-muted)] block">Site Address / Scope</span>
                <span className="text-[var(--color-text-primary)]">{selectedCall.extractedVariables.siteAddress}</span>
              </div>
            </div>
          </div>

          {/* Transcript Dialogue */}
          <div className="space-y-2">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[var(--color-text-secondary)]">
              Call Transcript ({selectedCall.transcript.length} turns)
            </span>
            <div className="space-y-2 max-h-40 overflow-y-auto pr-1">
              {selectedCall.transcript.map((turn, i) => (
                <div
                  key={i}
                  className={`p-2.5 rounded-lg text-xs ${
                    turn.speaker === 'Caller'
                      ? 'bg-slate-100 dark:bg-slate-800/80 text-[var(--color-text-primary)] border border-slate-200 dark:border-slate-700'
                      : 'bg-indigo-500/10 text-indigo-900 dark:text-indigo-200 border border-indigo-500/20'
                  }`}
                >
                  <span className="font-bold text-[10px] uppercase tracking-wider block text-[var(--color-text-muted)] mb-0.5">
                    {turn.speaker}
                  </span>
                  <p className="leading-relaxed">{turn.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Wappi WhatsApp Dispatch Receipt Preview */}
          <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/5 p-3 space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-400">
                <MessageSquare className="h-3.5 w-3.5" />
                <span>Wappi WhatsApp Delivery Receipt</span>
              </div>
              <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 px-2 py-0.5 rounded">
                Delivered in 2.1s
              </span>
            </div>
            <pre className="text-[11px] font-mono text-[var(--color-text-primary)] whitespace-pre-wrap leading-relaxed bg-[var(--color-surface)] p-2.5 rounded border border-[var(--color-border)]">
              {selectedCall.whatsappPreview}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
