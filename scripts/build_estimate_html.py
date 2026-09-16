#!/usr/bin/env python3
"""
Production Scope & Formal Estimate Generator
CallGuard Ops • AI Telephone Answering & Multi-Vendor Telephony Support Cockpit
Client: Stuart & Co (Manufacturing & Construction, Glasgow, Scotland, UK)
Two Commercial Engagement Packages:
- Option A (Recommended): Part-Time Support Retainer ($50.00/hr, 10 hrs/wk min = $500.00/wk)
- Option B (Pure Adhoc): On-Demand Technical Support ($80.00/hr, zero minimum commitment)
Built to exact BarakahSoft Gold-Standard Architecture:
- 6 Direct Flex Children (Zero Middle Void)
- High-Density 6-Row Scope Table with Light Slate Header (#f1f5f9)
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
      line-height: 1.32;
      font-size: 9.3px;
    }}

    .page-container {{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      box-sizing: border-box;
      gap: 5px;
    }}

    /* 1. Executive Header */
    .header {{
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 12px;
      border-bottom: 2px solid #4f46e5;
      padding-bottom: 5px;
    }}
    .header-left {{
      flex: 1;
      min-width: 0;
    }}
    .brand-title {{
      font-size: 8.5px;
      font-weight: 800;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      color: #4f46e5;
      margin-bottom: 2px;
      white-space: nowrap;
    }}
    h1 {{
      font-size: 13.5px;
      font-weight: 800;
      color: #0f172a;
      margin: 0 0 2px 0;
      letter-spacing: -0.02em;
      line-height: 1.18;
      white-space: nowrap;
    }}
    .subtitle {{
      font-size: 8.5px;
      color: #475569;
      margin: 0;
      line-height: 1.25;
      white-space: nowrap;
    }}
    .meta-card {{
      flex-shrink: 0;
      background: #f8fafc;
      border: 1px solid #cbd5e1;
      border-radius: 6px;
      padding: 5px 10px;
      font-size: 8.2px;
      text-align: right;
      line-height: 1.35;
      white-space: nowrap;
    }}
    .meta-card strong {{
      color: #0f172a;
    }}
    .live-badge {{
      display: inline-block;
      background: #e0e7ff;
      color: #3730a3;
      border: 1px solid #c7d2fe;
      font-weight: 700;
      padding: 1px 5px;
      border-radius: 9999px;
      font-size: 8px;
      text-transform: uppercase;
      margin-left: 3px;
    }}

    /* 2. Scope & Milestones Table */
    .scope-block {{
      margin-top: 0;
    }}
    .section-header {{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 3px;
    }}
    .section-title {{
      font-size: 9.4px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: #0f172a;
      border-left: 3px solid #4f46e5;
      padding-left: 6px;
      margin: 0;
    }}
    .section-meta {{
      font-size: 8.2px;
      color: #64748b;
      font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
    }}
    table {{
      width: 100%;
      border-collapse: collapse;
    }}
    th {{
      background: #f1f5f9;
      color: #334155;
      font-weight: 700;
      text-transform: uppercase;
      font-size: 8.1px;
      letter-spacing: 0.04em;
      border: 1px solid #cbd5e1;
      padding: 3.5px 6px;
      text-align: left;
    }}
    td {{
      border: 1px solid #e2e8f0;
      padding: 3.5px 6px;
      font-size: 8.4px;
      vertical-align: top;
    }}
    .phase-num {{
      font-weight: 800;
      color: #1e293b;
      font-size: 8.4px;
      white-space: nowrap;
    }}
    .phase-name {{
      font-weight: 700;
      color: #0f172a;
      font-size: 8.6px;
    }}
    .phase-desc {{
      color: #475569;
      font-size: 7.8px;
      margin-top: 1px;
      line-height: 1.2;
    }}
    .phase-0-row {{
      background: #f5f3ff;
    }}
    .phase-0-badge {{
      color: #4338ca;
      font-weight: 800;
    }}
    .total-row {{
      background: #0f172a;
      color: #ffffff;
      font-weight: 800;
      border: 1px solid #0f172a;
    }}
    .total-row td {{
      border: 1px solid #0f172a;
      padding: 4px 6px;
      font-size: 8.6px;
    }}

    /* 3. 2-Column Technical & Financial Breakdown */
    .grid-2col {{
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 6px;
    }}
    .card-box {{
      border: 1px solid #cbd5e1;
      border-radius: 6px;
      background: #fbfbfa;
      padding: 4.5px 8px;
    }}
    .card-box-title {{
      font-size: 8.3px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      color: #0f172a;
      margin: 0 0 2.5px 0;
      display: flex;
      align-items: center;
      gap: 4px;
      border-bottom: 1px solid #cbd5e1;
      padding-bottom: 2px;
    }}
    .milestone-item {{
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 6px;
      border-bottom: 1px dotted #cbd5e1;
      padding: 1.8px 0;
      font-size: 7.7px;
    }}
    .milestone-item:last-child {{
      border-bottom: none;
      padding-bottom: 0;
    }}
    .milestone-name {{
      color: #334155;
    }}
    .milestone-val {{
      font-weight: 800;
      color: #0f172a;
      font-family: ui-monospace, monospace;
      white-space: nowrap;
    }}
    .guardrail-item {{
      font-size: 7.7px;
      color: #334155;
      margin-bottom: 1.8px;
      padding-left: 10px;
      position: relative;
      line-height: 1.2;
    }}
    .guardrail-item:last-child {{
      margin-bottom: 0;
    }}
    .guardrail-item::before {{
      content: "✓";
      position: absolute;
      left: 0;
      color: #4f46e5;
      font-weight: 800;
      font-size: 7.5px;
    }}

    /* 4. Commercial Terms Section */
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

    /* 5. Formal Acceptance Authorization Block */
    .auth-block {{
      border: 1px solid #cbd5e1;
      border-radius: 6px;
      background: #fbfbfa;
      padding: 5px 10px;
    }}
    .auth-title {{
      font-size: 8.3px;
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
      gap: 2px;
      font-size: 7.8px;
    }}
    .auth-party-title {{
      font-weight: 700;
      color: #334155;
      text-transform: uppercase;
      font-size: 7.7px;
      margin-bottom: 1px;
    }}
    .auth-sign-line {{
      display: flex;
      align-items: flex-end;
      gap: 8px;
      margin-top: 2px;
    }}
    .auth-sign-field {{
      flex: 1;
      border-bottom: 1.2px solid #475569;
      min-height: 20px;
      display: flex;
      align-items: flex-end;
      font-family: "Brush Script MT", "Caveat", cursive, sans-serif;
      font-size: 13px;
      color: #0f172a;
      padding-left: 4px;
      padding-bottom: 1px;
    }}
    .auth-date-field {{
      width: 85px;
      border-bottom: 1.2px solid #475569;
      min-height: 20px;
      font-family: ui-monospace, monospace;
      font-size: 7.8px;
      color: #334155;
      text-align: center;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      padding-bottom: 1px;
      white-space: nowrap;
    }}
    .auth-label {{
      font-size: 6.9px;
      color: #64748b;
      text-transform: uppercase;
      margin-top: 1.5px;
    }}

    /* 6. Executive Signature Footer */
    .footer-container {{
      border: 1px solid #cbd5e1;
      border-radius: 6px;
      background: #fbfbfa;
      padding: 4.5px 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 12px;
    }}
    .footer-founder {{
      display: flex;
      align-items: center;
      gap: 8px;
      flex: 1;
      min-width: 0;
    }}
    .founder-avatar {{
      width: 32px;
      height: 32px;
      border-radius: 50%;
      object-fit: cover;
      border: 1.5px solid #4f46e5;
      flex-shrink: 0;
    }}
    .founder-info {{
      display: flex;
      flex-direction: column;
      gap: 1px;
      min-width: 0;
    }}
    .founder-name {{
      font-size: 8.6px;
      color: #0f172a;
      line-height: 1.18;
      white-space: nowrap;
    }}
    .founder-name strong {{
      color: #0f172a;
      font-weight: 800;
    }}
    .founder-company {{
      font-size: 7.8px;
      color: #334155;
      line-height: 1.18;
      white-space: nowrap;
    }}
    .founder-company strong {{
      color: #1e293b;
      font-weight: 700;
    }}
    .founder-sub {{
      font-size: 7.4px;
      color: #475569;
      line-height: 1.18;
      white-space: nowrap;
    }}
    .footer-brand {{
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 2px;
      flex-shrink: 0;
    }}
    .business-logo {{
      height: 16px;
      width: auto;
      object-fit: contain;
    }}
    .demo-badge {{
      font-size: 7.5px;
      color: #4338ca;
      background: #eef2ff;
      border: 1px solid #c7d2fe;
      padding: 1px 5px;
      border-radius: 3px;
      font-weight: 700;
      font-family: ui-monospace, monospace;
      text-decoration: none;
      white-space: nowrap;
    }}
  </style>
</head>
<body>
<div class="page-container">

  <!-- 1. Executive Header -->
  <div class="header">
    <div class="header-left">
      <div class="brand-title">BarakahSoft LLC • Systems Architecture • Ref #BS-2026-STUART-01</div>
      <h1>CallGuard Ops • AI Telephony Technical Support</h1>
      <p class="subtitle">4-Vendor Telephony Stack Management • Make.com • Retell AI • Twilio UK • Wappi WhatsApp</p>
    </div>
    <div class="meta-card">
      <div><strong>Client:</strong> Stuart &amp; Co (Manufacturing &amp; Construction · Glasgow, Scotland)</div>
      <div><strong>Role:</strong> Part-Time AI Telephony Technical Support Officer</div>
      <div><strong>Options:</strong> <strong>A: $50/hr (10h/wk min)</strong> | <strong>B: $80/hr (Adhoc On-Demand)</strong></div>
      <div><strong>Live Diagnostic Cockpit:</strong> <span class="live-badge">Verified &amp; Operational</span></div>
    </div>
  </div>

  <!-- 2. Scope Table -->
  <div class="scope-block">
    <div class="section-header">
      <h2 class="section-title">Technical Support Scope &amp; Operating Deliverables</h2>
      <div class="section-meta">Live Cockpit: https://callguard-ops.vercel.app</div>
    </div>

    <table>
      <thead>
        <tr>
          <th style="width: 12%;">Domain</th>
          <th style="width: 58%;">Engineering Deliverables, Continuous Maintenance &amp; Bug Fixing Focus</th>
          <th style="width: 10%; text-align: center;">Timeline</th>
          <th style="width: 8%; text-align: center;">Coverage</th>
          <th style="width: 12%; text-align: right;">Rate Base</th>
        </tr>
      </thead>
      <tbody>
        <tr class="phase-0-row">
          <td class="phase-num"><span class="phase-0-badge">Phase 0</span></td>
          <td>
            <div class="phase-name">Deployed CallGuard Ops Cockpit &amp; Diagnostic Suite (Delivered)</div>
            <div class="phase-desc">Living diagnostic cockpit: 4-vendor trace visualizer, Scottish dialect voice tuning bench, Make.com scenario workbench, Wappi WhatsApp gateway simulator, and chaos outage tester.</div>
          </td>
          <td style="text-align: center; font-weight: 700; white-space: nowrap;">Live Now</td>
          <td style="text-align: center; color: #4338ca; font-weight: 700;">Included</td>
          <td style="text-align: right; font-weight: 800; color: #4338ca;">$0.00 (Live)</td>
        </tr>
        <tr>
          <td class="phase-num">Phase 1</td>
          <td>
            <div class="phase-name">Retell AI Voice Agent Scottish Dialect &amp; Prompt Tuning</div>
            <div class="phase-desc">Optimize conversational prompt latency (&lt;500ms), calibrate Glasgow/Scottish trade vocabulary (sparky, joiner, flashing, stopcock), eliminate hallucinated trade quotes, and bind structured post-call variables.</div>
          </td>
          <td style="text-align: center; font-weight: 600;">Continuous</td>
          <td style="text-align: center; font-weight: 700;">Active</td>
          <td style="text-align: right; font-weight: 700;">Option A / B</td>
        </tr>
        <tr>
          <td class="phase-num">Phase 2</td>
          <td>
            <div class="phase-name">Make.com Scenario Hardening &amp; Dead-Letter Queue (DLQ) Resilience</div>
            <div class="phase-desc">Implement instant 200 OK webhook handshakes, Scottish E.164 phone normalizer (0141 -&gt; +44141), 3-tier intent router (Emergency / Quote / General), and auto-retry DLQ with exponential backoff on 504 timeouts.</div>
          </td>
          <td style="text-align: center; font-weight: 600;">Continuous</td>
          <td style="text-align: center; font-weight: 700;">Active</td>
          <td style="text-align: right; font-weight: 700;">Option A / B</td>
        </tr>
        <tr>
          <td class="phase-num">Phase 3</td>
          <td>
            <div class="phase-name">Wappi WhatsApp Gateway Session Management &amp; Sub-500ms Failover</div>
            <div class="phase-desc">Monitor multi-device WhatsApp token heartbeats, automate post-call recap message dispatches, and enforce zero-downtime sub-500ms failover to Twilio UK SMS if Wappi drops session or throws 5xx errors.</div>
          </td>
          <td style="text-align: center; font-weight: 600;">Continuous</td>
          <td style="text-align: center; font-weight: 700;">Active</td>
          <td style="text-align: right; font-weight: 700;">Option A / B</td>
        </tr>
        <tr>
          <td class="phase-num">Phase 4</td>
          <td>
            <div class="phase-name">Twilio UK SIP Trunking, Carrier Reliability &amp; Webhook Health</div>
            <div class="phase-desc">Maintain Glasgow DDI (+44 141) routing, media stream bidirectional bridging, caller ID sanitization, backup SIP trunk failover, and carrier compliance across UK mobile/landline networks.</div>
          </td>
          <td style="text-align: center; font-weight: 600;">Continuous</td>
          <td style="text-align: center; font-weight: 700;">Active</td>
          <td style="text-align: right; font-weight: 700;">Option A / B</td>
        </tr>
        <tr>
          <td class="phase-num">Phase 5</td>
          <td>
            <div class="phase-name">Incident Triage, Root-Cause Postmortems &amp; Proactive Health Audits</div>
            <div class="phase-desc">Rapid-response bug fixing, proactive weekly webhook log audits, Retell latency benchmarking, and preventative updates before vendor API changes impact live incoming client trade calls.</div>
          </td>
          <td style="text-align: center; font-weight: 600;">Continuous</td>
          <td style="text-align: center; font-weight: 700;">Active</td>
          <td style="text-align: right; font-weight: 700;">Option A / B</td>
        </tr>
        <tr class="total-row">
          <td colspan="2" style="font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em;">Total 4-Vendor Telephony Support Coverage (Make · Retell · Twilio · Wappi)</td>
          <td style="text-align: center; font-weight: 800; white-space: nowrap;">Ongoing</td>
          <td style="text-align: center; font-weight: 800;">100%</td>
          <td style="text-align: right; font-weight: 800; font-family: ui-monospace, monospace; font-size: 9.8px;">$50/h or $80/h</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- 3. 2-Column Technical & Financial Breakdown -->
  <div class="grid-2col">
    <div class="card-box">
      <div class="card-box-title">Operating Engagement: Two Commercial Packages</div>
      <div class="milestone-item">
        <span class="milestone-name">Option A (Recommended): Part-Time Retainer (10h/wk min)</span>
        <span class="milestone-val">$50.00/hr ($500/wk)</span>
      </div>
      <div class="milestone-item">
        <span class="milestone-name">Option B (Pure Adhoc): On-Demand Support (Zero min)</span>
        <span class="milestone-val">$80.00/hr (As Needed)</span>
      </div>
      <div class="milestone-item">
        <span class="milestone-name">Option A Emergency Response SLA (Call Drops / Outages)</span>
        <span class="milestone-val">&lt; 2 Hours Priority</span>
      </div>
      <div class="milestone-item">
        <span class="milestone-name">Weekly Proactive Webhook &amp; Gateway Health Audits</span>
        <span class="milestone-val">Included in Option A</span>
      </div>
      <div class="milestone-item">
        <span class="milestone-name">Upwork Work Diary Tracking &amp; Weekly Git Commits</span>
        <span class="milestone-val">100% Transparent</span>
      </div>
    </div>

    <div class="card-box">
      <div class="card-box-title">Deterministic Architecture Guardrails</div>
      <div class="guardrail-item"><strong>Zero Dropped Calls Guarantee:</strong> Sub-500ms auto-failover to Twilio SMS if Wappi drops connection.</div>
      <div class="guardrail-item"><strong>Fast 200 OK Handshakes:</strong> Decouples Retell from downstream webhooks to prevent call timeout drops.</div>
      <div class="guardrail-item"><strong>Scottish Trade Slang Lexicon:</strong> Specialized prompt engineering tuned for Glasgow &amp; West Scotland accents.</div>
      <div class="guardrail-item"><strong>Regex E.164 Normalization:</strong> Standardizes UK landlines (0141) and mobiles into international E.164.</div>
      <div class="guardrail-item"><strong>Securiti Certified AI Governance:</strong> NIST AI RMF and OWASP Top 10 inline PII redaction and safety bounds.</div>
    </div>
  </div>

  <!-- 4. Commercial Terms Section -->
  <div class="terms-box">
    <div class="terms-grid">
      <div class="term-col">
        <div class="term-title">Two Support Models</div>
        <div class="term-body">Select Option A ($50/hr, 10h/wk min) for dedicated proactive coverage, or Option B ($80/hr) for pure on-demand fixes.</div>
      </div>
      <div class="term-col">
        <div class="term-title">Transparent Tracking</div>
        <div class="term-body">Every minute tracked via Upwork Work Diary with clear memo notes, test verification logs, and git commit references.</div>
      </div>
      <div class="term-col">
        <div class="term-title">100% Client IP Ownership</div>
        <div class="term-body">All Make.com blueprints, Retell prompt iterations, regex parsers, and custom webhook code belong 100% to Stuart &amp; Co.</div>
      </div>
      <div class="term-col">
        <div class="term-title">Rapid Outage SLA</div>
        <div class="term-body">Priority &lt;2-hour response window for critical call drops or webhook failures during UK operating hours (Option A).</div>
      </div>
    </div>
  </div>

  <!-- 5. Formal Acceptance Authorization Block -->
  <div class="auth-block">
    <div class="auth-title">
      <span>Formal Authorization &amp; Engagement Acceptance</span>
      <span style="font-weight: 500; font-size: 7.3px; color: #475569;">Binding upon selection &amp; contract offer by authorized representatives</span>
    </div>
    <div class="auth-grid">
      <div class="auth-party">
        <div class="auth-party-title">Authorized Systems Architect: BarakahSoft LLC (Wyoming, USA)</div>
        <div>Signatory: <strong>Md Shakil Ahmed</strong> • Principal AI Systems Architect &amp; Founder</div>
        <div class="auth-sign-line">
          <div class="auth-sign-field">Shakil Ahmed</div>
          <div class="auth-date-field">16 Sep 2026</div>
        </div>
        <div style="display: flex; justify-content: space-between;">
          <span class="auth-label">Authorized Architect Signature</span>
          <span class="auth-label" style="width: 85px; text-align: center;">Date</span>
        </div>
      </div>

      <div class="auth-party">
        <div class="auth-party-title">Authorized Client: Stuart &amp; Co (Glasgow, Scotland, UK)</div>
        <div>Signatory: <strong>Stuart</strong> • Managing Director</div>
        <div class="auth-sign-line">
          <div class="auth-sign-field" style="color: #64748b; font-family: inherit; font-size: 7.8px; font-style: italic;">[ Accepted via Upwork Contract Offer / Sign-off ]</div>
          <div class="auth-date-field">___ / ___ / 2026</div>
        </div>
        <div style="display: flex; justify-content: space-between;">
          <span class="auth-label">Authorized Client Signature</span>
          <span class="auth-label" style="width: 85px; text-align: center;">Date</span>
        </div>
      </div>
    </div>
  </div>

  <!-- 6. Executive Signature Footer -->
  <div class="footer-container">
    <div class="footer-founder">
      <img src="data:image/jpeg;base64,{headshot_b64}" class="founder-avatar" alt="Md Shakil Ahmed">
      <div class="founder-info">
        <div class="founder-name"><strong>Md Shakil Ahmed</strong> • Principal AI Systems Architect &amp; Founder</div>
        <div class="founder-company"><strong>BarakahSoft LLC</strong> • Verified Upwork Partner • 12+ Years Enterprise Systems Engineering</div>
        <div class="founder-sub">Former Lead Systems Engineer at Legiit ($1M ARR Command Center) • Securiti Certified AI Architect</div>
      </div>
    </div>
    <div class="footer-brand">
      <img src="data:image/png;base64,{logo_b64}" class="business-logo" alt="BarakahSoft">
      <a href="https://callguard-ops.vercel.app" class="demo-badge">LIVE COCKPIT: CALLGUARD-OPS.VERCEL.APP</a>
    </div>
  </div>

</div>
</body>
</html>"""

    with open(html_path, "w", encoding="utf-8") as f:
        f.write(html_content)
    print(f"✓ Generated {html_path}")

    # Generate PDF using Headless Chrome
    chrome_paths = [
        "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
        "/Applications/Chromium.app/Contents/MacOS/Chromium",
        "google-chrome",
        "chromium",
    ]
    chrome_bin = None
    for p in chrome_paths:
        if os.path.exists(p):
            chrome_bin = p
            break

    if chrome_bin:
        cmd = [
            chrome_bin,
            "--headless=new",
            "--disable-gpu",
            "--no-pdf-header-footer",
            f"--print-to-pdf={pdf_path}",
            html_path
        ]
        res = subprocess.run(cmd, capture_output=True, text=True)
        if res.returncode == 0:
            print(f"✓ Generated PDF: {pdf_path}")
        else:
            print(f"⚠️ Headless Chrome PDF error: {res.stderr}")
            return False
    else:
        print("⚠️ Chrome binary not found. PDF not generated automatically.")
        return False

    # Validation
    if os.path.exists(pdf_path):
        with open(pdf_path, "rb") as f:
            pdf_bytes = f.read()
        pages = len(re.findall(rb"/Type\s*/Page[^s]", pdf_bytes))
        size_kb = len(pdf_bytes) / 1024
        print(f"PDF Audit: {pages} Page(s), {size_kb:.1f} KB")
        if pages != 1:
            print(f"❌ AUDIT FAILURE: PDF is {pages} pages (must be strictly 1 page).")
            return False
        else:
            print("✓ AUDIT PASSED: Strictly 1 page zero-whitespace gold standard.")
            return True
    return False

if __name__ == "__main__":
    success = build_estimate()
    if not success:
        sys.exit(1)
