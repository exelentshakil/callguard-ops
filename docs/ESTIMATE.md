# Part-Time Telephony Support Scope & Commercial Structure
## CallGuard Ops • AI Telephone Answering Support for Stuart & Co
**Estimate ID**: `EST-2026-STUART-CG02`  
**Date**: September 16, 2026  
**Client**: Stuart & Co (Manufacturing & Construction, Glasgow, Scotland, UK)  
**Principal Systems Architect**: Shakil Ahmed • BarakahSoft LLC (Verified Upwork Partner, 12+ Yrs Exp)  
**Supported Stack**: Make.com, Retell AI, Twilio UK, Wappi WhatsApp

---

### Executive Summary & Systems Profile
Shakil Ahmed brings 12+ years of enterprise systems engineering (former Lead Systems Engineer at Legiit where he scaled the command center to $1M ARR across 1,500+ businesses). 

For Stuart & Co's Glasgow telephone answering system, Shakil provides end-to-end technical support and bug fixing across Make.com, Retell AI, Twilio, and Wappi WhatsApp gateway to guarantee zero dropped calls, eliminate Wappi 504 timeouts via Twilio SMS failover, and ensure accurate Scottish trade dialect extraction.

---

### Scope & Technical Responsibilities

| Domain Layer | Core Technical Responsibilities & Bug Fixing Focus | Resolution SLA | Coverage |
| :--- | :--- | :---: | :---: |
| **Phase 0 (Working Proof)** | **Interactive Telephony Cockpit & Multi-Vendor Diagnostics**<br>Live working prototype at `callguard-ops.vercel.app` testing call traces, Retell tuning bench, Make.com canvas & Wappi tester. | Delivered Live | **Phase 0 Gift** |
| **Make.com** | **Webhook Ingestion & Dead-Letter Queue (DLQ) Retries**<br>Fix webhook dropouts, manage 200 OK fast-acknowledgments, dead-letter queue exponential backoff, and 3-way intent routing (Emergency / Quotes / General). | Same-Day (<4h) | Active Support |
| **Retell AI** | **Voice Agent Tuning & Dialect Calibration**<br>Prompt optimization for Glaswegian trade vocabulary ("sparky", "joiner", "flashing", "consumer unit") and sub-500ms voice round-trip latency. | Same-Day (<4h) | Active Support |
| **Wappi WhatsApp** | **Multi-Device Gateway & Reconnects**<br>Stabilize WhatsApp session instances, monitor heartbeat pings, and format post-call recap message payloads with quote links. | Priority (<2h) | Active Support |
| **Twilio Carrier** | **SIP Trunking & Sub-500ms SMS Fallback**<br>Bridge Glasgow DDI (+44 141) media streams to Retell SIP URI, E.164 regex phone sanitization, and automatic SMS failover when Wappi drops. | Critical (<1h) | Active Support |

---

### Two Commercial Options

#### Option A: Dedicated Part-Time Retainer (Recommended)
- **Hourly Rate**: **$50.00 / hr** (Matches client's top posted budget).
- **Minimum Commitment**: **10 Hours / Week ($500.00 / week)**.
- **SLA**: Priority <2 hour emergency response for any dropped calls or webhook errors.
- **Scope**: Includes ongoing prompt tuning, trade dictionary updates, Make.com scenario maintenance, and weekly health audits.
- **Billing**: Unused hours roll over bi-weekly; billed transparently via Upwork hourly tracker.

#### Option B: Pure Adhoc (Pay-As-You-Go)
- **Hourly Rate**: **$80.00 / hr** (Standard systems architect rate).
- **Minimum Commitment**: **Zero Minimum Commitment** (Billed to the exact minute).
- **Flexibility**: Can be used for 1 hour, 30 minutes, or 5 hours whenever a bug pops up.
- **SLA**: Standard 24-hour turnaround on non-emergency bug fixes.
- **Billing**: Billed strictly on actual time logged via Upwork desktop tracker.

---

### Multi-Vendor SLA & Resilience Architecture
- **Twilio UK Carrier SIP Trunk**: Glasgow DDI (+44 141) bridge to Retell SIP URI (<35ms latency).
- **Retell AI Voice Engine**: ElevenLabs Turbo v2 Scottish Voice, sub-500ms turnaround.
- **Make.com DLQ**: Exponential backoff retry queue ensuring 0 dropped call events.
- **Wappi + Twilio SMS**: WhatsApp dispatch with sub-500ms automated SMS failover.

---

### Verification & Credentials
- **Code Ownership**: 100% client account ownership. Make blueprints, Retell prompt schemas, and Twilio scripts exported directly to client repositories.
- **Systems Architect**: Shakil Ahmed • 12+ Years Enterprise Systems Engineering • Former Lead Engineer at Legiit ($1M ARR Command Center) • Securiti Certified AI Security & Governance Architect (Cert ID: `14B411BCE-14B411A3D-1451CFE76`) • Verified Upwork Partner (Never "Top Rated").
