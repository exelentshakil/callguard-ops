# Production Scope & Formal Estimate
## CallGuard Ops • AI Telephone Answering Support & Telephony Cockpit
**Estimate ID**: `EST-2026-STUART-CG01`  
**Date**: September 16, 2026  
**Client**: Stuart & Co (Manufacturing & Construction, Glasgow, Scotland, UK)  
**Principal Systems Architect**: Shakil Ahmed • BarakahSoft LLC (Verified Upwork Partner, 12+ Yrs Exp)  
**Calibrated Rate**: $32.00 / hr (Calibrated within client comfort zone, market average $30.54/hr)

---

### Executive Summary
Stuart & Co operates an AI telephone answering system powered by Make.com, Retell AI, Twilio, and Wappi WhatsApp gateway. This engagement stabilizes the entire telephony pipeline by resolving webhook dropouts, implementing Make.com dead-letter queues (DLQ), tuning Retell prompts for Scottish trade dialects, normalizing Glasgow landlines to international E.164 format, and establishing an automatic sub-second failover to Twilio SMS whenever Wappi experiences session drops or HTTP 504 timeouts.

---

### Two-Track Engagement Model

#### Track 1: Initial Stabilization Sprint (Capped 30 Hours @ $32/hr = $960.00)
10-day targeted stabilization package covering all 4 telephony layers:

| Phase / Milestone | Core Deliverables & Technical Scope | Duration | Hours | Amount |
| :--- | :--- | :--- | :---: | :---: |
| **Phase 0** | **Interactive Telephony Cockpit & Multi-Vendor Audit**<br>Working prototype deployed at `callguard-ops.vercel.app` with real-time call trace inspector, Retell prompt tuning bench, Make.com visual canvas, and Wappi monitor. | Immediate | 0.0 hrs | **$0.00 (Gift)** |
| **Milestone 1** | **Make.com Scenario Audit & Dead-Letter Queue (DLQ)**<br>Fix webhook timeouts, add 200 OK fast-acknowledgment, build exponential retry queues, and optimize 3-branch intent router (Emergency / Quote / General). | 2 Days | 6.0 hrs | $192.00 |
| **Milestone 2** | **Retell AI Scottish Voice Tuning & Latency Bench**<br>Tune system prompt for Glaswegian trade vocabulary ("sparky", "joiner", "flashing", "consumer unit"), optimize ElevenLabs Turbo v2 latency to <500ms voice turnaround. | 2 Days | 7.0 hrs | $224.00 |
| **Milestone 3** | **Wappi WhatsApp API & Twilio SMS Failover Router**<br>Stabilize Wappi multi-device session, add automatic reconnect handler, and build Make.com router branch to trigger Twilio UK SMS within 450ms on Wappi 5xx errors. | 2 Days | 6.0 hrs | $192.00 |
| **Milestone 4** | **E.164 Scottish Number Normalizer & CRM Pipeline**<br>Regex sanitization of Glasgow DDI landlines (`0141` -> `+44141`), Google Sheets / CRM lead sync, deduplication, and UK postcode routing. | 2 Days | 5.0 hrs | $160.00 |
| **Milestone 5** | **Multi-Vendor Chaos Testing & Operational Handover**<br>Simulated fault injection across all 4 vendors, comprehensive runbook documentation, and team onboarding for adhoc support. | 2 Days | 6.0 hrs | $192.00 |
| **TOTAL** | **Capped 30-Hour Stabilization Sprint** | **10 Days** | **30.0 hrs** | **$960.00** |

#### Track 2: Ongoing Adhoc Support Retainer (5–10 hrs/week @ $32/hr)
- **Monthly Budget**: $640.00 – $1,280.00 / month.
- **Scope**: On-demand bug fixes, prompt revisions for new trade services, carrier number porting assistance, and quarterly scenario optimizations.
- **Commitment**: Zero minimum lock-in; billable on actual hours via Upwork hourly contract.

---

### Multi-Vendor SLA & Resilience Architecture
- **Twilio UK Carrier SIP Trunk**: Glasgow DDI (+44 141) bridge to Retell SIP URI (<35ms latency).
- **Retell AI Voice Engine**: ElevenLabs Turbo v2 Scottish Voice, sub-500ms turnaround.
- **Make.com DLQ**: Exponential backoff retry queue ensuring 0 dropped call events.
- **Wappi + Twilio SMS**: WhatsApp dispatch with sub-500ms automated SMS failover.

---

### Commercial Terms & Credentials
- **Code Ownership**: 100% client account ownership. Make blueprints, Retell prompt schemas, and Twilio scripts exported directly to client repositories.
- **Warranty**: 14-day zero-defect warranty covering all bug fixes post-handover.
- **Systems Architect**: Shakil Ahmed • 12+ Years Enterprise Systems Engineering • Securiti Certified AI Security & Governance Architect (Cert ID: `14B411BCE-14B411A3D-1451CFE76`) • Verified Upwork Partner (Never "Top Rated").
