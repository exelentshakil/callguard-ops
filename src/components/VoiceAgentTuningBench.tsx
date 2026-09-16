'use client';

import React, { useState } from 'react';
import {
  Sparkles,
  Play,
  Sliders,
  CheckCircle2,
  AlertTriangle,
  Zap,
  Volume2,
  Clock,
  RotateCcw,
  MessageSquare,
  Shield,
  Layers,
  ChevronRight,
  Info,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TelephonyCallAnalysisResult } from '@/lib/ai';

interface PresetPrompt {
  name: string;
  category: string;
  callerNumber: string;
  transcript: string;
}

const PRESET_CALLS: PresetPrompt[] = [
  {
    name: 'Emergency Pipe Burst & Structural Flood',
    category: 'Emergency Repair',
    callerNumber: '+44 141 332 9182',
    transcript:
      "Hello, aye, we've got a major water ingress on the top floor of our commercial unit at Great Western Road. Water is pouring through the ceiling joists and our electrical panel is right below it.",
  },
  {
    name: 'Commercial Cladding & Snagging Quote',
    category: 'Site Survey Quote',
    callerNumber: '+44 7700 900412',
    transcript:
      "Good morning, I'm calling from Campbell Developments in Partick G11. We need a formal tender quote for external insulation and render on a 4-storey residential block. Architectural drawings and BOQ are ready.",
  },
  {
    name: 'Heavy Plant Excavator Delivery Gate 3',
    category: 'Logistics / Plant',
    callerNumber: '+44 141 552 1094',
    transcript:
      "Morning, Rab here from Clydeside Yard G51. Just checking if the 8-ton tracked digger is still on schedule for delivery before 11:00 AM. Tell the driver Gate 3 is open and ask him to ring me on arrival.",
  },
  {
    name: 'Subcontractor CIS Invoice & Payment',
    category: 'Accounts Payable',
    callerNumber: '+44 7911 123456',
    transcript:
      "Hi, Ewan Fraser calling regarding payment for invoice #CIS-5912 for the joinery package on the Hamilton job. Can you confirm if it will be included in the Friday BACS run?",
  },
];

