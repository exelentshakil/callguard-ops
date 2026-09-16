#!/usr/bin/env python3
"""
Production Scope & Formal Estimate Generator
CallGuard Ops • AI Telephone Answering & Multi-Vendor Telephony Support Cockpit
Client: Stuart & Co (Manufacturing & Construction, Glasgow, Scotland, UK)
Two-Track Engagement Model: Initial Stabilization Sprint (30 hrs @ $32/hr = $960.00) + Adhoc Retainer
Built to exact BarakahSoft Gold-Standard Architecture:
- 6 Direct Flex Children (Zero Middle Void)
- High-Density 6-Row Scope Table with Percentage Allocations
- Verified Upwork Partner Credentials (Never "Top Rated")
- Dual Signature Block with Formal Authorization
- Inlined Base64 Assets and Headless Chrome Single-Page PDF Audit
"""

import os
import re
import base64
import subprocess
import sys

def build_estimate():
    current_dir = os.path.dirname(os.path.abspath(__file__))
    project_dir = os.path.abspath(os.path.join(current_dir, ".."))
    docs_dir = os.path.join(project_dir, "docs")
    html_path = os.path.join(docs_dir, "estimate.html")
    pdf_path = os.path.join(docs_dir, "ESTIMATE.pdf")

    headshot_file = os.path.join(docs_dir, "headshot.jpeg")
    logo_file = os.path.join(docs_dir, "logo.png")

    with open(headshot_file, "rb") as f:
        headshot_b64 = base64.b64encode(f.read()).decode("utf-8")

    with open(logo_file, "rb") as f:
        logo_b64 = base64.b64encode(f.read()).decode("utf-8")

    html_content = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Production Scope &amp; Formal Estimate - CallGuard Ops Telephony Support</title>
  <style>
    @page {{
      size: letter portrait;
      margin: 6mm 8.5mm 6mm 8.5mm;
    }}
    * {{
      box-sizing: border-box;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }}
    html, body {{
      margin: 0;
      padding: 0;
      height: 100%;
      background: #ffffff;
      overflow: hidden;
    }}
    body {{
      font-family: -apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      color: #0f172a;
      line-height: 1.25;
      font-size: 8.4px;
    }}
    .sheet {{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      max-height: 100%;
      padding: 0;
      box-sizing: border-box;
    }}

    /* 1. Header Component */
    .header {{
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 2px solid #4f46e5;
      padding-bottom: 5px;
    }}
    .brand-group {{
      display: flex;
      align-items: center;
      gap: 8px;
    }}
    .brand-logo {{
      width: 28px;
      height: 28px;
      object-fit: contain;
    }}
    .brand-text h1 {{
      margin: 0;
      font-size: 13.5px;
      font-weight: 800;
      color: #0f172a;
      letter-spacing: -0.02em;
    }}
    .brand-text .tagline {{
      font-size: 7.8px;
      color: #64748b;
      font-weight: 500;
    }}
    .doc-meta {{
      text-align: right;
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
      font-size: 7.6px;
      color: #475569;
      line-height: 1.25;
    }}
    .meta-badge {{
      display: inline-block;
      background: #eef2ff;
      color: #4338ca;
      font-weight: 700;
      padding: 1.5px 5px;
      border-radius: 3px;
      border: 1px solid #c7d2fe;
      margin-bottom: 1.5px;
    }}

    /* 2. Project Context Box */
    .context-box {{
      border: 1px solid #cbd5e1;
      border-radius: 6px;
      background: #f8fafc;
      padding: 5px 8px;
    }}
    .context-grid {{
      display: grid;
      grid-template-columns: 1.2fr 1fr 1fr;
      gap: 8px;
      font-size: 7.9px;
    }}
    .context-item strong {{
      color: #334155;
      display: block;
      font-size: 7.5px;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      margin-bottom: 1px;
    }}
    .context-item span {{
      color: #0f172a;
      font-weight: 600;
    }}
    .exec-summary {{
      margin-top: 3.5px;
      padding-top: 3.5px;
      border-top: 1px solid #e2e8f0;
      font-size: 7.8px;
      color: #334155;
      line-height: 1.25;
    }}

    /* 3. Scope & Milestone Table */
    .table-container {{
      border: 1px solid #cbd5e1;
      border-radius: 6px;
      overflow: hidden;
      background: #ffffff;
    }}
    table {{
      width: 100%;
      border-collapse: collapse;
      font-size: 7.8px;
    }}
    th {{
      background: #0f172a;
      color: #ffffff;
      font-weight: 700;
      text-align: left;
      padding: 3.5px 6px;
      font-size: 7.6px;
      letter-spacing: 0.03em;
      text-transform: uppercase;
    }}
    th.num {{
      text-align: right;
    }}
    td {{
      padding: 3.5px 6px;
      border-bottom: 1px solid #f1f5f9;
      color: #1e293b;
      vertical-align: middle;
    }}
    tr:last-child td {{
      border-bottom: none;
    }}
    tr.phase0 {{
      background: #f5f3ff;
      font-weight: 600;
    }}
    tr.total-row {{
      background: #eef2ff;
      font-weight: 800;
      border-top: 1.5px solid #4f46e5;
    }}
    td.num {{
      text-align: right;
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    }}
    .phase-pill {{
      display: inline-block;
      padding: 1px 4px;
      border-radius: 3px;
      font-size: 7.2px;
      font-weight: 700;
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    }}
    .pill-live {{
      background: #dcfce7;
      color: #166534;
      border: 1px solid #86efac;
    }}
    .pill-core {{
      background: #e0e7ff;
      color: #3730a3;
      border: 1px solid #c7d2fe;
    }}

    /* 4. Architecture & Guardrails */
    .guardrails-box {{
      border: 1px solid #c7d2fe;
      border-radius: 6px;
      background: #faf5ff;
      padding: 5px 8px;
    }}
    .guardrails-title {{
      font-size: 8px;
      font-weight: 800;
      color: #4338ca;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      margin-bottom: 2.5px;
      display: flex;
      justify-content: space-between;
    }}
    .guardrails-grid {{
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 6px;
      font-size: 7.6px;
    }}
    .guardrail-item {{
      background: #ffffff;
      border: 1px solid #e0e7ff;
      border-radius: 4px;
      padding: 3.5px 5px;
      color: #334155;
    }}
    .guardrail-item strong {{
      color: #4f46e5;
      display: block;
      font-size: 7.4px;
      margin-bottom: 1px;
    }}

    /* 5. Commercial Terms & Retainer */
    .terms-box {{
      border: 1px solid #cbd5e1;
      border-radius: 6px;
      background: #ffffff;
      padding: 4.5px 8px;
    }}
    .terms-grid {{
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 7px;
    }}
    .term-col {{
      font-size: 7.7px;
      line-height: 1.2;
    }}
    .term-title {{
      font-weight: 800;
      color: #4f46e5;
      text-transform: uppercase;
      font-size: 7.6px;
      margin-bottom: 1px;
    }}
    .term-body {{
      color: #475569;
    }}

    /* 6. Dual Signature Authorization Footer */
    .auth-block {{
      border: 1px solid #94a3b8;
      border-radius: 6px;
      background: #f8fafc;
      padding: 5px 8px;
    }}
    .auth-title {{
      font-size: 8.2px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: #0f172a;
      margin-bottom: 3px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #cbd5e1;
      padding-bottom: 2px;
    }}
    .auth-grid {{
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
    }}
    .auth-party {{
      display: flex;
      flex-direction: column;
      gap: 1.5px;
      font-size: 7.8px;
    }}
    .auth-party-title {{
      font-weight: 700;
      color: #334155;
      text-transform: uppercase;
      font-size: 7.6px;
      margin-bottom: 1px;
    }}
    .auth-sign-line {{
      display: flex;
      align-items: flex-end;
      gap: 6px;
      margin-top: 2px;
    }}
    .auth-sign-field {{
      flex: 1;
      border-bottom: 1px dashed #64748b;
      min-height: 12px;
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
      font-size: 7.4px;
      color: #0f172a;
    }}

    /* Bottom founder verification bar */
    .founder-bar {{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 3px;
      border-top: 1px solid #e2e8f0;
    }}
    .founder-info {{
      display: flex;
      align-items: center;
      gap: 6px;
    }}
    .founder-avatar {{
      width: 20px;
      height: 20px;
      border-radius: 50%;
      object-fit: cover;
      border: 1px solid #cbd5e1;
    }}
    .founder-text {{
      font-size: 7.4px;
      color: #475569;
    }}
    .founder-text strong {{
      color: #0f172a;
    }}
    .demo-link {{
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
      font-size: 7.5px;
      color: #4f46e5;
      font-weight: 700;
      text-decoration: none;
      background: #eef2ff;
      padding: 1.5px 5px;
      border-radius: 3px;
      border: 1px solid #c7d2fe;
    }}
  </style>
