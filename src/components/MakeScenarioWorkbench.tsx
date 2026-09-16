'use client';

import React, { useState } from 'react';
import {
  Layers,
  Activity,
  CheckCircle2,
  AlertTriangle,
  Download,
  Play,
  RotateCcw,
  Zap,
  ArrowRight,
  ShieldCheck,
  FileCode,
  Check,
  Radio,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ScenarioNode {
  id: number;
  label: string;
  type: string;
  status: 'ARMED' | 'RUNNING' | 'SUCCESS' | 'CAUGHT_ERROR';
  description: string;
  executionMs: number;
}

export function MakeScenarioWorkbench() {
  const [activeScenario, setActiveScenario] = useState<'STANDARD' | 'ERROR_WAPPI' | 'ERROR_MALFORMED_PHONE'>('STANDARD');
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationLog, setSimulationLog] = useState<string[]>([]);
  const [downloadedBlueprint, setDownloadedBlueprint] = useState(false);

  const scenarioNodes: ScenarioNode[] = [
    {
      id: 1,
      label: 'Custom Webhook',
      type: 'trigger:retell_call_analyzed',
      status: 'SUCCESS',
      description: 'Listens for Retell AI call_analyzed JSON payload over HTTPS.',
      executionMs: 34,
    },
    {
      id: 2,
      label: 'UK Phone Normalizer',
      type: 'transformer:e164_regex',
      status: 'SUCCESS',
      description: 'Converts UK mobile/landline (0141/07xxx) to strict +44 E.164 standard.',
      executionMs: 18,
    },
    {
      id: 3,
      label: 'Router & Classifier',
      type: 'router:multi_branch',
      status: 'SUCCESS',
      description: 'Routes by intent: [Emergency On-Call] | [Site Survey Lead] | [Accounts Payable].',
      executionMs: 42,
    },
    {
      id: 4,
      label: 'CRM & Sheets Sync',
      type: 'action:database_insert',
      status: 'SUCCESS',
      description: 'Logs customer name, Scottish postcode, trade scope, and audio recording link.',
      executionMs: 110,
    },
    {
      id: 5,
      label: 'Wappi WhatsApp Dispatch',
      type: 'action:wappi_cloud_api',
      status: activeScenario === 'ERROR_WAPPI' ? 'CAUGHT_ERROR' : 'SUCCESS',
      description: 'Sends automated WhatsApp call recap and booking link to customer.',
      executionMs: activeScenario === 'ERROR_WAPPI' ? 504 : 240,
    },
    {
      id: 6,
      label: 'Error Handler & DLQ',
      type: 'directive:twilio_sms_fallback',
      status: activeScenario === 'ERROR_WAPPI' ? 'SUCCESS' : 'ARMED',
      description: 'If Wappi 5xx/timeout ➔ auto-switches to Twilio SMS and writes to DLQ queue.',
      executionMs: 85,
    },
  ];

  const handleRunSimulation = (mode: 'STANDARD' | 'ERROR_WAPPI' | 'ERROR_MALFORMED_PHONE') => {
    setActiveScenario(mode);
    setIsSimulating(true);
    setSimulationLog([]);

    const logs: string[] = [];
    logs.push(`[${new Date().toISOString().slice(11, 19)}] INBOUND_WEBHOOK: Received Retell call_analyzed payload`);

    setTimeout(() => {
      if (mode === 'ERROR_MALFORMED_PHONE') {
        logs.push(`[${new Date().toISOString().slice(11, 19)}] SANITIZER: Detected local UK number '07911 123456' ➔ normalized to '+447911123456'`);
      } else {
        logs.push(`[${new Date().toISOString().slice(11, 19)}] SANITIZER: Phone number '+44 141 332 9182' verified E.164`);
      }
      setSimulationLog([...logs]);
    }, 400);

    setTimeout(() => {
      logs.push(`[${new Date().toISOString().slice(11, 19)}] ROUTER: Intent matches 'Emergency Leak' ➔ Branch #1 (On-Call Dispatch) selected`);
      logs.push(`[${new Date().toISOString().slice(11, 19)}] DATABASE_INSERT: Created lead record #CRM-GLA-9921 in 110ms`);
      setSimulationLog([...logs]);
    }, 900);

    setTimeout(() => {
      if (mode === 'ERROR_WAPPI') {
        logs.push(`[${new Date().toISOString().slice(11, 19)}] WAPPI_DISPATCH: ⚠️ HTTP 504 Gateway Timeout on Wappi instance`);
        logs.push(`[${new Date().toISOString().slice(11, 19)}] ERROR_DIRECTIVE: Make.com error handler triggered!`);
        logs.push(`[${new Date().toISOString().slice(11, 19)}] AUTO_FAILOVER: Dispatched Twilio SMS to +44 141 332 9182 (Status: 201 Delivered)`);
        logs.push(`[${new Date().toISOString().slice(11, 19)}] DEAD_LETTER_QUEUE: Enqueued for Wappi retry attempt #1 in 5 minutes`);
      } else {
        logs.push(`[${new Date().toISOString().slice(11, 19)}] WAPPI_DISPATCH: WhatsApp message dispatched via Wappi API (MsgID: wmsg_88491)`);
        logs.push(`[${new Date().toISOString().slice(11, 19)}] SCENARIO_COMPLETED: Finished in 444ms • Zero errors`);
      }
      setSimulationLog([...logs]);
      setIsSimulating(false);
    }, 1600);
  };

  const handleDownloadBlueprint = () => {
    const blueprintData = {
      name: 'Stuart_Co_Telephony_Retell_Make_Wappi_V2',
      version: '2.4.0',
      description: 'Hardened Make.com scenario with E.164 normalization, Retell webhook parser, Wappi WhatsApp dispatch, and Twilio SMS error fallback.',
      modules: [
        { id: 1, module: 'gateway:CustomWebhook', name: 'Retell Webhook' },
        { id: 2, module: 'util:RegexReplace', name: 'UK E.164 Normalizer' },
        { id: 3, module: 'router:BasicRouter', name: 'Intent Branch Router' },
        { id: 4, module: 'google-sheets:AddRow', name: 'Lead Log' },
        { id: 5, module: 'http:MakeRequest', name: 'Wappi WhatsApp API' },
        { id: 6, module: 'twilio:SendSms', name: 'Emergency SMS Fallback', isErrorHandler: true },
      ],
      routes: ['Emergency Dispatch', 'Site Survey Quotes', 'Accounts Payable', 'General Callback'],
    };

    const blob = new Blob([JSON.stringify(blueprintData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'make-stuart-telephony-blueprint.json';
    a.click();
    URL.revokeObjectURL(url);

    setDownloadedBlueprint(true);
    setTimeout(() => setDownloadedBlueprint(false), 2500);
  };

  return (
    <div className="space-y-4">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
              Make.com Scenario Health
            </span>
            <span className="text-xs text-[var(--color-text-muted)]">
              Resilient Webhook Pipeline with Error Directives & DLQ
            </span>
          </div>
          <h2 className="text-base sm:text-lg font-bold tracking-tight text-[var(--color-text-primary)] mt-1">
            Make.com Scenario Error Handler & Self-Healing Architecture
          </h2>
          <p className="text-xs text-[var(--color-text-secondary)]">
            Prevent silent automation failures. Inspect the 6-stage Make.com workflow, test error handlers (Wappi 504 timeout or malformed Scottish numbers), and export the importable blueprint JSON.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-center">
          <Button
            variant="outline"
            size="sm"
            onClick={handleDownloadBlueprint}
            className="h-8 text-xs font-semibold"
          >
            {downloadedBlueprint ? (
              <>
                <Check className="h-3.5 w-3.5 mr-1.5 text-emerald-500" />
                Blueprint Exported!
              </>
            ) : (
              <>
                <Download className="h-3.5 w-3.5 mr-1.5" />
                Export Make Blueprint (.json)
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Visual Pipeline Canvas */}
      <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 sm:p-5 shadow-2xs space-y-4">
        {/* Scenario Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[var(--color-border)]">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-[var(--color-text-primary)]">
              Simulation Scenario:
            </span>
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => handleRunSimulation('STANDARD')}
                className={`px-2.5 py-1 rounded text-xs font-medium transition-colors ${
                  activeScenario === 'STANDARD'
                    ? 'bg-blue-600 text-white font-semibold'
                    : 'bg-[var(--color-panel-subtle)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
                }`}
              >
                Standard Happy Path
              </button>
              <button
                onClick={() => handleRunSimulation('ERROR_WAPPI')}
                className={`px-2.5 py-1 rounded text-xs font-medium transition-colors ${
                  activeScenario === 'ERROR_WAPPI'
                    ? 'bg-amber-600 text-white font-semibold'
                    : 'bg-[var(--color-panel-subtle)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
                }`}
              >
                Wappi 504 ➔ SMS Fallback
              </button>
              <button
                onClick={() => handleRunSimulation('ERROR_MALFORMED_PHONE')}
                className={`px-2.5 py-1 rounded text-xs font-medium transition-colors ${
                  activeScenario === 'ERROR_MALFORMED_PHONE'
                    ? 'bg-blue-600 text-white font-semibold'
                    : 'bg-[var(--color-panel-subtle)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
                }`}
              >
                Malformed Number Auto-Fix
              </button>
            </div>
          </div>

          <span className="text-[11px] font-mono text-[var(--color-text-muted)]">
            Scenario ID: scn_stuart_call_v2
          </span>
        </div>

        {/* 6-Node Visual Pipeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3 pt-2">
          {scenarioNodes.map((node, index) => (
            <div
              key={node.id}
              className={`relative rounded-xl border p-3.5 space-y-2 flex flex-col justify-between transition-all ${
                node.status === 'CAUGHT_ERROR'
                  ? 'border-amber-500 bg-amber-500/10'
                  : node.status === 'SUCCESS'
                  ? 'border-[var(--color-border)] bg-[var(--color-panel-subtle)]'
                  : 'border-dashed border-[var(--color-border)] bg-[var(--color-surface)] opacity-70'
              }`}
            >
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-[var(--color-text-muted)]">
                    NODE #{node.id}
                  </span>
                  <span
                    className={`text-[9px] font-mono font-bold px-1.5 py-0.5 rounded ${
                      node.status === 'CAUGHT_ERROR'
                        ? 'bg-amber-500/20 text-amber-700 dark:text-amber-400'
                        : node.status === 'SUCCESS'
                        ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                        : 'bg-slate-200 dark:bg-slate-800 text-slate-600'
                    }`}
                  >
                    {node.status}
                  </span>
                </div>

                <h4 className="text-xs font-bold text-[var(--color-text-primary)]">
                  {node.label}
                </h4>

                <p className="text-[11px] text-[var(--color-text-secondary)] leading-relaxed">
                  {node.description}
                </p>
              </div>

              <div className="pt-2 border-t border-[var(--color-border)]/60 flex items-center justify-between text-[10px] font-mono text-[var(--color-text-muted)]">
                <span>{node.type}</span>
                <span>{node.executionMs}ms</span>
              </div>
            </div>
          ))}
        </div>

        {/* Live Execution Stream Box */}
        <div className="rounded-lg border border-[var(--color-border)] bg-slate-950 text-slate-200 p-3 font-mono text-xs space-y-1.5">
          <div className="flex items-center justify-between border-b border-slate-800 pb-1.5 text-[11px] text-slate-400">
            <span className="flex items-center gap-1.5">
              <Activity className="h-3.5 w-3.5 text-blue-400" />
              Make.com Execution Log Stream
            </span>
            <span className="text-[10px] text-slate-500">
              {isSimulating ? 'Executing live...' : 'Ready'}
            </span>
          </div>

          <div className="space-y-1 min-h-24 max-h-36 overflow-y-auto text-[11px] leading-relaxed pt-1">
            {simulationLog.length === 0 ? (
              <span className="text-slate-600 italic">
                Click any scenario button above to trigger live execution and view self-healing trace...
              </span>
            ) : (
              simulationLog.map((log, i) => (
                <div
                  key={i}
                  className={log.includes('⚠️') ? 'text-amber-400' : log.includes('AUTO_FAILOVER') ? 'text-emerald-400 font-semibold' : 'text-slate-300'}
                >
                  {log}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