export function VoiceAgentTuningBench() {
  const [selectedPreset, setSelectedPreset] = useState<PresetPrompt>(PRESET_CALLS[0]);
  const [transcript, setTranscript] = useState(PRESET_CALLS[0].transcript);
  const [callerNumber, setCallerNumber] = useState(PRESET_CALLS[0].callerNumber);
  const [agentInstructions, setAgentInstructions] = useState(
    'You are the expert voice AI receptionist for Stuart & Co Manufacturing & Construction in Glasgow. Speak in a warm, professional, concise Scottish/UK phone cadence. Extract key site details and immediately confirm that a WhatsApp summary with reference details is being dispatched.'
  );

  // Tuning sliders
  const [responsiveness, setResponsiveness] = useState(0.8);
  const [interruptionSensitivity, setInterruptionSensitivity] = useState(0.75);
  const [speechRate, setSpeechRate] = useState(1.0);

  // Loading & Execution State
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<TelephonyCallAnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSelectPreset = (preset: PresetPrompt) => {
    setSelectedPreset(preset);
    setTranscript(preset.transcript);
    setCallerNumber(preset.callerNumber);
  };

  const handleRunSimulation = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/ai/telephony', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          transcript,
          callerNumber,
          customInstructions: agentInstructions,
          simulatedOutage: false,
        }),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
      const data = await res.json();
      setResult(data);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Simulation failed';
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-violet-600 dark:text-violet-400 bg-violet-500/10 px-2 py-0.5 rounded border border-violet-500/20">
              Retell Voice Agent Bench
            </span>
            <span className="text-xs text-[var(--color-text-muted)]">
              Sub-600ms Conversational Inference • Scottish/UK Trade Calibrated
            </span>
          </div>
          <h2 className="text-base sm:text-lg font-bold tracking-tight text-[var(--color-text-primary)] mt-1">
            Voice Agent Prompt Tuning & Scottish/Trade Accent Testbench
          </h2>
          <p className="text-xs text-[var(--color-text-secondary)]">
            Test conversational prompt modifications, speech parameters, and trade vocabulary in real-time with dual-provider AI. Evaluates voice responses and automatically drafts Wappi WhatsApp follow-ups.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-center">
          <Button
            onClick={handleRunSimulation}
            disabled={loading}
            className="h-8 text-xs font-semibold bg-violet-600 hover:bg-violet-700 text-white shadow-xs"
          >
            <Play className={`h-3.5 w-3.5 mr-1.5 ${loading ? 'animate-spin' : ''}`} />
            {loading ? 'Running Inference...' : 'Simulate Call & WhatsApp'}
          </Button>
        </div>
      </div>

      {/* 2-Column Tuning Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Left Column: Preset Selector & Prompt Controls (6 cols) */}
        <div className="lg:col-span-6 space-y-4">
          {/* Preset Buttons */}
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 shadow-2xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-secondary)]">
                UK Trade & Scottish Presets
              </span>
              <span className="text-[11px] font-mono text-[var(--color-text-muted)]">
                Select to auto-populate
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {PRESET_CALLS.map((preset) => {
                const isSelected = selectedPreset.name === preset.name;
                return (
                  <button
                    key={preset.name}
                    onClick={() => handleSelectPreset(preset)}
                    className={`p-2.5 rounded-lg border text-left text-xs transition-colors flex flex-col gap-1 ${
                      isSelected
                        ? 'bg-violet-500/10 border-violet-500/40 text-violet-900 dark:text-violet-200'
                        : 'border-[var(--color-border)] bg-[var(--color-panel-subtle)] hover:border-violet-500/20'
                    }`}
                  >
                    <span className="font-semibold line-clamp-1">{preset.name}</span>
                    <span className="text-[10px] font-mono text-[var(--color-text-muted)]">
                      {preset.category} • {preset.callerNumber}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Transcript Input */}
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 shadow-2xs space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold text-[var(--color-text-primary)]">
                Inbound Caller Transcript
              </label>
              <span className="text-[11px] font-mono text-[var(--color-text-muted)]">
                Caller: {callerNumber}
              </span>
            </div>

            <textarea
              rows={3}
              value={transcript}
              onChange={(e) => setTranscript(e.target.value)}
              placeholder="Paste or edit caller spoken dialogue..."
              className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-panel-subtle)] p-2.5 text-xs text-[var(--color-text-primary)] focus:outline-none focus:ring-1 focus:ring-violet-500 font-mono leading-relaxed"
            />

            {/* Agent Prompt Instructions */}
            <div>
              <label className="text-xs font-semibold text-[var(--color-text-primary)] block mb-1">
                Retell Agent System Prompt Instructions
              </label>
              <textarea
                rows={3}
                value={agentInstructions}
                onChange={(e) => setAgentInstructions(e.target.value)}
                className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-panel-subtle)] p-2.5 text-xs text-[var(--color-text-primary)] focus:outline-none focus:ring-1 focus:ring-violet-500 font-mono leading-relaxed text-[11px]"
              />
            </div>

            {/* Agent Sliders */}
            <div className="grid grid-cols-3 gap-3 pt-2 border-t border-[var(--color-border)]">
              <div>
                <span className="text-[10px] font-mono text-[var(--color-text-muted)] block">
                  Responsiveness ({responsiveness}s)
                </span>
                <input
                  type="range"
                  min="0.3"
                  max="1.5"
                  step="0.1"
                  value={responsiveness}
                  onChange={(e) => setResponsiveness(parseFloat(e.target.value))}
                  className="w-full accent-violet-600"
                />
              </div>
              <div>
                <span className="text-[10px] font-mono text-[var(--color-text-muted)] block">
                  Interruption ({interruptionSensitivity})
                </span>
                <input
                  type="range"
                  min="0.2"
                  max="1.0"
                  step="0.05"
                  value={interruptionSensitivity}
                  onChange={(e) => setInterruptionSensitivity(parseFloat(e.target.value))}
                  className="w-full accent-violet-600"
                />
              </div>
              <div>
                <span className="text-[10px] font-mono text-[var(--color-text-muted)] block">
                  Speech Rate ({speechRate}x)
                </span>
                <input
                  type="range"
                  min="0.8"
                  max="1.3"
                  step="0.05"
                  value={speechRate}
                  onChange={(e) => setSpeechRate(parseFloat(e.target.value))}
                  className="w-full accent-violet-600"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Live Inferred Voice Response & Wappi WhatsApp Dispatch (6 cols) */}
        <div className="lg:col-span-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 sm:p-5 shadow-2xs flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-3 border-b border-[var(--color-border)]">
              <div>
                <h3 className="text-sm font-bold text-[var(--color-text-primary)]">
                  Live Voice & WhatsApp Simulation Output
                </h3>
                <p className="text-xs text-[var(--color-text-muted)]">
                  Dual AI Inference • ElevenLabs Speech Generation • Wappi Dispatch
                </p>
              </div>

              {result && (
                <div className="flex items-center gap-1.5">
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-violet-500/10 text-violet-700 dark:text-violet-400 border border-violet-500/20">
                    <Zap className="h-3 w-3" />
                    {result.provider} ({result.model}) • {result.latencyMs}ms
                  </span>
                </div>
              )}
            </div>

            {error && (
              <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-xs text-red-600 flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {!result && !loading && (
              <div className="p-8 text-center border-2 border-dashed border-[var(--color-border)] rounded-xl space-y-2">
                <Sparkles className="h-8 w-8 text-violet-500 mx-auto opacity-50" />
                <p className="text-xs font-semibold text-[var(--color-text-primary)]">
                  Ready for Voice Agent Simulation
                </p>
                <p className="text-xs text-[var(--color-text-secondary)] max-w-sm mx-auto">
                  Click &quot;Simulate Call &amp; WhatsApp&quot; to execute real dual-provider AI inference against the Scottish/UK trade transcript.
                </p>
              </div>
            )}

            {loading && (
              <div className="p-8 text-center border border-[var(--color-border)] rounded-xl space-y-3 bg-[var(--color-panel-subtle)]">
                <div className="h-8 w-8 border-2 border-violet-600 border-t-transparent rounded-full animate-spin mx-auto" />
                <p className="text-xs font-semibold text-[var(--color-text-primary)]">
                  Synthesizing Voice Cadence & Entity Extraction...
                </p>
                <p className="text-[11px] text-[var(--color-text-muted)] font-mono">
                  Checking Inline Firewall ➔ OpenAI gpt-4o-mini / Gemini 2.0 Flash
                </p>
              </div>
            )}

            {result && (
              <div className="space-y-3">
                {/* Voice Agent Audio Response Card */}
                <div className="rounded-lg border border-violet-500/30 bg-violet-500/5 p-3.5 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-violet-700 dark:text-violet-400">
                      <Volume2 className="h-4 w-4" />
                      <span>Retell Voice Agent Spoken Script</span>
                    </div>
                    <span className="text-[10px] font-mono text-[var(--color-text-muted)]">
                      Cadence: UK Scottish Warm
                    </span>
                  </div>
                  <p className="text-xs text-[var(--color-text-primary)] leading-relaxed italic bg-[var(--color-surface)] p-2.5 rounded border border-[var(--color-border)]">
                    &quot;{result.voiceAgentResponse}&quot;
                  </p>
                </div>

                {/* Extracted Entity Badges */}
                <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-panel-subtle)] p-3 space-y-2">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--color-text-secondary)]">
                    Extracted Telecom Variables (Make.com JSON)
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                    <div>
                      <span className="text-[10px] text-[var(--color-text-muted)] block">Intent</span>
                      <span className="font-semibold text-[var(--color-text-primary)]">{result.intent}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-[var(--color-text-muted)] block">Postcode</span>
                      <span className="font-mono font-semibold text-[var(--color-text-primary)]">{result.entities.postcode}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-[var(--color-text-muted)] block">Urgency</span>
                      <span className="font-bold text-red-600 dark:text-red-400">{result.urgency}</span>
                    </div>
                    <div className="col-span-2 sm:col-span-3">
                      <span className="text-[10px] text-[var(--color-text-muted)] block">Make Router Action</span>
                      <span className="font-mono text-[11px] text-indigo-600 dark:text-indigo-400">{result.makeRouteAction}</span>
                    </div>
                  </div>
                </div>

                {/* Generated Wappi WhatsApp Follow-Up Message */}
                <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/5 p-3.5 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-400">
                      <MessageSquare className="h-4 w-4" />
                      <span>Generated Wappi WhatsApp Dispatch</span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      Ready for Webhook
                    </span>
                  </div>
                  <pre className="text-[11px] font-mono text-[var(--color-text-primary)] whitespace-pre-wrap leading-relaxed bg-[var(--color-surface)] p-2.5 rounded border border-[var(--color-border)]">
                    {result.wappiWhatsAppMessage}
                  </pre>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