</head>
<body>
<div class="sheet">

  <!-- 1. Header Component -->
  <div class="header">
    <div class="brand-group">
      <img src="data:image/png;base64,{logo_b64}" alt="BarakahSoft" class="brand-logo" />
      <div class="brand-text">
        <h1>CallGuard Ops • Production Telephony Scope &amp; Estimate</h1>
        <div class="tagline">Enterprise AI Telephone Support • Make.com • Retell AI • Twilio • Wappi</div>
      </div>
    </div>
    <div class="doc-meta">
      <div class="meta-badge">STABILIZATION SPRINT SCOPE</div>
      <div>Estimate ID: <strong>EST-2026-STUART-CG01</strong></div>
      <div>Date: <strong>September 16, 2026</strong> • Glasgow, UK</div>
    </div>
  </div>

  <!-- 2. Project Context Box -->
  <div class="context-box">
    <div class="context-grid">
      <div class="context-item">
        <strong>Client Organization &amp; Location</strong>
        <span>Stuart &amp; Co • Glasgow, Scotland, UK (Mid-Sized Construction)</span>
      </div>
      <div class="context-item">
        <strong>Primary Answering Stack</strong>
        <span>Make.com • Retell AI • Twilio UK • Wappi WhatsApp</span>
      </div>
      <div class="context-item">
        <strong>Calibrated Rate &amp; Terms</strong>
        <span>$32.00 / hr (Capped 30-Hr Sprint: $960.00)</span>
      </div>
    </div>
    <div class="exec-summary">
      <strong>Scope Objective:</strong> Deliver immediate bug fixes, webhook resilience, and carrier failover for Stuart &amp; Co's AI answering system. Eliminates dropped calls, Wappi WhatsApp 504 timeouts (with instant Twilio SMS fallback), unhandled Scottish landlines (E.164 regex), and misrouted Scottish trade terms.
    </div>
  </div>

  <!-- 3. Scope & Milestone Table (Mandatory 6 Rows) -->
  <div class="table-container">
    <table>
      <thead>
        <tr>
          <th style="width: 16%;">Milestone</th>
          <th style="width: 48%;">Core Deliverables &amp; Technical Scope</th>
          <th style="width: 12%;">Duration</th>
          <th class="num" style="width: 12%;">Hours</th>
          <th class="num" style="width: 12%;">Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr class="phase0">
          <td><span class="phase-pill pill-live">PHASE 0</span></td>
          <td><strong>Interactive Telephony Cockpit &amp; Diagnostic Audit</strong> — Working live demo deployed with call traces, Retell tuning bench, Make canvas &amp; Wappi monitor.</td>
          <td>Immediate</td>
          <td class="num">0.0 hrs</td>
          <td class="num"><strong>$0.00 (Gift)</strong></td>
        </tr>
        <tr>
          <td><span class="phase-pill pill-core">MILESTONE 1</span></td>
          <td><strong>Make.com Scenario Audit &amp; Dead-Letter Queue (DLQ)</strong> — Fix webhook timeouts, implement exponential retry queues, and optimize 3-way intent router.</td>
          <td>2 Days</td>
          <td class="num">6.0 hrs</td>
          <td class="num">$192.00</td>
        </tr>
        <tr>
          <td><span class="phase-pill pill-core">MILESTONE 2</span></td>
          <td><strong>Retell AI Scottish Voice Tuning &amp; Latency Bench</strong> — Adapt system prompts for Glaswegian trade dialect, optimize ElevenLabs Turbo v2 (&lt;500ms voice round-trip).</td>
          <td>2 Days</td>
          <td class="num">7.0 hrs</td>
          <td class="num">$224.00</td>
        </tr>
        <tr>
          <td><span class="phase-pill pill-core">MILESTONE 3</span></td>
          <td><strong>Wappi WhatsApp Gateway &amp; Twilio SMS Failover</strong> — Stabilize multi-device sessions, add auto-reconnect, and route failed WhatsApp alerts to Twilio SMS in 450ms.</td>
          <td>2 Days</td>
          <td class="num">6.0 hrs</td>
          <td class="num">$192.00</td>
        </tr>
        <tr>
          <td><span class="phase-pill pill-core">MILESTONE 4</span></td>
          <td><strong>E.164 Scottish Number Normalizer &amp; CRM Pipeline</strong> — Regex sanitization of Glasgow DDI landlines (0141 -&gt; +44141), Google Sheets/Airtable sync &amp; deduplication.</td>
          <td>2 Days</td>
          <td class="num">5.0 hrs</td>
          <td class="num">$160.00</td>
        </tr>
        <tr>
          <td><span class="phase-pill pill-core">MILESTONE 5</span></td>
          <td><strong>Multi-Vendor Chaos Testing, Runbook &amp; Handover</strong> — End-to-end fault injection testing, operational documentation, and adhoc maintenance onboarding.</td>
          <td>2 Days</td>
          <td class="num">6.0 hrs</td>
          <td class="num">$192.00</td>
        </tr>
        <tr class="total-row">
          <td colspan="3"><strong>TOTAL PRODUCTION SCOPE (CAPPED STABILIZATION SPRINT)</strong></td>
          <td class="num"><strong>30.0 hrs</strong></td>
          <td class="num"><strong>$960.00</strong></td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- 4. Architecture & Resilience Matrix -->
  <div class="guardrails-box">
    <div class="guardrails-title">
      <span>Multi-Vendor Architecture &amp; Reliability SLA</span>
      <span style="font-family: ui-monospace; font-weight: normal; text-transform: none;">99.94% Uptime Target</span>
    </div>
    <div class="guardrails-grid">
      <div class="guardrail-item">
        <strong>Twilio UK SIP Trunk</strong>
        Glasgow DDI (+44 141) direct bridge to Retell SIP URI (&lt;35ms latency).
      </div>
      <div class="guardrail-item">
        <strong>Retell Voice Agent</strong>
        ElevenLabs Turbo v2 Scottish model, sub-500ms voice turnaround.
      </div>
      <div class="guardrail-item">
        <strong>Make.com Scenarios</strong>
        DLQ exponential backoff retry; 0 dropped webhooks on network blips.
      </div>
      <div class="guardrail-item">
        <strong>Wappi WhatsApp + SMS</strong>
        WhatsApp dispatch with 450ms automatic failover to Twilio SMS.
      </div>
    </div>
  </div>

  <!-- 5. Commercial Terms & Retainer Option -->
  <div class="terms-box">
    <div class="terms-grid">
      <div class="term-col">
        <div class="term-title">Sprint Delivery</div>
        <div class="term-body">10-day turnaround. Milestone releases verified against live call test scripts.</div>
      </div>
      <div class="term-col">
        <div class="term-title">Two-Track Retainer</div>
        <div class="term-body">Optional adhoc support at $32/hr (5-10 hrs/week) post-stabilization. Zero lock-in.</div>
      </div>
      <div class="term-col">
        <div class="term-title">Code Ownership</div>
        <div class="term-body">100% client account ownership. Make blueprints and Retell JSON exported.</div>
      </div>
      <div class="term-col">
        <div class="term-title">Post-Launch Warranty</div>
        <div class="term-body">14-day zero-defect warranty covering all bug fixes and scenario tuning.</div>
      </div>
    </div>
  </div>

  <!-- 6. Formal Acceptance Authorization & Dual Signatures -->
  <div class="auth-block">
    <div class="auth-title">
      <span>Mutual Engagement Authorization &amp; Sign-off</span>
      <span style="font-size: 7.2px; font-weight: normal; color: #64748b;">Governed under Upwork Hourly Contract Terms</span>
    </div>
    <div class="auth-grid">
      <div class="auth-party">
        <div class="auth-party-title">Client Representative (Stuart &amp; Co)</div>
        <div>Name: <strong>Stuart</strong> • Owner / Director</div>
        <div>Entity: <strong>Stuart &amp; Co Manufacturing &amp; Construction</strong> (Glasgow, UK)</div>
        <div class="auth-sign-line">
          <span style="font-size: 7.4px; color: #64748b;">Signature:</span>
          <div class="auth-sign-field">Authorized via Upwork Milestone / Contract Acceptance</div>
        </div>
      </div>
      <div class="auth-party">
        <div class="auth-party-title">Principal Systems Architect (Contractor)</div>
        <div>Name: <strong>Shakil Ahmed</strong> • Founder &amp; Lead Systems Architect</div>
        <div>Entity: <strong>BarakahSoft LLC</strong> • Verified Upwork Partner</div>
        <div class="auth-sign-line">
          <span style="font-size: 7.4px; color: #64748b;">Signature:</span>
          <div class="auth-sign-field">Shakil Ahmed (Digital Verification: BarakahSoft LLC)</div>
        </div>
      </div>
    </div>
  </div>

  <!-- Founder Verification Bar -->
  <div class="founder-bar">
    <div class="founder-info">
      <img src="data:image/jpeg;base64,{headshot_b64}" alt="Shakil Ahmed" class="founder-avatar" />
      <div class="founder-text">
        <strong>Shakil Ahmed</strong> • 12+ Yrs Exp • Former Lead Engineer at Legiit ($1M ARR Command Center) • Securiti Certified AI Architect (Cert ID: 14B411BCE-14B411A3D-1451CFE76)
      </div>
    </div>
    <a href="https://callguard-ops.vercel.app" target="_blank" class="demo-link">
      callguard-ops.vercel.app
    </a>
  </div>

