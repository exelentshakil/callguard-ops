# Product Requirements Document (PRD)
## CallGuard Ops • AI Telephone Answering & Telephony Support Cockpit

---

### Executive Overview & Client Context
- **Client Organization**: Stuart & Co (Mid-Sized UK Manufacturing & Construction, Glasgow, Scotland, UK).
- **Client Spend & Track Record**: $99k total spend, 14 hires, 5,176 hours billed, 65% hire rate, payment verified.
- **Client Contact**: Stuart (Business Owner & Director).
- **Stack Mandate**: Make.com, Retell AI, Twilio, Wappi (WhatsApp Cloud API Gateway).
- **Target Role**: AI Software Support Officer (Adhoc Technical Support, Bug Fixing, Resilience Engineering).
- **Defensibility Hook**: *"Our answering system uses current software from Make, Retell, Twilio, Wappi to support the phone system."* AI telephone answering systems fail silently when Retell webhooks timeout, Scottish trade terminology is misunderstood, or Wappi WhatsApp sessions drop without SMS fallback. CallGuard Ops gives Stuart instant multi-vendor observability, real-time prompt tuning, Make.com dead-letter queue error recovery, and automatic Twilio SMS failover.

---

### 100-Person Virtual Studio Team Discovery

#### 1. Lead Product Designer
- **Design Archetype**: Linear Engineering Dark/Light Architecture (`slate` neutral palette with `indigo/violet` signal accents).
- **Visual Clarity**: Single-glance multi-vendor status pills (Twilio, Retell, Make, Wappi).
- **Zero AI Slop**: Strict anti-wrapping badges, tabular monospace data blocks, and hair-line borders.

#### 2. Systems Architect
- **End-to-End Pipeline**: Twilio UK SIP Trunk -> Retell AI Voice Agent -> Make.com Webhook Ingestion -> Dual-Model AI Entity Extractor -> Wappi WhatsApp Dispatch + Twilio SMS Circuit Breaker.
- **Idempotency & Resilience**: SHA-256 hashed call IDs preventing duplicate CRM entries; exponential backoff dead-letter queue (DLQ) in Make.com.
- **Failover SLA**: Sub-second failover from Wappi WhatsApp to Twilio SMS if Wappi returns 5xx or drops session.

#### 3. Full-Stack Programmer
- **Tech Stack**: Next.js 15.5 App Router, TypeScript, Tailwind CSS v4, Radix UI primitives.
- **Defensive Typing**: Strict TypeScript interfaces for Retell `call_analyzed` payloads, Make.com blueprint nodes, and Wappi message objects.
- **Local Persistence**: State preserved across page refreshes via client-side storage.

#### 4. AI Research Specialist
- **Dual-Model Fallback Chain**: Primary OpenAI `gpt-4o-mini` (480ms latency) -> Secondary Google Gemini `gemini-2.0-flash` (510ms latency) -> Offline Scottish Trade Deterministic Rule Engine (0ms latency, 100% offline uptime).
- **Dialect Adaptation**: Glaswegian trade vocabulary tuning ("sparky" -> electrician, "joiner" -> carpentry, "flashing" -> leadwork roofing, "consumer unit" -> electrical fusebox).
- **AI Governance**: NIST AI RMF 100-1 and OWASP Top 10 for LLMs inline sanitization (PII redaction of credit cards and UK phone numbers).

#### 5. Motion / Telephony Engineer
- **Telemetry Display**: Interactive audio waveform player simulating Glaswegian caller audio.
- **Scenario Workbench**: Interactive 6-node Make.com visual canvas showing data packet flow and error handler branches.

#### 6. Product Marketer & Deal Closer
- **ROI Justification**: Telephony software run cost (£73.50/mo) vs. 4-6 recovered high-ticket after-hours trade jobs (£5,000–£12,000/mo gross revenue).
- **Client Code Ownership**: 100% exportable Make.com blueprints, Retell prompt configs, and Twilio scripts with zero vendor lock-in.

#### 7. End-User / Operations QA
- **Auditing Tools**: Real-time Chaos Engineering Simulator testing 4 critical failure modes with single-click verification.
- **Global Keyboard Navigation**: ⌘K Command Palette for sub-second jumping across sections.

---

### Core Technical Pillars

#### Pillar 1: Multi-Carrier Telephony Ingestion
- **Twilio UK SIP Trunking**: Direct SIP forwarding from Glasgow DDI (+44 141) numbers to Retell AI SIP URI.
- **E.164 Phone Normalizer**: Make.com regex utility stripping leading zeros and spaces to enforce `+44` international formatting for downstream CRM and WhatsApp dispatch.

#### Pillar 2: Scottish Dialect & Trade Voice Tuning
- **Voice Engine**: Retell AI v2.4 powered by ElevenLabs Turbo v2 (Scottish natural dialect) and Deepgram Nova-2 STT.
- **Latency Target**: Sub-500ms voice round-trip latency.
- **Structured Extraction**: Custom variables schema extracting caller name, trade discipline, site address/postcode, and urgency score.

#### Pillar 3: Make.com Scenario Orchestration & DLQ
- **Custom Webhook Intake**: Instant 200 OK acknowledgment to Retell AI to prevent webhook retry storms.
- **3-Branch Intent Router**:
  - Branch 1: High-Urgency Emergency (instant SMS + WhatsApp dispatch to on-call manager).
  - Branch 2: Standard Trade Quote (CRM logging + customer quote confirmation).
  - Branch 3: Supplier / General Enquiry (office inbox routing).
- **Dead-Letter Queue (DLQ)**: Automatic retry handler with exponential backoff on CRM or API timeouts.

#### Pillar 4: Wappi WhatsApp Hub & SMS Fallback
- **Wappi Multi-Device API**: Post-call WhatsApp summary dispatch with interactive quote approval links.
- **Automatic Circuit Breaker**: If Wappi returns HTTP 4xx/5xx or session disconnects, Make.com automatically reroutes the message to Twilio UK SMS carrier gateway within 450ms.

---

### Acceptance Criteria & Verification Matrix
1. **Interactive Call Session Inspector**: Live playback and transcript review of 4 authentic Scottish trade calls.
2. **Real AI Prompt Tuning Bench**: Live parameter adjustments (temperature, latency sensitivity) triggering actual dual-provider LLM inference.
3. **Make.com Scenario Workbench**: Visual representation of the 6-node scenario with interactive error simulations.
4. **Wappi Gateway Monitor**: Live status check, QR reconnect modal, test message dispatcher, and simulated WhatsApp chat preview.
5. **Chaos Simulator**: 4 automated resilience tests (Wappi 504, Retell timeout, E.164 formatting fault, Scottish dialect stress).
6. **Turnkey Blueprints**: One-click download of Make.com JSON scenario, Retell agent spec, Twilio handler, and Wappi module.
