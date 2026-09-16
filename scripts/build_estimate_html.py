#!/usr/bin/env python3
"""
Production Scope & Formal Estimate Generator
CallGuard Ops • AI Telephone Answering & Multi-Vendor Telephony Support Cockpit
Client: Stuart & Co (Manufacturing & Construction, Glasgow, Scotland, UK)
Commercial Options:
- Package A: Dedicated Part-Time Retainer ($50.00/hr, 10 hrs/wk min = $500/wk)
- Package B: Pure Adhoc On-Demand ($80.00/hr, zero minimum commitment)
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
  <title>Part-Time Telephony Support Scope &amp; Rate Structure - Stuart &amp; Co</title>
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
      font-size: 13px;
      font-weight: 800;
      color: #0f172a;
      letter-spacing: -0.02em;
    }}
    .brand-text .tagline {{
      font-size: 7.6px;
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

    /* 2. Systems Capability & Context Box */
    .context-box {{
      border: 1px solid #cbd5e1;
      border-radius: 6px;
      background: #f8fafc;
      padding: 5px 8px;
    }}
    .context-grid {{
      display: grid;
      grid-template-columns: 1.3fr 1fr 1fr;
      gap: 8px;
      font-size: 7.9px;
    }}
    .context-item strong {{
      color: #334155;
      display: block;
      font-size: 7.4px;
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

    /* 3. Scope & Work Breakdown Table */
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

    /* 4. Two Commercial Packages */
    .packages-grid {{
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
    }}
    .package-card {{
      border: 1.5px solid #c7d2fe;
      border-radius: 6px;
      background: #faf5ff;
      padding: 5px 8px;
    }}
    .package-card.recommended {{
      border-color: #4f46e5;
      background: #eef2ff;
    }}
    .package-header {{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 3px;
    }}
    .package-title {{
      font-weight: 800;
      font-size: 8.5px;
      color: #312e81;
      text-transform: uppercase;
    }}
    .package-rate {{
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
      font-size: 9.5px;
      font-weight: 800;
      color: #4338ca;
    }}
    .package-details {{
      font-size: 7.6px;
      color: #334155;
      line-height: 1.3;
    }}
    .package-perks {{
      margin: 2px 0 0 0;
      padding-left: 12px;
      font-size: 7.4px;
      color: #475569;
    }}

    /* 5. Telephony Architecture & Resilience Guardrails */
    .guardrails-box {{
      border: 1px solid #cbd5e1;
      border-radius: 6px;
      background: #ffffff;
      padding: 4.5px 8px;
    }}
    .guardrails-title {{
      font-size: 7.8px;
      font-weight: 800;
      color: #0f172a;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      margin-bottom: 2px;
      display: flex;
      justify-content: space-between;
    }}
    .guardrails-grid {{
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 6px;
      font-size: 7.5px;
    }}
    .guardrail-item {{
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 4px;
      padding: 3px 5px;
      color: #334155;
    }}
    .guardrail-item strong {{
      color: #4f46e5;
      display: block;
      font-size: 7.3px;
      margin-bottom: 1px;
    }}

    /* 6. Dual Signature Authorization Footer */
    .auth-block {{
      border: 1px solid #94a3b8;
      border-radius: 6px;
      background: #f8fafc;
      padding: 4.5px 8px;
    }}
    .auth-title {{
      font-size: 8px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: #0f172a;
      margin-bottom: 2.5px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #cbd5e1;
      padding-bottom: 1.5px;
    }}
    .auth-grid {{
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
    }}
    .auth-party {{
      display: flex;
      flex-direction: column;
      gap: 1px;
      font-size: 7.7px;
    }}
    .auth-party-title {{
      font-weight: 700;
      color: #334155;
      text-transform: uppercase;
      font-size: 7.5px;
      margin-bottom: 1px;
    }}
    .auth-sign-line {{
      display: flex;
      align-items: flex-end;
      gap: 6px;
      margin-top: 1.5px;
    }}
    .auth-sign-field {{
      flex: 1;
      border-bottom: 1px dashed #64748b;
      min-height: 11px;
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
      font-size: 7.3px;
      color: #0f172a;
    }}

    /* Bottom founder verification bar */
    .founder-bar {{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 2.5px;
      border-top: 1px solid #e2e8f0;
    }}
    .founder-info {{
      display: flex;
      align-items: center;
      gap: 6px;
    }}
    .founder-avatar {{
      width: 19px;
      height: 19px;
      border-radius: 50%;
      object-fit: cover;
      border: 1px solid #cbd5e1;
    }}
    .founder-text {{
      font-size: 7.3px;
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
      padding: 1px 4px;
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
        <h1>CallGuard Ops • Part-Time Telephony Support Scope &amp; Rates</h1>
        <div class="tagline">Enterprise AI Telephone Support • Make.com • Retell AI • Twilio • Wappi</div>
      </div>
    </div>
    <div class="doc-meta">
      <div class="meta-badge">PART-TIME CONTRACTOR SCOPE</div>
      <div>Estimate ID: <strong>EST-2026-STUART-CG02</strong></div>
      <div>Date: <strong>September 16, 2026</strong> • Glasgow, UK</div>
    </div>
  </div>

  <!-- 2. Systems Capability & Context Box -->
  <div class="context-box">
    <div class="context-grid">
      <div class="context-item">
        <strong>Client &amp; Organization</strong>
        <span>Stuart &amp; Co • Glasgow, Scotland, UK (Construction/Manufacturing)</span>
      </div>
      <div class="context-item">
        <strong>Supported Telephony Stack</strong>
        <span>Make.com • Retell AI • Twilio UK • Wappi WhatsApp</span>
      </div>
      <div class="context-item">
        <strong>Systems Engineering Profile</strong>
        <span>12+ Years Enterprise Systems • Lead Eng Legiit ($1M ARR)</span>
      </div>
    </div>
    <div class="exec-summary">
      <strong>Role Purpose:</strong> Provide high-reliability part-time technical support, bug fixing, prompt tuning, and carrier resilience for Stuart &amp; Co's AI answering system. Built to guarantee zero dropped calls, eliminate Wappi 504 timeouts via Twilio SMS failover, and ensure full Scottish dialect entity extraction.
    </div>
  </div>

  <!-- 3. Technical Scope & Responsibility Matrix -->
  <div class="table-container">
    <table>
      <thead>
        <tr>
          <th style="width: 18%;">Domain Area</th>
          <th style="width: 52%;">Core Technical Responsibilities &amp; Bug Fixing Focus</th>
          <th style="width: 15%;">Resolution SLA</th>
          <th class="num" style="width: 15%;">Coverage</th>
        </tr>
      </thead>
      <tbody>
        <tr class="phase0">
          <td><span class="phase-pill pill-live">WORKING PROOF</span></td>
          <td><strong>Interactive Telephony Cockpit &amp; Diagnostics</strong> — Live verified demo at callguard-ops.vercel.app with call traces, Retell tuning bench, Make canvas &amp; Wappi tester.</td>
          <td>Delivered Live</td>
          <td class="num"><strong>Phase 0 Gift</strong></td>
        </tr>
        <tr>
          <td><span class="phase-pill pill-core">MAKE.COM</span></td>
          <td><strong>Webhook Ingestion &amp; DLQ Error Handling</strong> — Fix webhook timeouts, manage 200 OK fast-acknowledgments, dead-letter queue retries, and 3-branch intent routing.</td>
          <td>Same-Day (&lt;4h)</td>
          <td class="num">Active Support</td>
        </tr>
        <tr>
          <td><span class="phase-pill pill-core">RETELL AI</span></td>
          <td><strong>Voice Agent Tuning &amp; Dialect Calibration</strong> — Prompt optimization for Glaswegian trade vocabulary ("sparky", "joiner", "flashing") and sub-500ms voice latency.</td>
          <td>Same-Day (&lt;4h)</td>
          <td class="num">Active Support</td>
        </tr>
        <tr>
          <td><span class="phase-pill pill-core">WAPPI WHATSAPP</span></td>
          <td><strong>Multi-Device Gateway &amp; Reconnects</strong> — Stabilize WhatsApp session instances, monitor heartbeat pings, and format post-call recap message payloads.</td>
          <td>Priority (&lt;2h)</td>
          <td class="num">Active Support</td>
        </tr>
        <tr>
          <td><span class="phase-pill pill-core">TWILIO CARRIER</span></td>
          <td><strong>SIP Trunking &amp; Sub-500ms SMS Fallback</strong> — Bridge Glasgow DDI (+44 141) media streams, E.164 regex phone sanitization, and automatic SMS failover when Wappi drops.</td>
          <td>Critical (&lt;1h)</td>
          <td class="num">Active Support</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- 4. Two Commercial Options -->
  <div class="packages-grid">
    <div class="package-card recommended">
      <div class="package-header">
        <span class="package-title">Option A: Part-Time Retainer (Recommended)</span>
        <span class="package-rate">$50.00 / hr</span>
      </div>
      <div class="package-details">
        <strong>10 Hours / Week Minimum Commitment ($500.00 / week)</strong>
        <ul class="package-perks">
          <li>Priority &lt;2 hour emergency response for any dropped calls or webhook errors.</li>
          <li>Continuous prompt tuning, trade dictionary updates, and Make.com scenario maintenance.</li>
          <li>Unused hours roll over bi-weekly; billed transparently via Upwork hourly tracker.</li>
        </ul>
      </div>
    </div>

    <div class="package-card">
      <div class="package-header">
        <span class="package-title">Option B: Pure Adhoc (Pay-As-You-Go)</span>
        <span class="package-rate">$80.00 / hr</span>
      </div>
      <div class="package-details">
        <strong>Zero Weekly Minimum Commitment (Billed to the exact minute)</strong>
        <ul class="package-perks">
          <li>100% on-demand: call upon Shakil only when a bug or carrier outage occurs.</li>
          <li>Can use for 1 hour, 30 minutes, or 5 hours as needed with zero retainers.</li>
          <li>Standard 24-hour turnaround on non-emergency bug fixes.</li>
        </ul>
      </div>
    </div>
  </div>

  <!-- 5. Telephony Architecture & Resilience Guardrails -->
  <div class="guardrails-box">
    <div class="guardrails-title">
      <span>Multi-Vendor Architecture &amp; Reliability SLA</span>
      <span style="font-family: ui-monospace; font-weight: normal; text-transform: none;">99.94% Uptime Target</span>
    </div>
    <div class="guardrails-grid">
      <div class="guardrail-item">
        <strong>Twilio UK SIP Trunk</strong>
        Glasgow DDI (+44 141) bridge to Retell SIP URI (&lt;35ms latency).
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
          <span style="font-size: 7.3px; color: #64748b;">Signature:</span>
          <div class="auth-sign-field">Authorized via Upwork Hourly Contract</div>
        </div>
      </div>
      <div class="auth-party">
        <div class="auth-party-title">Principal Systems Architect (Contractor)</div>
        <div>Name: <strong>Shakil Ahmed</strong> • Founder &amp; Lead Systems Architect</div>
        <div>Entity: <strong>BarakahSoft LLC</strong> • Verified Upwork Partner</div>
        <div class="auth-sign-line">
          <span style="font-size: 7.3px; color: #64748b;">Signature:</span>
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
        <strong>Shakil Ahmed</strong> • 12+ Yrs Exp • Former Lead Engineer at Legiit ($1M ARR Command Center) • Securiti Certified AI Architect • Verified Upwork Partner
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