</div>
</body>
</html>
"""

    with open(html_path, "w", encoding="utf-8") as f:
        f.write(html_content)

    print("Saved estimate.html to:", html_path)

    # Compile with Headless Chrome using absolute file URI
    chrome_cmd = [
        "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
        "--headless",
        "--disable-gpu",
        "--no-pdf-header-footer",
        f"--print-to-pdf={pdf_path}",
        f"file://{os.path.abspath(html_path)}"
    ]

    res = subprocess.run(chrome_cmd, capture_output=True, text=True)
    if res.returncode == 0:
        print("Successfully generated ESTIMATE.pdf via Chrome Headless at:", pdf_path)
        print("File size:", os.path.getsize(pdf_path), "bytes")
    else:
        print("Chrome print-to-pdf error:", res.stderr, file=sys.stderr)
        sys.exit(1)

    # Verify page count
    with open(pdf_path, "rb") as f:
        pdf_bytes = f.read()

    pages = re.findall(rb"/Type\s*/Page[^s]", pdf_bytes)
    print(f"Verified PDF page count: {len(pages)} page(s)")
    if len(pages) != 1:
        print(f"CRITICAL ERROR: Expected exactly 1 page, got {len(pages)}!", file=sys.stderr)
        sys.exit(1)

if __name__ == "__main__":
    build_estimate()
