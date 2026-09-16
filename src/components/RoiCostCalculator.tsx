'use client';

import React, { useState } from 'react';
import {
  Calculator,
  TrendingUp,
  PhoneCall,
  MessageSquare,
  Layers,
  CheckCircle2,
  ShieldCheck,
  Zap,
} from 'lucide-react';

export function RoiCostCalculator() {
  const [monthlyCalls, setMonthlyCalls] = useState<number>(350);
  const [avgJobValue, setAvgJobValue] = useState<number>(1450); // £1,450 average trade job/order
  const [conversionRate, setConversionRate] = useState<number>(24); // 24% inquiry to booked job

  // Telephony software operating costs
  // Twilio: £0.012/min inbound + £1.15/mo DDI
  const twilioCost = +(monthlyCalls * 2.2 * 0.012 + 1.15).toFixed(2);
  // Retell AI: £0.06/min (LLM + voice synthesis)
  const retellCost = +(monthlyCalls * 2.2 * 0.06).toFixed(2);
  // Make.com: Core plan (£8.00 / mo)
  const makeCost = 8.0;
  // Wappi WhatsApp Gateway: Flat instance fee (~£18.00 / mo)
  const wappiCost = 18.0;

  const totalMonthlySoftwareCost = +(twilioCost + retellCost + makeCost + wappiCost).toFixed(2);
  const costPerCall = +(totalMonthlySoftwareCost / (monthlyCalls || 1)).toFixed(2);

  // Business Value: Without 24/7 AI answering, 22% of inbound trade calls are missed after-hours or on-site
  const recoveredInquiries = Math.round(monthlyCalls * 0.22);
  const closedJobs = Math.round(recoveredInquiries * (conversionRate / 100));
  const monthlyRevenueProtected = closedJobs * avgJobValue;
  const netMonthlyGain = monthlyRevenueProtected - totalMonthlySoftwareCost;
  const annualGain = netMonthlyGain * 12;

  return (
    <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 sm:p-6 shadow-2xs space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[var(--color-border)]">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
              Unit Economics
            </span>
            <span className="text-xs text-[var(--color-text-muted)]">
              Telephony Software Burn vs. Protected Trade Revenue
            </span>
          </div>
          <h2 className="text-base sm:text-lg font-bold tracking-tight text-[var(--color-text-primary)] mt-1">
            Telephony Operating Cost & Revenue Recovery Calculator
          </h2>
          <p className="text-xs text-[var(--color-text-secondary)]">
            Analyze the exact monthly run cost of Twilio, Retell, Make.com, and Wappi against the revenue of after-hours inquiries saved from going to competitors.
          </p>
        </div>

        <div className="text-right">
          <span className="text-[10px] font-mono text-[var(--color-text-muted)] block">
            Run Cost Per Call
          </span>
          <span className="text-lg font-bold font-mono text-indigo-600 dark:text-indigo-400">
            £{costPerCall} <span className="text-xs font-normal text-[var(--color-text-muted)]">/ call</span>
          </span>
        </div>
      </div>

      {/* Interactive Sliders & Live Results Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Input Sliders (6 cols) */}
        <div className="lg:col-span-6 space-y-5">
          {/* Slider 1: Monthly Calls */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-medium">
              <span className="text-[var(--color-text-primary)]">Inbound Phone Calls per Month</span>
              <span className="font-mono font-bold text-indigo-600 dark:text-indigo-400">
                {monthlyCalls} calls
              </span>
            </div>
            <input
              type="range"
              min="50"
              max="1500"
              step="25"
              value={monthlyCalls}
              onChange={(e) => setMonthlyCalls(parseInt(e.target.value))}
              className="w-full accent-indigo-600"
            />
            <div className="flex justify-between text-[10px] text-[var(--color-text-muted)] font-mono">
              <span>50</span>
              <span>750</span>
              <span>1,500</span>
            </div>
          </div>

          {/* Slider 2: Average Job / Order Value */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-medium">
              <span className="text-[var(--color-text-primary)]">Average Construction / Job Value</span>
              <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">
                £{avgJobValue.toLocaleString()}
              </span>
            </div>
            <input
              type="range"
              min="300"
              max="6000"
              step="100"
              value={avgJobValue}
              onChange={(e) => setAvgJobValue(parseInt(e.target.value))}
              className="w-full accent-emerald-600"
            />
            <div className="flex justify-between text-[10px] text-[var(--color-text-muted)] font-mono">
              <span>£300</span>
              <span>£3,000</span>
              <span>£6,000</span>
            </div>
          </div>

          {/* Slider 3: Conversion Rate */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-medium">
              <span className="text-[var(--color-text-primary)]">Inquiry to Booked Job Rate</span>
              <span className="font-mono font-bold text-violet-600 dark:text-violet-400">
                {conversionRate}%
              </span>
            </div>
            <input
              type="range"
              min="10"
              max="60"
              step="2"
              value={conversionRate}
              onChange={(e) => setConversionRate(parseInt(e.target.value))}
              className="w-full accent-violet-600"
            />
            <div className="flex justify-between text-[10px] text-[var(--color-text-muted)] font-mono">
              <span>10%</span>
              <span>35%</span>
              <span>60%</span>
            </div>
          </div>

          {/* Itemized Software Cost Breakdown */}
          <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-panel-subtle)] p-3.5 space-y-2">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[var(--color-text-secondary)]">
              Itemized Software Running Costs (Monthly)
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
              <div>
                <span className="text-[10px] text-[var(--color-text-muted)] block">Twilio SIP/DDI</span>
                <span className="font-mono font-semibold">£{twilioCost}</span>
              </div>
              <div>
                <span className="text-[10px] text-[var(--color-text-muted)] block">Retell Voice</span>
                <span className="font-mono font-semibold">£{retellCost}</span>
              </div>
              <div>
                <span className="text-[10px] text-[var(--color-text-muted)] block">Make.com Core</span>
                <span className="font-mono font-semibold">£{makeCost}</span>
              </div>
              <div>
                <span className="text-[10px] text-[var(--color-text-muted)] block">Wappi WhatsApp</span>
                <span className="font-mono font-semibold">£{wappiCost}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Net Value & ROI Card (6 cols) */}
        <div className="lg:col-span-6 rounded-xl border border-[var(--color-border)] bg-gradient-to-br from-indigo-500/5 via-emerald-500/5 to-transparent p-5 space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Net Business Impact (Glasgow HQ)
            </span>

            <div>
              <div className="text-3xl sm:text-4xl font-bold font-mono tabular-nums tracking-tight text-emerald-600 dark:text-emerald-400">
                +£{netMonthlyGain.toLocaleString()}{' '}
                <span className="text-xs font-normal text-[var(--color-text-muted)]">/ month</span>
              </div>
              <p className="text-xs text-[var(--color-text-secondary)] mt-1 font-medium">
                Annual Protected Value: <span className="font-bold text-[var(--color-text-primary)]">£{annualGain.toLocaleString()} / year</span>
              </p>
            </div>

            <div className="space-y-2 pt-2 text-xs text-[var(--color-text-secondary)]">
              <div className="flex items-center justify-between border-b border-[var(--color-border)]/60 pb-1.5">
                <span>Inquiries Captured After-Hours (22%)</span>
                <span className="font-mono font-bold text-[var(--color-text-primary)]">
                  {recoveredInquiries} calls
                </span>
              </div>
              <div className="flex items-center justify-between border-b border-[var(--color-border)]/60 pb-1.5">
                <span>Converted Closed Contracts ({conversionRate}%)</span>
                <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">
                  {closedJobs} contracts
                </span>
              </div>
              <div className="flex items-center justify-between border-b border-[var(--color-border)]/60 pb-1.5">
                <span>Total Multi-Vendor Software Cost</span>
                <span className="font-mono font-bold text-slate-500">
                  -£{totalMonthlySoftwareCost}
                </span>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 dark:text-emerald-300 text-xs flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
            <span>
              A single recovered emergency job (£1,450) covers <strong>over 18 months</strong> of complete telephony software costs!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
